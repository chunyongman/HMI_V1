import React, { useState } from 'react'
import './PumpControl.css'

function PumpControl({ pumps = [], onCommand, onPumpCommand, isFanMode = false }) {
  const [selectedPump, setSelectedPump] = useState(null)
  const [commandInProgress, setCommandInProgress] = useState(false)

  const handleCommand = async (equipment, command) => {
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
        alert(`✅ ${equipment.name} ${cmdText} 명령 성공`)
      } else {
        alert(`❌ 명령 실패`)
      }
    } catch (error) {
      alert(`❌ 오류: ${error.message}`)
    } finally {
      setCommandInProgress(false)
    }
  }

  return (
    <div className={`pump-control ${isFanMode ? 'fan-mode' : ''}`}>
      <div className="control-header">
        <h2>{isFanMode ? '🌀 팬 제어' : '⚙️ 펌프 제어'}</h2>
        <p>{isFanMode ? '팬을 선택하고 정방향/역방향/정지 명령을 내릴 수 있습니다.' : '펌프를 선택하고 시작/정지 명령을 내릴 수 있습니다.'}</p>
      </div>

      <div className="control-grid">
        {!isFanMode ? (
          <>
            {/* 해수 펌프 */}
            <section className="control-section">
              <h3>🌊 해수 펌프 (Sea Water Pump)</h3>
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
                    isSelected={selectedPump === idx}
                    onSelect={() => setSelectedPump(idx)}
                  />
                ))}
              </div>
            </section>

            {/* 청수 펌프 */}
            <section className="control-section">
              <h3>💧 청수 펌프 (Fresh Water Pump)</h3>
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
                    isSelected={selectedPump === idx + 3}
                    onSelect={() => setSelectedPump(idx + 3)}
                  />
                ))}
              </div>
            </section>
          </>
        ) : (
          /* E/R 팬 */
          <section className="control-section">
            <h3>🌀 Engine Room 팬 (E/R Fan)</h3>
            <div className="pump-control-list">
              {pumps.map((fan, idx) => (
                <PumpControlCard
                  key={idx}
                  pump={fan}
                  pumpIndex={idx}
                  isFan={true}
                  onStart={() => handleCommand(fan, 'start_fwd')}
                  onStartBwd={() => handleCommand(fan, 'start_bwd')}
                  onStop={() => handleCommand(fan, 'stop')}
                  disabled={commandInProgress}
                  isSelected={selectedPump === idx}
                  onSelect={() => setSelectedPump(idx)}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 선택된 펌프 상세 정보 */}
      {selectedPump !== null && pumps[selectedPump] && (
        <div className="pump-detail-panel">
          <h3>📋 {pumps[selectedPump].name} 상세 정보</h3>
          <div className="detail-grid">
            <DetailItem label="운전 상태" value={pumps[selectedPump].running ? '🟢 운전중' : '⚪ 정지'} />
            <DetailItem label="ESS 모드" value={pumps[selectedPump].ess_mode ? '⚡ 활성' : '⚫ 비활성'} />
            <DetailItem label="현재 주파수" value={`${pumps[selectedPump].frequency?.toFixed(1)} Hz`} />
            <DetailItem label="현재 전력" value={`${pumps[selectedPump].power_kw} kW`} />
            <DetailItem label="평균 전력" value={`${pumps[selectedPump].avg_power} kW`} />
            <DetailItem label="절감 전력량" value={`${pumps[selectedPump].saved_kwh?.toLocaleString()} kWh`} />
            <DetailItem label="절감률" value={`${pumps[selectedPump].saved_ratio}%`} />
            <DetailItem label="운전 시간" value={`${pumps[selectedPump].run_hours?.toLocaleString()} h`} />
          </div>
        </div>
      )}
    </div>
  )
}

function PumpControlCard({ pump, pumpIndex, isFan, onStart, onStartBwd, onStop, disabled, isSelected, onSelect }) {
  const isRunning = isFan ? (pump.running_fwd || pump.running_bwd) : pump.running

  return (
    <div
      className={`pump-control-card ${isSelected ? 'selected' : ''} ${isRunning ? 'running' : 'stopped'}`}
      onClick={onSelect}
    >
      <div className="control-card-header">
        <h4>{pump.name}</h4>
        <span className={`status-indicator ${isRunning ? 'active' : 'inactive'}`}>
          {isFan ? (
            pump.running_fwd ? '🟢 정방향' :
            pump.running_bwd ? '🟡 역방향' : '⚪ 정지'
          ) : (
            pump.running ? '🟢 운전중' : '⚪ 정지'
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
            <button
              className="btn-start"
              onClick={(e) => { e.stopPropagation(); onStart(); }}
              disabled={disabled || pump.running_fwd}
            >
              ▶️ 정방향
            </button>
            <button
              className="btn-start-bwd"
              onClick={(e) => { e.stopPropagation(); onStartBwd(); }}
              disabled={disabled || pump.running_bwd}
            >
              ◀️ 역방향
            </button>
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
              className="btn-start"
              onClick={(e) => { e.stopPropagation(); onStart(); }}
              disabled={disabled || pump.running}
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

function DetailItem({ label, value }) {
  return (
    <div className="detail-item">
      <span className="detail-item-label">{label}</span>
      <span className="detail-item-value">{value}</span>
    </div>
  )
}

export default PumpControl




