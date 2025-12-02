import React, { useState, useEffect } from 'react'
import './Dashboard.css'

// Edge Computer API URL
const EDGE_API_URL = 'http://localhost:8000'

function Dashboard() {
  // 하위 탭 상태 (realtime: 실시간 현황, accumulated: 누적 현황)
  const [subTab, setSubTab] = useState('realtime')

  // 에너지 절감률 데이터
  const [energySavings, setEnergySavings] = useState(null)

  // AI 목표 주파수 제어 데이터
  const [aiFreqControl, setAiFreqControl] = useState([])

  // 에너지 절감 상세 요약 데이터
  const [energySavingsSummary, setEnergySavingsSummary] = useState([])

  // ESS 운전/에너지 데이터 (Edge Computer에서 계산)
  const [essData, setEssData] = useState(null)

  // 로딩 상태
  const [loading, setLoading] = useState(true)

  // 모든 데이터를 병렬로 가져오기
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [energyRes, aiFreqRes, summaryRes, essRes] = await Promise.all([
          fetch('http://localhost:8001/api/energy-savings'),
          fetch('http://localhost:8001/api/ai-frequency-control'),
          fetch('http://localhost:8001/api/energy-savings-summary'),
          fetch('http://localhost:8001/api/ess-data')
        ])

        const [energyData, aiFreqData, summaryData, essDataRes] = await Promise.all([
          energyRes.json(),
          aiFreqRes.json(),
          summaryRes.json(),
          essRes.json()
        ])

        if (energyData.success) setEnergySavings(energyData.data)
        if (aiFreqData.success) setAiFreqControl(aiFreqData.data)
        if (summaryData.success) setEnergySavingsSummary(summaryData.data)
        if (essDataRes.success) setEssData(essDataRes.data)
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
      {/* 하위 탭 네비게이션 */}
      <div className="sub-tab-nav">
        <button
          className={`sub-tab-btn ${subTab === 'realtime' ? 'active' : ''}`}
          onClick={() => setSubTab('realtime')}
        >
          실시간 현황
        </button>
        <button
          className={`sub-tab-btn ${subTab === 'accumulated' ? 'active' : ''}`}
          onClick={() => setSubTab('accumulated')}
        >
          누적 현황
        </button>
      </div>

      {/* 실시간 현황 탭 */}
      {subTab === 'realtime' && (
        <>
          {/* 실시간 전력 비교 + 시스템별 절감 전력 */}
          {energySavings && (
            <div className="top-section">
              <RealtimeEnergySavingsCard data={energySavings} />
            </div>
          )}

          {/* AI 목표 vs 실제 주파수 현황 */}
          <div className="bottom-section">
            {aiFreqControl.length > 0 && (
              <div className="table-panel full-width">
                <h3>AI 목표 vs 실제 주파수</h3>
                <div className="table-scroll">
                  <CompactAIFreqTable data={aiFreqControl} />
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* 누적 현황 탭 */}
      {subTab === 'accumulated' && (
        <>
          {/* 오늘 누적 / 이번 달 누적 카드 (ESS DB 데이터 사용) */}
          {essData && (
            <div className="top-section">
              <AccumulatedSavingsCard essData={essData} />
            </div>
          )}

          {/* ESS 운전 및 에너지 현황 + 보고서 다운로드 */}
          <div className="bottom-section">
            {essData && (
              <div className="table-panel full-width">
                <div className="table-header-with-export">
                  <h3>ESS 운전 및 에너지 현황</h3>
                  <ReportDownloadButton />
                </div>
                <ESSDataTable data={essData} />
              </div>
            )}
          </div>
        </>
      )}
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

// 실시간 현황 카드 (실시간 전력 비교 + 시스템별 절감 전력)
function RealtimeEnergySavingsCard({ data }) {
  const realtime = data?.realtime || {}
  const total = realtime?.total || {}
  const swp = realtime?.swp || {}
  const fwp = realtime?.fwp || {}
  const fan = realtime?.fan || {}

  return (
    <div className="compact-energy-card realtime-only">
      {/* 좌측: 실시간 전력 비교 */}
      <div className="realtime-panel">
        <div className="panel-title">실시간 전력 비교</div>
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

      {/* 우측: 시스템별 순간 절감 전력 */}
      <div className="system-panel">
        <div className="panel-title">시스템별 순간 절감 전력</div>
        <CompactSystemRow label="SWP" kw={swp.savings_kw || 0} rate={swp.savings_rate || 0} color="#38bdf8" />
        <CompactSystemRow label="FWP" kw={fwp.savings_kw || 0} rate={fwp.savings_rate || 0} color="#34d399" />
        <CompactSystemRow label="FAN" kw={fan.savings_kw || 0} rate={fan.savings_rate || 0} color="#fbbf24" />
      </div>
    </div>
  )
}

// 누적 현황 카드 (오늘 누적 + 전체 누적) - ESS DB 데이터 사용
function AccumulatedSavingsCard({ essData }) {
  // ESS 데이터에서 TOTAL 그룹 데이터 추출
  const todayTotal = essData?.today?.groups?.TOTAL || {}
  const cumulativeTotal = essData?.groups?.TOTAL || {}

  return (
    <div className="compact-energy-card accumulated-only">
      {/* 오늘 누적 */}
      <div className="accumulated-card">
        <div className="acc-header">
          <span className="acc-icon">📅</span>
          <span className="acc-title">오늘 누적 절감</span>
        </div>
        <div className="acc-main-value">{(todayTotal.saved_kwh || 0).toFixed(1)} kWh</div>
        <div className="acc-sub-info">ESS 운전: {(todayTotal.ess_hours || 0).toFixed(1)}h | 절감률: {(todayTotal.savings_rate || 0).toFixed(1)}%</div>
      </div>

      {/* 전체 누적 (이번 달 → 전체 누적으로 변경) */}
      <div className="accumulated-card">
        <div className="acc-header">
          <span className="acc-icon">📊</span>
          <span className="acc-title">전체 누적 절감</span>
        </div>
        <div className="acc-main-value">{(cumulativeTotal.saved_kwh || 0).toFixed(1)} kWh</div>
        <div className="acc-sub-info">ESS 운전: {(cumulativeTotal.ess_hours || 0).toFixed(1)}h | 절감률: {(cumulativeTotal.savings_rate || 0).toFixed(1)}%</div>
      </div>
    </div>
  )
}

// 컴팩트 에너지 절감률 카드 (기존 - 호환성 유지)
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
        <div className="panel-title">🔴 실시간 전력 비교</div>
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

      {/* 중앙: 시스템별 절감률 */}
      <div className="system-panel">
        <div className="panel-title">시스템별 절감 전력</div>
        <CompactSystemRow label="SWP" kw={swp.savings_kw || 0} rate={swp.savings_rate || 0} color="#38bdf8" />
        <CompactSystemRow label="FWP" kw={fwp.savings_kw || 0} rate={fwp.savings_rate || 0} color="#34d399" />
        <CompactSystemRow label="FAN" kw={fan.savings_kw || 0} rate={fan.savings_rate || 0} color="#fbbf24" />
      </div>

      {/* 우측: 누적 절감 */}
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

// 보고서 다운로드 버튼 컴포넌트
function ReportDownloadButton() {
  const [showMenu, setShowMenu] = useState(false)
  const [reportType, setReportType] = useState('daily')
  const [downloading, setDownloading] = useState(false)

  // 날짜 입력 상태
  const today = new Date().toISOString().split('T')[0]
  const [selectedDate, setSelectedDate] = useState(today)
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [selectedEquipment, setSelectedEquipment] = useState('SWP1')
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)

  const equipmentList = ['SWP1', 'SWP2', 'SWP3', 'FWP1', 'FWP2', 'FWP3', 'FAN1', 'FAN2', 'FAN3', 'FAN4']

  const handleDownload = async () => {
    setDownloading(true)
    try {
      let url = ''
      let filename = ''

      switch (reportType) {
        case 'daily':
          url = `${EDGE_API_URL}/api/reports/ess/csv/daily?date=${selectedDate}`
          filename = `ESS_Daily_Report_${selectedDate}.csv`
          break
        case 'period':
          url = `${EDGE_API_URL}/api/reports/ess/csv/period?start_date=${startDate}&end_date=${endDate}`
          filename = `ESS_Period_Report_${startDate}_to_${endDate}.csv`
          break
        case 'equipment':
          url = `${EDGE_API_URL}/api/reports/ess/csv/equipment/${selectedEquipment}?start_date=${startDate}&end_date=${endDate}`
          filename = `ESS_Equipment_Report_${selectedEquipment}_${startDate}_to_${endDate}.csv`
          break
        case 'monthly':
          url = `${EDGE_API_URL}/api/reports/ess/csv/monthly?year=${selectedYear}&month=${selectedMonth}`
          filename = `ESS_Monthly_Report_${selectedYear}_${String(selectedMonth).padStart(2, '0')}.csv`
          break
        default:
          return
      }

      const response = await fetch(url)
      if (!response.ok) throw new Error('다운로드 실패')

      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)

      setShowMenu(false)
    } catch (error) {
      console.error('보고서 다운로드 실패:', error)
      alert('보고서 다운로드에 실패했습니다.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="report-download-container">
      <button
        className="report-download-btn"
        onClick={() => setShowMenu(!showMenu)}
      >
        CSV 보고서 다운로드
      </button>

      {showMenu && (
        <div className="report-menu">
          <div className="report-menu-header">
            <span>보고서 유형 선택</span>
            <button className="close-btn" onClick={() => setShowMenu(false)}>X</button>
          </div>

          <div className="report-type-selector">
            <label>
              <input
                type="radio"
                name="reportType"
                value="daily"
                checked={reportType === 'daily'}
                onChange={(e) => setReportType(e.target.value)}
              />
              일별 보고서
            </label>
            <label>
              <input
                type="radio"
                name="reportType"
                value="period"
                checked={reportType === 'period'}
                onChange={(e) => setReportType(e.target.value)}
              />
              기간별 보고서
            </label>
            <label>
              <input
                type="radio"
                name="reportType"
                value="equipment"
                checked={reportType === 'equipment'}
                onChange={(e) => setReportType(e.target.value)}
              />
              장비별 보고서
            </label>
            <label>
              <input
                type="radio"
                name="reportType"
                value="monthly"
                checked={reportType === 'monthly'}
                onChange={(e) => setReportType(e.target.value)}
              />
              월별 보고서
            </label>
          </div>

          <div className="report-options">
            {reportType === 'daily' && (
              <div className="option-group">
                <label>날짜:</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
            )}

            {(reportType === 'period' || reportType === 'equipment') && (
              <>
                <div className="option-group">
                  <label>시작일:</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="option-group">
                  <label>종료일:</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </>
            )}

            {reportType === 'equipment' && (
              <div className="option-group">
                <label>장비:</label>
                <select
                  value={selectedEquipment}
                  onChange={(e) => setSelectedEquipment(e.target.value)}
                >
                  {equipmentList.map(eq => (
                    <option key={eq} value={eq}>{eq}</option>
                  ))}
                </select>
              </div>
            )}

            {reportType === 'monthly' && (
              <>
                <div className="option-group">
                  <label>연도:</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                  >
                    {[2024, 2025, 2026].map(y => (
                      <option key={y} value={y}>{y}년</option>
                    ))}
                  </select>
                </div>
                <div className="option-group">
                  <label>월:</label>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(Number(e.target.value))}
                  >
                    {Array.from({length: 12}, (_, i) => i + 1).map(m => (
                      <option key={m} value={m}>{m}월</option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </div>

          <button
            className="download-execute-btn"
            onClick={handleDownload}
            disabled={downloading}
          >
            {downloading ? '다운로드 중...' : 'CSV 다운로드'}
          </button>
        </div>
      )}
    </div>
  )
}

// ESS 운전 및 에너지 데이터 테이블 (Edge Computer에서 계산한 데이터)
function ESSDataTable({ data }) {
  const equipment = data?.equipment || []
  const groups = data?.groups || {}
  const today = data?.today || {}

  const getType = (name) => {
    if (name.startsWith('SWP')) return 'swp'
    if (name.startsWith('FWP')) return 'fwp'
    if (name.startsWith('FAN')) return 'fan'
    return ''
  }

  return (
    <div className="ess-data-container">
      {/* 그룹별 요약 */}
      <div className="ess-group-summary">
        <div className="ess-group-cards">
          {['SWP', 'FWP', 'FAN', 'TOTAL'].map(group => {
            const g = groups[group] || {}
            const todayG = today?.groups?.[group] || {}
            const label = group === 'TOTAL' ? '전체' :
                          group === 'SWP' ? '해수펌프' :
                          group === 'FWP' ? '청수펌프' : 'E/R 팬'
            const color = group === 'TOTAL' ? '#f59e0b' :
                          group === 'SWP' ? '#3b82f6' :
                          group === 'FWP' ? '#10b981' : '#a855f7'

            return (
              <div key={group} className="ess-group-card" style={{ borderTop: `3px solid ${color}` }}>
                <div className="ess-group-header">
                  <span className="ess-group-label">{label}</span>
                  <span className="ess-group-rate" style={{ color }}>
                    {(g.savings_rate || 0).toFixed(1)}%
                  </span>
                </div>
                <div className="ess-group-stats">
                  <div className="ess-stat">
                    <span className="ess-stat-label">ESS 운전</span>
                    <span className="ess-stat-value">{(g.ess_hours || 0).toFixed(1)}h</span>
                  </div>
                  <div className="ess-stat">
                    <span className="ess-stat-label">누적 절감</span>
                    <span className="ess-stat-value">{(g.saved_kwh || 0).toFixed(1)} kWh</span>
                  </div>
                  <div className="ess-stat today">
                    <span className="ess-stat-label">오늘 절감</span>
                    <span className="ess-stat-value">{(todayG.saved_kwh || 0).toFixed(1)} kWh</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 장비별 상세 테이블 */}
      <div className="ess-equipment-table-wrapper">
        <table className="compact-table ess-table">
          <thead>
            <tr>
              <th>장비</th>
              <th>ESS 운전 (h)</th>
              <th>총 운전 (h)</th>
              <th>ESS 소비 (kWh)</th>
              <th>기준 전력 (kWh)</th>
              <th>절감량 (kWh)</th>
              <th>절감률 (%)</th>
              <th>오늘 절감 (kWh)</th>
            </tr>
          </thead>
          <tbody>
            {equipment.map((eq, idx) => {
              const todayEq = today?.equipment?.[idx] || {}
              return (
                <tr key={idx} className={getType(eq.name)}>
                  <td className="name">{eq.name}</td>
                  <td>{(eq.ess_hours || 0).toFixed(1)}</td>
                  <td>{(eq.total_hours || 0).toFixed(1)}</td>
                  <td>{(eq.ess_kwh || 0).toFixed(1)}</td>
                  <td>{(eq.baseline_kwh || 0).toFixed(1)}</td>
                  <td className="saved">{(eq.saved_kwh || 0).toFixed(1)}</td>
                  <td className={eq.savings_rate > 0 ? 'positive' : ''}>{(eq.savings_rate || 0).toFixed(1)}</td>
                  <td className="today">{(todayEq.saved_kwh || 0).toFixed(1)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard




