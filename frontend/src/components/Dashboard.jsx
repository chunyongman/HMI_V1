import React, { useState, useEffect } from 'react'
import './Dashboard.css'

function Dashboard() {
  // 에너지 절감률 데이터
  const [energySavings, setEnergySavings] = useState(null)

  // AI 목표 주파수 제어 데이터
  const [aiFreqControl, setAiFreqControl] = useState([])

  // 에너지 절감 상세 요약 데이터
  const [energySavingsSummary, setEnergySavingsSummary] = useState([])

  // 로딩 상태
  const [loading, setLoading] = useState(true)

  // 모든 데이터를 병렬로 가져오기
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [energyRes, aiFreqRes, summaryRes] = await Promise.all([
          fetch('http://localhost:8001/api/energy-savings'),
          fetch('http://localhost:8001/api/ai-frequency-control'),
          fetch('http://localhost:8001/api/energy-savings-summary')
        ])

        const [energyData, aiFreqData, summaryData] = await Promise.all([
          energyRes.json(),
          aiFreqRes.json(),
          summaryRes.json()
        ])

        if (energyData.success) setEnergySavings(energyData.data)
        if (aiFreqData.success) setAiFreqControl(aiFreqData.data)
        if (summaryData.success) setEnergySavingsSummary(summaryData.data)
      } catch (error) {
        console.error('데이터 로드 실패:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllData()
    const interval = setInterval(fetchAllData, 2000) // 2초마다 업데이트

    return () => clearInterval(interval)
  }, [])

  // 로딩 중 표시
  if (loading) {
    return (
      <div className="dashboard-compact" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', color: '#94a3b8' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
          <div>데이터 로딩 중...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-compact">
      {/* 상단: 에너지 절감 현황 */}
      {energySavings && (
        <div className="top-section">
          <CompactEnergySavingsCard data={energySavings} />
        </div>
      )}

      {/* 하단: Summary Table + AI 주파수 테이블 */}
      <div className="bottom-section">
        {/* Energy Saving Summary Table */}
        {energySavingsSummary.length > 0 && (
          <div className="table-panel">
            <h3>📋 Energy Saving Summary</h3>
            <div className="table-scroll">
              <CompactSummaryTable data={energySavingsSummary} />
            </div>
          </div>
        )}

        {/* AI 목표 vs 실제 주파수 현황 */}
        {aiFreqControl.length > 0 && (
          <div className="table-panel">
            <h3>📈 AI 목표 vs 실제 주파수</h3>
            <div className="table-scroll">
              <CompactAIFreqTable data={aiFreqControl} />
            </div>
          </div>
        )}
      </div>
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
          <span className="detail-label">절감률</span>
          <span className="detail-value highlight">{avgSavingRatio}%</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">운전 시간</span>
          <span className="detail-value">{pump.run_hours?.toLocaleString() || 0} h</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">누적 절감 전력</span>
          <span className="detail-value highlight">{pump.saved_kwh?.toLocaleString() || 0} kWh</span>
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
          <span className="detail-label">절감률</span>
          <span className="detail-value highlight">{avgSavingRatio}%</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">운전 시간</span>
          <span className="detail-value">{fan.run_hours?.toLocaleString() || 0} h</span>
        </div>
        <div className="pump-detail-row">
          <span className="detail-label">누적 절감 전력</span>
          <span className="detail-value highlight">{fan.saved_kwh?.toLocaleString() || 0} kWh</span>
        </div>
      </div>
    </div>
  )
}

// 컴팩트 에너지 절감률 카드
function CompactEnergySavingsCard({ data }) {
  const realtime = data?.realtime || {}
  const today = data?.today || {}
  const month = data?.month || {}
  const total = realtime?.total || {}
  const swp = realtime?.swp || {}
  const fwp = realtime?.fwp || {}
  const fan = realtime?.fan || {}

  return (
    <div className="compact-energy-card">
      {/* 좌측: 실시간 절감률 */}
      <div className="realtime-panel">
        <div className="panel-title">🔴 실시간 순간 절감률</div>
        <div className="realtime-grid">
          <div className="realtime-item">
            <span className="label">60Hz 고정</span>
            <span className="value">{(total.power_60hz || 0).toLocaleString()} kW</span>
          </div>
          <div className="realtime-item">
            <span className="label">VFD 가변</span>
            <span className="value vfd">{(total.power_vfd || 0).toLocaleString()} kW</span>
          </div>
          <div className="realtime-item highlight">
            <span className="label">절감 전력</span>
            <span className="value saving">{(total.savings_kw || 0).toLocaleString()} kW ({total.savings_rate || 0}%↓)</span>
          </div>
        </div>
      </div>

      {/* 중앙: 누적 절감 */}
      <div className="accumulated-panel">
        <div className="acc-item">
          <div className="panel-title">📅 오늘 누적</div>
          <div className="acc-value">{(today.total_kwh_saved || 0).toLocaleString()} kWh</div>
          <div className="acc-rate">평균 {today.avg_savings_rate || 0}% 절감</div>
        </div>
        <div className="acc-item">
          <div className="panel-title">📊 이번 달 누적</div>
          <div className="acc-value">{(month.total_kwh_saved || 0).toLocaleString()} kWh</div>
          <div className="acc-rate">평균 {month.avg_savings_rate || 0}% 절감</div>
        </div>
      </div>

      {/* 우측: 시스템별 절감률 */}
      <div className="system-panel">
        <div className="panel-title">시스템별 절감률</div>
        <CompactSystemRow label="SWP" kw={swp.savings_kw || 0} rate={swp.savings_rate || 0} color="#38bdf8" />
        <CompactSystemRow label="FWP" kw={fwp.savings_kw || 0} rate={fwp.savings_rate || 0} color="#34d399" />
        <CompactSystemRow label="FAN" kw={fan.savings_kw || 0} rate={fan.savings_rate || 0} color="#fbbf24" />
      </div>
    </div>
  )
}

function CompactSystemRow({ label, kw, rate, color }) {
  return (
    <div className="system-row">
      <span className="sys-label" style={{ borderLeft: `3px solid ${color}` }}>{label}</span>
      <span className="sys-kw">{kw} kW</span>
      <div className="sys-bar">
        <div className="sys-bar-fill" style={{ width: `${Math.min(rate, 100)}%`, background: color }} />
      </div>
      <span className="sys-rate">{rate}%</span>
    </div>
  )
}

// 컴팩트 Summary 테이블
function CompactSummaryTable({ data }) {
  const getType = (name) => {
    if (name.startsWith('SWP')) return 'swp'
    if (name.startsWith('FWP')) return 'fwp'
    if (name.startsWith('FAN')) return 'fan'
    return ''
  }

  return (
    <table className="compact-table summary-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Freq (Hz)</th>
          <th>Power (kW)</th>
          <th>Saved (kWh)</th>
          <th>Ratio (%)</th>
          <th>ESS Hours</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx} className={getType(item.name)}>
            <td className="name">{item.name}</td>
            <td>{item.actual_freq}</td>
            <td>{item.actual_power}</td>
            <td>{item.saved_kwh}</td>
            <td className={item.saved_ratio > 0 ? 'positive' : ''}>{item.saved_ratio}</td>
            <td>{item.run_hours_ess.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// 컴팩트 AI 주파수 테이블
function CompactAIFreqTable({ data }) {
  const grouped = {
    'SW 펌프': data.filter(i => i.group === 'SW 펌프'),
    'FW 펌프': data.filter(i => i.group === 'FW 펌프'),
    'E/R 팬': data.filter(i => i.group === 'E/R 팬')
  }

  return (
    <table className="compact-table ai-table">
      <thead>
        <tr>
          <th>그룹</th>
          <th>장비</th>
          <th>모드</th>
          <th>목표</th>
          <th>실제</th>
          <th>편차</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(grouped).map(([group, items]) =>
          items.map((item, idx) => (
            <tr key={`${group}-${idx}`}>
              {idx === 0 && <td rowSpan={items.length} className="group">{group}</td>}
              <td>{item.name}</td>
              <td className={item.mode === 'AI 제어' ? 'ai' : 'stop'}>{item.mode === 'AI 제어' ? 'AI' : '-'}</td>
              <td>{item.mode === 'AI 제어' ? item.target_frequency.toFixed(1) : '-'}</td>
              <td>{item.mode === 'AI 제어' ? item.actual_frequency.toFixed(1) : '-'}</td>
              <td className={item.mode === 'AI 제어' ? (Math.abs(item.deviation) < 0.3 ? 'good' : Math.abs(item.deviation) < 1 ? 'warn' : 'bad') : ''}>
                {item.mode === 'AI 제어' ? (item.deviation >= 0 ? '+' : '') + item.deviation.toFixed(1) : '-'}
              </td>
              <td className={item.mode === 'AI 제어' ? `status-${item.status}` : ''}>
                {item.mode === 'AI 제어' ? (item.status === '정상' ? '✓' : item.status === '주의' ? '⚠' : '⚠') : '-'}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

// 에너지 절감률 카드 컴포넌트 (기존 - 호환성 유지)
function EnergySavingsCard({ data }) {
  // 안전한 데이터 추출 (undefined 체크)
  const realtime = data?.realtime || {}
  const today = data?.today || {}
  const month = data?.month || {}
  const total = realtime?.total || {}
  const swp = realtime?.swp || {}
  const fwp = realtime?.fwp || {}
  const fan = realtime?.fan || {}

  return (
    <div className="energy-savings-card">
      {/* 실시간 + 누적 절감 현황 */}
      <div className="energy-total-section">
        <div className="energy-total-header">
          <h3>💡 에너지 절감 현황</h3>
        </div>

        {/* 실시간 절감률 */}
        <div className="energy-total-info">
          <div className="realtime-section">
            <div className="section-title">🔴 실시간 순간 절감률</div>
            <div className="energy-comparison">
              <span className="energy-label">60Hz 고정:</span>
              <span className="energy-value">{(total.power_60hz || 0).toLocaleString()} kW</span>
            </div>
            <div className="energy-comparison">
              <span className="energy-label">VFD 가변:</span>
              <span className="energy-value vfd-value">{(total.power_vfd || 0).toLocaleString()} kW</span>
            </div>
            <div className="energy-savings-highlight">
              <span className="savings-label">절감 전력:</span>
              <span className="savings-value">
                {(total.savings_kw || 0).toLocaleString()} kW
                <span className="savings-rate"> ({total.savings_rate || 0}% ↓)</span>
              </span>
            </div>
          </div>

          {/* 누적 절감률 */}
          <div className="accumulated-section">
            <div className="accumulated-item">
              <div className="section-title">📅 오늘 누적 (00:00부터)</div>
              <div className="accumulated-value">
                <span className="kwh-value">{(today.total_kwh_saved || 0).toLocaleString()} kWh</span>
                <span className="rate-badge">평균 {today.avg_savings_rate || 0}% 절감</span>
              </div>
            </div>
            <div className="accumulated-item">
              <div className="section-title">📊 이번 달 누적 (1일부터)</div>
              <div className="accumulated-value">
                <span className="kwh-value">{(month.total_kwh_saved || 0).toLocaleString()} kWh</span>
                <span className="rate-badge">평균 {month.avg_savings_rate || 0}% 절감</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 시스템별 절감률 */}
      <div className="energy-details-section">
        <h4>시스템별 절감률</h4>
        <div className="energy-systems-grid">
          <SystemSavingsRow label="SWP" data={swp} color="#38bdf8" />
          <SystemSavingsRow label="FWP" data={fwp} color="#34d399" />
          <SystemSavingsRow label="E/R FAN" data={fan} color="#fbbf24" />
        </div>
      </div>
    </div>
  )
}

// 시스템별 절감률 행
function SystemSavingsRow({ label, data, color }) {
  const savings_kw = data?.savings_kw || 0
  const savings_rate = data?.savings_rate || 0

  return (
    <div className="system-savings-row">
      <div className="system-label" style={{ borderLeft: `4px solid ${color}` }}>
        {label}
      </div>
      <div className="system-savings-data">
        <div className="system-power">
          <span className="power-value">{savings_kw} kW</span>
        </div>
        <div className="system-progress">
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{
                width: `${Math.min(savings_rate, 100)}%`,
                backgroundColor: color
              }}
            />
          </div>
          <span className="progress-rate">{savings_rate}%</span>
        </div>
      </div>
    </div>
  )
}

// AI 목표 주파수 제어 테이블 컴포넌트
function AIFrequencyControlTable({ data }) {
  // 그룹별로 데이터 정리
  const groupedData = {
    'SW 펌프': data.filter(item => item.group === 'SW 펌프'),
    'FW 펌프': data.filter(item => item.group === 'FW 펌프'),
    'E/R 팬': data.filter(item => item.group === 'E/R 팬')
  }

  return (
    <div className="ai-freq-table-wrapper">
      <table className="ai-freq-table">
        <thead>
          <tr>
            <th>그룹</th>
            <th>장비명</th>
            <th>제어 모드</th>
            <th>입력 조건</th>
            <th>목표 주파수</th>
            <th>실제 주파수</th>
            <th>편차</th>
            <th>판단</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedData).map(([groupName, items]) => (
            items.map((item, idx) => (
              <tr key={`${groupName}-${idx}`} className={`status-${item.status}`}>
                {idx === 0 && (
                  <td rowSpan={items.length} className="group-cell">
                    {groupName}
                  </td>
                )}
                <td>{item.name}</td>
                <td className={item.mode === 'AI 제어' ? 'mode-ai' : 'mode-stop'}>
                  {item.mode}
                </td>
                <td className="input-conditions">{item.input_conditions}</td>
                <td className="freq-value">{item.target_frequency.toFixed(1)} Hz</td>
                <td className="freq-value">{item.actual_frequency.toFixed(1)} Hz</td>
                <td className={`deviation ${Math.abs(item.deviation) < 0.3 ? 'good' : Math.abs(item.deviation) < 1.0 ? 'warning' : 'alert'}`}>
                  {item.deviation >= 0 ? '+' : ''}{item.deviation.toFixed(2)} Hz
                </td>
                <td className="status-cell">
                  {item.status === '정상' && <span className="status-badge status-normal">✓ 정상</span>}
                  {item.status === '주의' && <span className="status-badge status-warning">⚠ 주의</span>}
                  {item.status === '경고' && <span className="status-badge status-alert">⚠ 경고</span>}
                  {item.status === '-' && <span className="status-badge status-stopped">-</span>}
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Energy Saving Summary Table 컴포넌트
function EnergySavingSummaryTable({ data }) {
  // 장비 타입 결정 함수
  const getEquipmentType = (name) => {
    if (name.startsWith('SWP')) return 'swp'
    if (name.startsWith('FWP')) return 'fwp'
    if (name.startsWith('FAN')) return 'fan'
    return ''
  }

  return (
    <div className="energy-summary-table-wrapper">
      <table className="energy-summary-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Motor Capacity (kW)</th>
            <th>Actual Freq. (Hz)</th>
            <th>Actual Power (kW)</th>
            <th>KW Average</th>
            <th>Saved Power (kWh)</th>
            <th>Saved Ratio (%)</th>
            <th>Running Hours in ESS Mode</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const equipmentType = getEquipmentType(item.name)
            return (
              <tr key={index} className={`equipment-row ${equipmentType}`}>
                <td className="name-cell">{item.name}</td>
                <td className="numeric-cell">{item.motor_capacity}</td>
                <td className="numeric-cell">{item.actual_freq}</td>
                <td className="numeric-cell">{item.actual_power}</td>
                <td className="numeric-cell">{item.kw_average}</td>
                <td className="numeric-cell">{item.saved_kwh}</td>
                <td className={`numeric-cell ratio-cell ${item.saved_ratio > 0 ? 'positive' : ''}`}>
                  {item.saved_ratio}
                </td>
                <td className="numeric-cell">{item.run_hours_ess.toLocaleString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard




