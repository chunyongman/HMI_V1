import React from 'react'
import './SystemOverview.css'

function SystemOverview({ sensors = {}, pumps = [], fans = [], essData = null }) {
  const swPumps = pumps.slice(0, 3) // SWP1, SWP2, SWP3
  const fwPumps = pumps.slice(3, 6) // FWP1, FWP2, FWP3

  // ESS 데이터에서 총계 가져오기 (PLC에서 읽은 값)
  const totalSavedKwh = essData?.groups?.TOTAL?.saved_kwh || 0
  const totalEssHours = essData?.groups?.TOTAL?.ess_hours || 0  // HMI에서 'ess_hours'로 반환
  const totalSavingsRate = essData?.groups?.TOTAL?.savings_rate || 0

  const runningPumps = pumps.filter(p => p.running).length
  const runningFans = fans.filter(f => f.running_fwd || f.running_bwd).length

  return (
    <div className="system-overview-compact">
      {/* 상단: 시스템 개요 통계 */}
      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-icon">⚡</span>
          <div className="stat-info">
            <span className="stat-label">총 절감 전력</span>
            <span className="stat-value">{totalSavedKwh.toLocaleString()} kWh</span>
          </div>
        </div>
        <div className="stat-item">
          <span className="stat-icon">⏱️</span>
          <div className="stat-info">
            <span className="stat-label">ESS 운전 시간</span>
            <span className="stat-value">{totalEssHours.toLocaleString()} h</span>
          </div>
        </div>
        <div className="stat-item">
          <span className="stat-icon">📊</span>
          <div className="stat-info">
            <span className="stat-label">평균 절감률</span>
            <span className="stat-value">{totalSavingsRate.toFixed(1)}%</span>
          </div>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🔄</span>
          <div className="stat-info">
            <span className="stat-label">운전 중인 펌프</span>
            <span className="stat-value">{runningPumps} / {pumps.length}</span>
          </div>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🌀</span>
          <div className="stat-info">
            <span className="stat-label">운전 중인 팬</span>
            <span className="stat-value">{runningFans} / {fans.length}</span>
          </div>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🔥</span>
          <div className="stat-info">
            <span className="stat-label">M/E 부하</span>
            <span className="stat-value">{sensors.PU1?.toFixed(1) || 0}%</span>
          </div>
        </div>
      </div>

      {/* 중단: 펌프 (SWP + FWP) */}
      <div className="equipment-row">
        <div className="equipment-group">
          <h3>🌊 해수 펌프 (SWP) <span className="rated-power">모터 정격 132 kW</span></h3>
          <div className="equipment-cards">
            {swPumps.map((pump, idx) => (
              <CompactPumpCard key={idx} pump={pump} />
            ))}
          </div>
        </div>
        <div className="equipment-group">
          <h3>💧 청수 펌프 (FWP) <span className="rated-power">모터 정격 75 kW</span></h3>
          <div className="equipment-cards">
            {fwPumps.map((pump, idx) => (
              <CompactPumpCard key={idx} pump={pump} />
            ))}
          </div>
        </div>
      </div>

      {/* 하단: E/R Fan */}
      <div className="fan-row">
        <h3>🌀 Engine Room 팬 (E/R Fan) <span className="rated-power">모터 정격 54.3 kW</span></h3>
        <div className="fan-cards">
          {fans.map((fan, idx) => (
            <CompactFanCard key={idx} fan={fan} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CompactPumpCard({ pump }) {
  const isRunning = pump.running

  const getOperationMode = () => {
    if (pump.auto_mode && pump.vfd_mode) {
      return { text: 'ESS', class: 'ess-mode' }
    } else if (pump.auto_mode && !pump.vfd_mode) {
      return { text: 'A/B', class: 'auto-bypass-mode' }
    } else if (!pump.auto_mode && pump.vfd_mode) {
      return { text: 'M/V', class: 'manual-vfd-mode' }
    } else {
      return { text: 'M/B', class: 'manual-bypass-mode' }
    }
  }

  // 그룹별 테두리 색상 설정
  const getGroupBorderColor = (name) => {
    if (name && name.startsWith('SWP')) return '#3b82f6';  // 파란색 (해수펌프)
    if (name && name.startsWith('FWP')) return '#10b981';  // 초록색 (청수펌프)
    return '#334155';
  }

  const operationMode = getOperationMode()

  return (
    <div className={`compact-card ${isRunning ? 'running' : 'stopped'}`} style={{ border: `2px solid ${getGroupBorderColor(pump.name)}` }}>
      <div className="compact-header">
        <span className="compact-name">
          {pump.name}
          <span className={`impeller-icon ${isRunning ? 'running' : 'stopped'}`}>
            <svg viewBox="0 0 24 24" width="40" height="40">
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
              <path d="M12 2 C14 6 16 8 12 12 C8 8 10 6 12 2" fill="currentColor"/>
              <path d="M22 12 C18 14 16 16 12 12 C16 8 18 10 22 12" fill="currentColor"/>
              <path d="M12 22 C10 18 8 16 12 12 C16 16 14 18 12 22" fill="currentColor"/>
              <path d="M2 12 C6 10 8 8 12 12 C8 16 6 14 2 12" fill="currentColor"/>
            </svg>
          </span>
        </span>
        <span className={`compact-mode ${operationMode.class}`}>{operationMode.text}</span>
        <span className={`compact-status ${isRunning ? 'on' : 'off'}`}>
          {isRunning ? '●' : '○'}
        </span>
      </div>
      <div className="compact-body">
        <div className="compact-row">
          <span>주파수</span>
          <span className="value">{pump.frequency?.toFixed(1) || 0} Hz</span>
        </div>
        <div className="compact-row">
          <span>전력</span>
          <span className="value">{pump.power_kw || 0} kW</span>
        </div>
        <div className="compact-row highlight">
          <span>절감률</span>
          <span className="value">{pump.saved_ratio || 0}%</span>
        </div>
      </div>
    </div>
  )
}

function CompactFanCard({ fan }) {
  const isRunning = fan.running_fwd || fan.running_bwd

  const getOperationMode = () => {
    if (fan.auto_mode && fan.vfd_mode) {
      return { text: 'ESS', class: 'ess-mode' }
    } else if (fan.auto_mode && !fan.vfd_mode) {
      return { text: 'A/B', class: 'auto-bypass-mode' }
    } else if (!fan.auto_mode && fan.vfd_mode) {
      return { text: 'M/V', class: 'manual-vfd-mode' }
    } else {
      return { text: 'M/B', class: 'manual-bypass-mode' }
    }
  }

  const operationMode = getOperationMode()

  // 팬 그룹 테두리 색상 (보라색)
  const fanBorderColor = '#a855f7'

  return (
    <div className={`compact-card ${isRunning ? 'running' : 'stopped'}`} style={{ border: `2px solid ${fanBorderColor}` }}>
      <div className="compact-header">
        <span className="compact-name">
          {fan.name}
          <span className={`fan-icon ${fan.running_fwd ? 'running-fwd' : fan.running_bwd ? 'running-bwd' : 'stopped'}`}>
            <svg viewBox="0 0 24 24" width="40" height="40">
              <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
              <path d="M12 3 C12 3 15 7 15 9 C15 11 13 12 12 12 C11 12 9 11 9 9 C9 7 12 3 12 3" fill="currentColor"/>
              <path d="M21 12 C21 12 17 15 15 15 C13 15 12 13 12 12 C12 11 13 9 15 9 C17 9 21 12 21 12" fill="currentColor"/>
              <path d="M12 21 C12 21 9 17 9 15 C9 13 11 12 12 12 C13 12 15 13 15 15 C15 17 12 21 12 21" fill="currentColor"/>
              <path d="M3 12 C3 12 7 9 9 9 C11 9 12 11 12 12 C12 13 11 15 9 15 C7 15 3 12 3 12" fill="currentColor"/>
            </svg>
          </span>
        </span>
        <span className={`compact-mode ${operationMode.class}`}>{operationMode.text}</span>
        <span className={`compact-status ${isRunning ? 'on' : 'off'}`}>
          {isRunning ? '●' : '○'}
        </span>
      </div>
      <div className="compact-body">
        <div className="compact-row">
          <span>주파수</span>
          <span className="value">{fan.frequency?.toFixed(1) || 0} Hz</span>
        </div>
        <div className="compact-row">
          <span>전력</span>
          <span className="value">{fan.power_kw || 0} kW</span>
        </div>
        <div className="compact-row highlight">
          <span>절감률</span>
          <span className="value">{fan.saved_ratio || 0}%</span>
        </div>
      </div>
    </div>
  )
}

export default SystemOverview
