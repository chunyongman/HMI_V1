import React from 'react'
import './Dashboard.css'

function Dashboard({ sensors = {}, pumps = [], fans = [] }) {
  const swPumps = pumps.slice(0, 3) // SWP1, SWP2, SWP3
  const fwPumps = pumps.slice(3, 6) // FWP1, FWP2, FWP3

  const totalSavedKwh = pumps.reduce((sum, pump) => sum + (pump.saved_kwh || 0), 0)
  const totalRunHours = pumps.reduce((sum, pump) => sum + (pump.run_hours || 0), 0)
  const runningPumps = pumps.filter(p => p.running).length
  const runningFans = fans.filter(f => f.running_fwd || f.running_bwd).length

  return (
    <div className="dashboard">
      {/* 시스템 개요 */}
      <section className="dashboard-section">
        <h2>📊 시스템 개요</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <div className="stat-label">총 절감 전력</div>
              <div className="stat-value">{totalSavedKwh.toLocaleString()} kWh</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <div className="stat-label">총 운전 시간</div>
              <div className="stat-value">{totalRunHours.toLocaleString()} h</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <div className="stat-content">
              <div className="stat-label">운전 중인 펌프</div>
              <div className="stat-value">{runningPumps} / {pumps.length}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌀</div>
            <div className="stat-content">
              <div className="stat-label">운전 중인 팬</div>
              <div className="stat-value">{runningFans} / {fans.length}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-content">
              <div className="stat-label">M/E 부하</div>
              <div className="stat-value">{sensors.PU1?.toFixed(1) || 0}%</div>
            </div>
          </div>
        </div>
      </section>

      {/* 센서 데이터 */}
      <section className="dashboard-section">
        <h2>🌡️ 센서 데이터</h2>
        <div className="sensor-grid">
          <SensorCard label="CSW 펌프 토출 온도 (TX1)" value={sensors.TX1} unit="°C" icon="🌡️" />
          <SensorCard label="FW Cooler 1 SW Out (TX2)" value={sensors.TX2} unit="°C" icon="🌡️" />
          <SensorCard label="FW Cooler 2 SW Out (TX3)" value={sensors.TX3} unit="°C" icon="🌡️" />
          <SensorCard label="FW Cooler FW In (TX4)" value={sensors.TX4} unit="°C" icon="🌡️" />
          <SensorCard label="FW Cooler FW Out (TX5)" value={sensors.TX5} unit="°C" icon="🌡️" />
          <SensorCard label="CSW 펌프 토출 압력 (DPX1)" value={sensors.DPX1} unit="kg/cm²" icon="💨" />
        </div>
        <div className="sensor-grid" style={{ marginTop: '1rem' }}>
          <SensorCard label="E/R Inside Temp (TX6)" value={sensors.TX6} unit="°C" icon="🌡️" />
          <SensorCard label="E/R Outside Temp (TX7)" value={sensors.TX7} unit="°C" icon="🌡️" />
        </div>
      </section>

      {/* 해수 펌프 (SWP) */}
      <section className="dashboard-section">
        <h2>🌊 해수 펌프 (Sea Water Pump)</h2>
        <div className="pump-grid">
          {swPumps.map((pump, idx) => (
            <PumpCard key={idx} pump={pump} />
          ))}
        </div>
      </section>

      {/* 청수 펌프 (FWP) */}
      <section className="dashboard-section">
        <h2>💧 청수 펌프 (Fresh Water Pump)</h2>
        <div className="pump-grid">
          {fwPumps.map((pump, idx) => (
            <PumpCard key={idx} pump={pump} />
          ))}
        </div>
      </section>

      {/* E/R Fan */}
      <section className="dashboard-section">
        <h2>🌀 Engine Room 팬 (E/R Fan)</h2>
        <div className="pump-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {fans.map((fan, idx) => (
            <FanCard key={idx} fan={fan} />
          ))}
        </div>
      </section>
    </div>
  )
}

function SensorCard({ label, value, unit, icon }) {
  return (
    <div className="sensor-card">
      <div className="sensor-icon">{icon}</div>
      <div className="sensor-info">
        <div className="sensor-label">{label}</div>
        <div className="sensor-value">
          {value !== undefined ? value.toFixed(1) : '--'} {unit}
        </div>
      </div>
    </div>
  )
}

function PumpCard({ pump }) {
  const isRunning = pump.running
  const avgSavingRatio = pump.saved_ratio || 0

  // 운전 모드 결정
  const getOperationMode = () => {
    if (pump.auto_mode && pump.vfd_mode) {
      return { text: '⚡ ESS 모드', class: 'ess-mode' }
    } else if (pump.auto_mode && !pump.vfd_mode) {
      return { text: '🔄 자동/Bypass', class: 'auto-bypass-mode' }
    } else if (!pump.auto_mode && pump.vfd_mode) {
      return { text: '🔧 수동/VFD', class: 'manual-vfd-mode' }
    } else {
      return { text: '⚙️ 수동/Bypass', class: 'manual-bypass-mode' }
    }
  }

  const operationMode = getOperationMode()

  return (
    <div className={`pump-card ${isRunning ? 'running' : 'stopped'}`}>
      <div className="pump-header">
        <h3>{pump.name}</h3>
        <div className="pump-header-badges">
          <span className={`mode-badge ${operationMode.class}`}>
            {operationMode.text}
          </span>
          <span className={`pump-status-badge ${isRunning ? 'active' : 'inactive'}`}>
            {isRunning ? '🟢 운전중' : '⚪ 정지'}
          </span>
        </div>
      </div>

      <div className="pump-details">
        <div className="pump-detail-row">
          <span className="detail-label">주파수</span>
          <span className="detail-value">{pump.frequency?.toFixed(1) || 0} Hz</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">소비 전력</span>
          <span className="detail-value">{pump.power_kw || 0} kW</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">절감 전력</span>
          <span className="detail-value highlight">{pump.saved_kwh?.toLocaleString() || 0} kWh</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">절감률</span>
          <span className="detail-value highlight">{avgSavingRatio}%</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">운전 시간</span>
          <span className="detail-value">{pump.run_hours?.toLocaleString() || 0} h</span>
        </div>
      </div>
    </div>
  )
}

function FanCard({ fan }) {
  const isRunning = fan.running_fwd || fan.running_bwd
  const avgSavingRatio = fan.saved_ratio || 0

  // 운전 모드 결정
  const getOperationMode = () => {
    if (fan.auto_mode && fan.vfd_mode) {
      return { text: '⚡ ESS 모드', class: 'ess-mode' }
    } else if (fan.auto_mode && !fan.vfd_mode) {
      return { text: '🔄 자동/Bypass', class: 'auto-bypass-mode' }
    } else if (!fan.auto_mode && fan.vfd_mode) {
      return { text: '🔧 수동/VFD', class: 'manual-vfd-mode' }
    } else {
      return { text: '⚙️ 수동/Bypass', class: 'manual-bypass-mode' }
    }
  }

  const operationMode = getOperationMode()

  return (
    <div className={`pump-card ${isRunning ? 'running' : 'stopped'}`}>
      <div className="pump-header">
        <h3>{fan.name}</h3>
        <div className="pump-header-badges">
          <span className={`mode-badge ${operationMode.class}`}>
            {operationMode.text}
          </span>
          <span className={`pump-status-badge ${isRunning ? 'active' : 'inactive'}`}>
            {fan.running_fwd ? '🟢 정방향' : fan.running_bwd ? '🟡 역방향' : '⚪ 정지'}
          </span>
        </div>
      </div>

      <div className="pump-details">
        <div className="pump-detail-row">
          <span className="detail-label">주파수</span>
          <span className="detail-value">{fan.frequency?.toFixed(1) || 0} Hz</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">소비 전력</span>
          <span className="detail-value">{fan.power_kw || 0} kW</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">절감 전력</span>
          <span className="detail-value highlight">{fan.saved_kwh?.toLocaleString() || 0} kWh</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">절감률</span>
          <span className="detail-value highlight">{avgSavingRatio}%</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">운전 시간</span>
          <span className="detail-value">{fan.run_hours?.toLocaleString() || 0} h</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard




