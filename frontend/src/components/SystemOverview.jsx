import React from 'react'
import './SystemOverview.css'

function SystemOverview({ sensors = {}, pumps = [], fans = [] }) {
  const swPumps = pumps.slice(0, 3) // SWP1, SWP2, SWP3
  const fwPumps = pumps.slice(3, 6) // FWP1, FWP2, FWP3

  const totalSavedKwh = pumps.reduce((sum, pump) => sum + (pump.saved_kwh || 0), 0)
  const totalRunHours = pumps.reduce((sum, pump) => sum + (pump.run_hours || 0), 0)
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
            <span className="stat-label">총 운전 시간</span>
            <span className="stat-value">{totalRunHours.toLocaleString()} h</span>
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
          <h3>🌊 해수 펌프 (SWP)</h3>
          <div className="equipment-cards">
            {swPumps.map((pump, idx) => (
              <CompactPumpCard key={idx} pump={pump} />
            ))}
          </div>
        </div>
        <div className="equipment-group">
          <h3>💧 청수 펌프 (FWP)</h3>
          <div className="equipment-cards">
            {fwPumps.map((pump, idx) => (
              <CompactPumpCard key={idx} pump={pump} />
            ))}
          </div>
        </div>
      </div>

      {/* 하단: E/R Fan */}
      <div className="fan-row">
        <h3>🌀 Engine Room 팬 (E/R Fan)</h3>
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

  const operationMode = getOperationMode()

  return (
    <div className={`compact-card ${isRunning ? 'running' : 'stopped'}`}>
      <div className="compact-header">
        <span className="compact-name">{pump.name}</span>
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

  return (
    <div className={`compact-card ${isRunning ? 'running' : 'stopped'}`}>
      <div className="compact-header">
        <span className="compact-name">{fan.name}</span>
        <span className={`compact-mode ${operationMode.class}`}>{operationMode.text}</span>
        <span className={`compact-status ${isRunning ? 'on' : 'off'}`}>
          {fan.running_fwd ? '▶' : fan.running_bwd ? '◀' : '○'}
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
