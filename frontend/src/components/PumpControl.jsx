import React, { useState, useEffect } from 'react'
import './PumpControl.css'

function PumpControl({ pumps = [], fans = [], onCommand, onPumpCommand }) {
  const [commandInProgress, setCommandInProgress] = useState(false)
  const [toast, setToast] = useState(null)
  const [directionChangeInProgress, setDirectionChangeInProgress] = useState(null) // { fanName, targetDirection }

  // 토스트 메시지 자동 숨김
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
  }

  // 방향 전환 중인 팬의 주파수 확인 (0Hz가 되면 새 방향으로 시작)
  useEffect(() => {
    if (!directionChangeInProgress) return

    const { fanName, targetDirection } = directionChangeInProgress
    const fan = fans.find(f => f.name === fanName)

    if (!fan) {
      setDirectionChangeInProgress(null)
      return
    }

    // 주파수가 0Hz 이하이고, 운전 상태가 모두 정지인 경우
    const frequency = fan.frequency || 0
    const isStopped = !fan.running_fwd && !fan.running_bwd

    if (frequency <= 0.5 && isStopped) {
      // 정지 완료 - 새 방향으로 시작
      const startCommand = targetDirection === 'fwd' ? 'start_fwd' : 'start_bwd'
      const directionText = targetDirection === 'fwd' ? '정방향' : '역방향'

      showToast(`🔄 ${fanName} 정지 완료 - ${directionText} 시작 중...`, 'success')

      // 새 방향으로 시작 명령 전송
      if (onCommand) {
        onCommand(fanName, startCommand).then(success => {
          if (success) {
            showToast(`✅ ${fanName} ${directionText} 전환 완료`, 'success')
          } else {
            showToast(`❌ ${fanName} ${directionText} 시작 실패`, 'error')
          }
          setDirectionChangeInProgress(null)
          setCommandInProgress(false)
        })
      }
    }
  }, [fans, directionChangeInProgress, onCommand])

  // 그룹별 운전 중인 펌프/팬 개수 계산
  const MAX_RUNNING_PER_GROUP = 2

  const getRunningCount = (group) => {
    if (group === 'SWP') {
      return pumps.slice(0, 3).filter(p => p.running).length
    } else if (group === 'FWP') {
      return pumps.slice(3, 6).filter(p => p.running).length
    } else if (group === 'FAN') {
      return fans.filter(f => f.running_fwd || f.running_bwd).length
    }
    return 0
  }

  // 인터록 체크: 해당 장비가 시작 가능한지 확인
  // 팬(FAN)은 인터록 적용하지 않음 - 펌프만 적용
  const canStart = (equipment) => {
    const name = equipment.name || ''

    // 팬은 인터록 없이 항상 시작 가능
    if (name.startsWith('FAN')) return true

    let group = ''
    if (name.startsWith('SWP')) group = 'SWP'
    else if (name.startsWith('FWP')) group = 'FWP'

    const runningCount = getRunningCount(group)
    return runningCount < MAX_RUNNING_PER_GROUP
  }

  // 팬 방향 전환 처리 (운전 중 반대 방향 버튼 클릭 시)
  const handleDirectionChange = async (fan, targetDirection) => {
    const currentDirection = fan.running_fwd ? 'fwd' : 'bwd'
    const currentDirText = currentDirection === 'fwd' ? '정방향' : '역방향'
    const targetDirText = targetDirection === 'fwd' ? '정방향' : '역방향'

    // 이미 같은 방향이면 무시
    if (currentDirection === targetDirection) return

    setCommandInProgress(true)
    showToast(`⏳ ${fan.name} 방향 전환 중... (${currentDirText} → ${targetDirText})`, 'success')

    // 1. 정지 명령 전송
    try {
      const stopSuccess = await onCommand(fan.name, 'stop')
      if (!stopSuccess) {
        showToast(`❌ ${fan.name} 정지 명령 실패`, 'error')
        setCommandInProgress(false)
        return
      }

      // 2. 방향 전환 상태 설정 (useEffect에서 주파수 0Hz 모니터링)
      setDirectionChangeInProgress({
        fanName: fan.name,
        targetDirection: targetDirection,
        startTime: Date.now()
      })

      showToast(`⏳ ${fan.name} 감속 중... (0Hz 대기)`, 'success')

    } catch (error) {
      showToast(`❌ 오류: ${error.message}`, 'error')
      setCommandInProgress(false)
    }
  }

  // 타임아웃 처리 (30초 이상 정지되지 않으면 취소)
  useEffect(() => {
    if (!directionChangeInProgress) return

    const timeout = setTimeout(() => {
      if (directionChangeInProgress) {
        showToast(`⚠️ ${directionChangeInProgress.fanName} 방향 전환 타임아웃 (30초)`, 'error')
        setDirectionChangeInProgress(null)
        setCommandInProgress(false)
      }
    }, 30000) // 30초 타임아웃

    return () => clearTimeout(timeout)
  }, [directionChangeInProgress])

  const handleCommand = async (equipment, command) => {
    // 팬이 운전 중일 때 반대 방향 시작 명령이면 방향 전환 처리
    if (equipment.name?.startsWith('FAN')) {
      const isRunning = equipment.running_fwd || equipment.running_bwd

      if (isRunning) {
        // 운전 중에 반대 방향 버튼 클릭
        if (command === 'start_fwd' && equipment.running_bwd) {
          handleDirectionChange(equipment, 'fwd')
          return
        }
        if (command === 'start_bwd' && equipment.running_fwd) {
          handleDirectionChange(equipment, 'bwd')
          return
        }
      }
    }

    // 시작 명령일 때 인터록 체크
    if (command === 'start' || command === 'start_fwd' || command === 'start_bwd') {
      if (!canStart(equipment)) {
        const name = equipment.name || ''
        let groupName = ''
        if (name.startsWith('SWP')) groupName = '해수 펌프'
        else if (name.startsWith('FWP')) groupName = '청수 펌프'
        else if (name.startsWith('FAN')) groupName = 'E/R 팬'

        showToast(`⚠️ ${groupName} 그룹에서 이미 2대가 운전 중입니다. 1대를 먼저 정지하세요.`, 'error')
        return
      }
    }

    setCommandInProgress(true)
    try {
      let success = false

      // 새로운 API 사용 (equipment_name 기반)
      if (onCommand && equipment.name) {
        success = await onCommand(equipment.name, command)
      }
      // 하위 호환성 (pump_index 기반)
      else if (onPumpCommand) {
        const pumpIndex = pumps.findIndex(p => p === equipment)
        success = await onPumpCommand(pumpIndex, command)
      }

      const cmdText = command === 'start' ? '시작' :
                      command === 'start_fwd' ? '정방향 시작' :
                      command === 'start_bwd' ? '역방향 시작' : '정지'

      if (success) {
        showToast(`✅ ${equipment.name} ${cmdText} 명령 성공`, 'success')
      } else {
        showToast(`❌ 명령 실패`, 'error')
      }
    } catch (error) {
      showToast(`❌ 오류: ${error.message}`, 'error')
    } finally {
      setCommandInProgress(false)
    }
  }

  return (
    <div className="pump-control unified-mode">
      <div className="control-header">
        <h2>⚙️ 운전 제어</h2>
        <p>펌프와 팬을 선택하고 운전 명령을 내릴 수 있습니다.</p>
      </div>

      <div className="control-grid">
        {/* 해수 펌프 */}
        <section className="control-section">
          <h3>🌊 해수 펌프 (Sea Water Pump) <span className="running-count">({getRunningCount('SWP')}/{MAX_RUNNING_PER_GROUP} 운전)</span></h3>
          <div className="pump-control-list">
            {pumps.slice(0, 3).map((pump, idx) => (
              <PumpControlCard
                key={idx}
                pump={pump}
                pumpIndex={idx}
                isFan={false}
                onStart={() => handleCommand(pump, 'start')}
                onStop={() => handleCommand(pump, 'stop')}
                disabled={commandInProgress}
                canStart={canStart(pump)}
              />
            ))}
          </div>
        </section>

        {/* 청수 펌프 */}
        <section className="control-section">
          <h3>💧 청수 펌프 (Fresh Water Pump) <span className="running-count">({getRunningCount('FWP')}/{MAX_RUNNING_PER_GROUP} 운전)</span></h3>
          <div className="pump-control-list">
            {pumps.slice(3, 6).map((pump, idx) => (
              <PumpControlCard
                key={idx + 3}
                pump={pump}
                pumpIndex={idx + 3}
                isFan={false}
                onStart={() => handleCommand(pump, 'start')}
                onStop={() => handleCommand(pump, 'stop')}
                disabled={commandInProgress}
                canStart={canStart(pump)}
              />
            ))}
          </div>
        </section>

        {/* E/R 팬 - 인터록 없음 */}
        <section className="control-section">
          <h3>🌀 Engine Room 팬 (E/R Fan)</h3>
          <div className="pump-control-list fan-grid">
            {fans.map((fan, idx) => (
              <PumpControlCard
                key={idx}
                pump={fan}
                pumpIndex={idx}
                isFan={true}
                onStart={() => handleCommand(fan, 'start_fwd')}
                onStartBwd={() => handleCommand(fan, 'start_bwd')}
                onStop={() => handleCommand(fan, 'stop')}
                disabled={commandInProgress}
                canStart={canStart(fan)}
                isChangingDirection={directionChangeInProgress?.fanName === fan.name}
              />
            ))}
          </div>
        </section>
      </div>

      {/* 토스트 메시지 */}
      {toast && (
        <div className={`toast-message ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  )
}

function PumpControlCard({ pump, pumpIndex, isFan, onStart, onStartBwd, onStop, disabled, canStart = true, isChangingDirection = false }) {
  const isRunning = isFan ? (pump.running_fwd || pump.running_bwd) : pump.running

  // 그룹별 테두리 색상 설정
  const getGroupBorderColor = (name) => {
    if (name && name.startsWith('SWP')) return '#3b82f6';  // 파란색 (해수펌프)
    if (name && name.startsWith('FWP')) return '#10b981';  // 초록색 (청수펌프)
    if (name && name.startsWith('FAN')) return '#a855f7';  // 보라색 (팬)
    return '#334155';
  }

  return (
    <div className={`pump-control-card ${isRunning ? 'running' : 'stopped'} ${isChangingDirection ? 'changing-direction' : ''}`} style={{ border: `2px solid ${getGroupBorderColor(pump.name)}` }}>
      <div className="control-card-header">
        <h4>{pump.name}</h4>
        <span className={`status-indicator ${
          isChangingDirection ? 'changing' :
          isFan && pump.running_bwd ? 'reverse' :
          isRunning ? 'active' : 'inactive'
        }`}>
          {isChangingDirection ? (
            <>
              <span className="rotating-icon slow">🔄</span> 전환 중...
            </>
          ) : isFan ? (
            pump.running_fwd ? (
              <>
                <span className="rotating-icon">⚙️</span> 정방향
              </>
            ) :
            pump.running_bwd ? (
              <>
                <span className="rotating-icon reverse">⚙️</span> 역방향
              </>
            ) : '⚪ 정지'
          ) : (
            pump.running ? (
              <>
                <span className="rotating-icon">⚙️</span> 운전중
              </>
            ) : '⚪ 정지'
          )}
        </span>
      </div>

      <div className="control-card-info">
        <div className="info-item">
          <span className="info-label">주파수</span>
          <span className="info-value">{pump.frequency?.toFixed(1) || 0} Hz</span>
        </div>
        <div className="info-item">
          <span className="info-label">전력</span>
          <span className="info-value">{pump.power_kw || 0} kW</span>
        </div>
      </div>

      <div className="control-buttons">
        {isFan ? (
          <>
            <div className="direction-toggle">
              <button
                className={`toggle-btn ${pump.running_fwd ? 'active' : ''} ${!canStart && !isRunning ? 'interlock' : ''}`}
                onClick={(e) => { e.stopPropagation(); onStart(); }}
                disabled={disabled || pump.running_fwd || (!canStart && !isRunning)}
                title={!canStart && !isRunning ? '인터록: 2대 운전 중' : ''}
              >
                ▶️ 정방향
              </button>
              <button
                className={`toggle-btn ${pump.running_bwd ? 'active' : ''} ${!canStart && !isRunning ? 'interlock' : ''}`}
                onClick={(e) => { e.stopPropagation(); onStartBwd(); }}
                disabled={disabled || pump.running_bwd || (!canStart && !isRunning)}
                title={!canStart && !isRunning ? '인터록: 2대 운전 중' : ''}
              >
                ◀️ 역방향
              </button>
            </div>
            <button
              className="btn-stop"
              onClick={(e) => { e.stopPropagation(); onStop(); }}
              disabled={disabled || !isRunning}
            >
              ⏸️ 정지
            </button>
          </>
        ) : (
          <>
            <button
              className={`btn-start ${!canStart && !pump.running ? 'interlock' : ''}`}
              onClick={(e) => { e.stopPropagation(); onStart(); }}
              disabled={disabled || pump.running || (!canStart && !pump.running)}
              title={!canStart && !pump.running ? '인터록: 2대 운전 중' : ''}
            >
              ▶️ 시작
            </button>
            <button
              className="btn-stop"
              onClick={(e) => { e.stopPropagation(); onStop(); }}
              disabled={disabled || !pump.running}
            >
              ⏸️ 정지
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default PumpControl




