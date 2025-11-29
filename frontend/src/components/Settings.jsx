import React, { useState } from 'react'
import './Settings.css'

function Settings() {
  const [activeTab, setActiveTab] = useState('temp')
  const [settings, setSettings] = useState({
    // 온도 설정
    swp_op_temp: 35,
    swp_lo_temp: 32,
    swp_hi_temp: 38,
    swp_temp_limit: 40,
    swp_prs: 3.5,

    fwp_1p_op_temp: 45,
    fwp_1p_lo_temp: 40,
    fwp_1p_hi_temp: 50,
    fwp_2p_op_temp: 45,
    fwp_2p_lo_temp: 40,
    fwp_2p_hi_temp: 50,

    // VFD 설정
    swp_adj_cycle: 60,
    swp_adj_hz: 5,
    swp_min_hz: 40,
    swp_max_hz: 60,

    fwp_adj_cycle: 60,
    fwp_adj_hz: 5,
    fwp_min_hz: 40,
    fwp_max_hz: 60,

    // E/R Fan VFD 설정
    fan_adj_cycle: 60,
    fan_adj_hz: 5,
    fan_min_hz: 40,
    fan_max_hz: 60,

    // 운전 설정
    swp_1p_time: 240,
    swp_2p_time: 240,
    swp_op_time: 1,
    swp_speed_limit: 300,

    fwp_1p_chg_time: 240,
    fwp_2p_chg_time: 240,
    fwp_op_time: 1,
    fwp_speed_limit: 300,
    meg_load_lmt1: 30,
    meg_load_lmt2: 20,

    // 알람 임계값 설정
    alarm_tx1: 30.0,      // 냉각수 토출 온도
    alarm_tx2: 50.0,      // NO.1 쿨러 출구 온도
    alarm_tx3: 50.0,      // NO.2 쿨러 출구 온도
    alarm_tx4: 50.0,      // 청수 입구 온도
    alarm_tx5: 40.0,      // 청수 출구 온도
    alarm_tx6: 50.0,      // E/R 내부 온도
    alarm_tx7: 40.0,      // E/R 외부 온도
    alarm_px1_low: 1.2,   // 냉각수 압력 저하
    alarm_px1_high: 4.0,  // 냉각수 압력 과다
    alarm_pu1: 85.0,      // M/E 부하 과다
  })

  const [saved, setSaved] = useState(false)

  const handleChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: parseFloat(value)
    }))
  }

  const handleSave = async () => {
    // TODO: API로 설정값 저장
    console.log('저장할 설정:', settings)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="settings">
      <div className="settings-header">
        <h2>⚙️ 시스템 설정</h2>
        <p>펌프 운전 파라미터 및 제어 설정</p>
      </div>

      {/* 설정 탭 */}
      <div className="settings-tabs">
        <button 
          className={activeTab === 'temp' ? 'active' : ''}
          onClick={() => setActiveTab('temp')}
        >
          🌡️ 온도 설정
        </button>
        <button
          className={activeTab === 'vfd' ? 'active' : ''}
          onClick={() => setActiveTab('vfd')}
        >
          ⚡ 주파수 설정
        </button>
        <button 
          className={activeTab === 'operation' ? 'active' : ''}
          onClick={() => setActiveTab('operation')}
        >
          🔧 운전 설정
        </button>
        <button 
          className={activeTab === 'departure' ? 'active' : ''}
          onClick={() => setActiveTab('departure')}
        >
          🚢 출항 모드
        </button>
        <button
          className={activeTab === 'system' ? 'active' : ''}
          onClick={() => setActiveTab('system')}
        >
          💻 시스템
        </button>
        <button
          className={activeTab === 'alarm' ? 'active' : ''}
          onClick={() => setActiveTab('alarm')}
        >
          🔔 알람 설정
        </button>
      </div>

      {/* 설정 내용 */}
      <div className="settings-content">
        {activeTab === 'temp' && (
          <TempSettings settings={settings} onChange={handleChange} />
        )}
        {activeTab === 'vfd' && (
          <VfdSettings settings={settings} onChange={handleChange} />
        )}
        {activeTab === 'operation' && (
          <OperationSettings settings={settings} onChange={handleChange} />
        )}
        {activeTab === 'departure' && (
          <DepartureMode settings={settings} onChange={handleChange} />
        )}
        {activeTab === 'system' && (
          <SystemSettings />
        )}
        {activeTab === 'alarm' && (
          <AlarmSettings settings={settings} onChange={handleChange} />
        )}
      </div>

    </div>
  )
}

// 온도 설정 탭
function TempSettings({ settings, onChange }) {
  return (
    <div className="settings-section">
      <h3>🌊 해수 펌프 온도(TX5) 설정</h3>
      <div className="settings-grid">
        <SettingItem 
          label="운전 온도" 
          value={settings.swp_op_temp} 
          unit="°C"
          onChange={(v) => onChange('swp_op_temp', v)}
          min={-30}
          max={100}
        />
        <SettingItem 
          label="저온 온도" 
          value={settings.swp_lo_temp} 
          unit="°C"
          onChange={(v) => onChange('swp_lo_temp', v)}
          min={-30}
          max={100}
        />
        <SettingItem 
          label="고온 온도" 
          value={settings.swp_hi_temp} 
          unit="°C"
          onChange={(v) => onChange('swp_hi_temp', v)}
          min={-30}
          max={100}
        />
        <SettingItem 
          label="온도 제한" 
          value={settings.swp_temp_limit} 
          unit="°C"
          onChange={(v) => onChange('swp_temp_limit', v)}
          min={-30}
          max={100}
        />
        <SettingItem 
          label="압력 설정" 
          value={settings.swp_prs} 
          unit="kg/cm²"
          onChange={(v) => onChange('swp_prs', v)}
          min={0}
          max={10}
          step={0.1}
        />
      </div>

      <h3>💧 청수 펌프 온도(TX4) 설정</h3>
      <div className="settings-grid">
        <div className="settings-subsection">
          <h4>펌프 1대 운전시</h4>
          <SettingItem 
            label="운전 온도" 
            value={settings.fwp_1p_op_temp} 
            unit="°C"
            onChange={(v) => onChange('fwp_1p_op_temp', v)}
          />
          <SettingItem 
            label="저온 온도" 
            value={settings.fwp_1p_lo_temp} 
            unit="°C"
            onChange={(v) => onChange('fwp_1p_lo_temp', v)}
          />
          <SettingItem 
            label="고온 온도" 
            value={settings.fwp_1p_hi_temp} 
            unit="°C"
            onChange={(v) => onChange('fwp_1p_hi_temp', v)}
          />
        </div>
        
        <div className="settings-subsection">
          <h4>펌프 2대 운전시</h4>
          <SettingItem 
            label="운전 온도" 
            value={settings.fwp_2p_op_temp} 
            unit="°C"
            onChange={(v) => onChange('fwp_2p_op_temp', v)}
          />
          <SettingItem 
            label="저온 온도" 
            value={settings.fwp_2p_lo_temp} 
            unit="°C"
            onChange={(v) => onChange('fwp_2p_lo_temp', v)}
          />
          <SettingItem 
            label="고온 온도" 
            value={settings.fwp_2p_hi_temp} 
            unit="°C"
            onChange={(v) => onChange('fwp_2p_hi_temp', v)}
          />
        </div>
      </div>
    </div>
  )
}

// VFD 설정 탭
function VfdSettings({ settings, onChange }) {
  return (
    <div className="settings-section">
      <h3>🌊 해수 펌프 주파수 설정</h3>
      <div className="settings-grid">
        <SettingItem 
          label="조정 주기" 
          value={settings.swp_adj_cycle} 
          unit="초"
          onChange={(v) => onChange('swp_adj_cycle', v)}
          min={1}
          max={300}
        />
        <SettingItem 
          label="조정 주파수" 
          value={settings.swp_adj_hz} 
          unit="Hz"
          onChange={(v) => onChange('swp_adj_hz', v)}
          min={1}
          max={10}
        />
        <SettingItem 
          label="최소 주파수" 
          value={settings.swp_min_hz} 
          unit="Hz"
          onChange={(v) => onChange('swp_min_hz', v)}
          min={10}
          max={60}
        />
        <SettingItem 
          label="최대 주파수" 
          value={settings.swp_max_hz} 
          unit="Hz"
          onChange={(v) => onChange('swp_max_hz', v)}
          min={30}
          max={60}
        />
      </div>

      <h3>💧 청수 펌프 주파수 설정</h3>
      <div className="settings-grid">
        <SettingItem
          label="조정 주기"
          value={settings.fwp_adj_cycle}
          unit="초"
          onChange={(v) => onChange('fwp_adj_cycle', v)}
          min={1}
          max={300}
        />
        <SettingItem
          label="조정 주파수"
          value={settings.fwp_adj_hz}
          unit="Hz"
          onChange={(v) => onChange('fwp_adj_hz', v)}
          min={1}
          max={10}
        />
        <SettingItem
          label="최소 주파수"
          value={settings.fwp_min_hz}
          unit="Hz"
          onChange={(v) => onChange('fwp_min_hz', v)}
          min={10}
          max={60}
        />
        <SettingItem
          label="최대 주파수"
          value={settings.fwp_max_hz}
          unit="Hz"
          onChange={(v) => onChange('fwp_max_hz', v)}
          min={30}
          max={60}
        />
      </div>

      <h3>🌀 E/R Fan 주파수 설정</h3>
      <div className="settings-grid">
        <SettingItem
          label="조정 주기"
          value={settings.fan_adj_cycle}
          unit="초"
          onChange={(v) => onChange('fan_adj_cycle', v)}
          min={1}
          max={300}
        />
        <SettingItem
          label="조정 주파수"
          value={settings.fan_adj_hz}
          unit="Hz"
          onChange={(v) => onChange('fan_adj_hz', v)}
          min={1}
          max={10}
        />
        <SettingItem
          label="최소 주파수"
          value={settings.fan_min_hz}
          unit="Hz"
          onChange={(v) => onChange('fan_min_hz', v)}
          min={10}
          max={60}
        />
        <SettingItem
          label="최대 주파수"
          value={settings.fan_max_hz}
          unit="Hz"
          onChange={(v) => onChange('fan_max_hz', v)}
          min={30}
          max={60}
        />
      </div>
    </div>
  )
}

// 운전 설정 탭
function OperationSettings({ settings, onChange }) {
  return (
    <div className="settings-section">
      <h3>🔧 펌프 운전 설정</h3>
      <div className="settings-grid">
        <SettingItem 
          label="SWP 1펌프 운전 시간" 
          value={settings.swp_1p_time} 
          unit="분"
          onChange={(v) => onChange('swp_1p_time', v)}
          min={1}
          max={1000}
        />
        <SettingItem 
          label="SWP 2펌프 운전 시간" 
          value={settings.swp_2p_time} 
          unit="분"
          onChange={(v) => onChange('swp_2p_time', v)}
          min={1}
          max={1000}
        />
        <SettingItem 
          label="SWP 운전 순서" 
          value={settings.swp_op_time} 
          unit=""
          onChange={(v) => onChange('swp_op_time', v)}
          min={1}
          max={6}
        />
        <SettingItem
          label="최적속도 운전 시간"
          value={settings.swp_speed_limit}
          unit="초"
          onChange={(v) => onChange('swp_speed_limit', v)}
          min={0}
          max={600}
        />
        <SettingItem
          label="FWP 1펌프 운전 시간"
          value={settings.fwp_1p_chg_time}
          unit="분"
          onChange={(v) => onChange('fwp_1p_chg_time', v)}
          min={1}
          max={1000}
        />
        <SettingItem
          label="FWP 2펌프 운전 시간"
          value={settings.fwp_2p_chg_time}
          unit="분"
          onChange={(v) => onChange('fwp_2p_chg_time', v)}
          min={1}
          max={1000}
        />
        <SettingItem
          label="FWP 운전 순서"
          value={settings.fwp_op_time}
          unit=""
          onChange={(v) => onChange('fwp_op_time', v)}
          min={1}
          max={6}
        />
        <SettingItem
          label="최적속도 운전 시간"
          value={settings.fwp_speed_limit}
          unit="초"
          onChange={(v) => onChange('fwp_speed_limit', v)}
          min={0}
          max={600}
        />
      </div>

      <h3>🔥 M/E 부하 설정</h3>
      <div className="settings-grid">
        <SettingItem
          label="운항 부하 기준값"
          value={settings.meg_load_lmt1}
          unit="%"
          onChange={(v) => onChange('meg_load_lmt1', v)}
          min={0}
          max={100}
        />
        <SettingItem
          label="정박 부하 기준값"
          value={settings.meg_load_lmt2}
          unit="%"
          onChange={(v) => onChange('meg_load_lmt2', v)}
          min={0}
          max={100}
        />
      </div>
    </div>
  )
}

// 출항 모드 탭
function DepartureMode({ settings, onChange }) {
  const [departureActive, setDepartureActive] = useState(false)

  return (
    <div className="settings-section">
      <h3>🚢 출항 모드 설정</h3>
      
      <div className="departure-mode-card">
        <div className="departure-status">
          <span className="status-label">현재 상태:</span>
          <span className={`status-badge ${departureActive ? 'active' : 'inactive'}`}>
            {departureActive ? '🟢 출항 모드 활성' : '⚪ 정상 모드'}
          </span>
        </div>

        <div className="departure-description">
          <p>
            <strong>출항 모드란?</strong><br/>
            선박 출항 시 엔진 부하가 낮을 때 자동으로 ESS 모드로 전환되는 것을 방지합니다.
          </p>
          <p>
            <strong>해제 조건:</strong><br/>
            M/E 부하가 {settings.meg_load_lmt2}% 이상일 때 자동으로 정상 모드로 전환됩니다.
          </p>
        </div>

        <button 
          className={`btn-departure ${departureActive ? 'active' : ''}`}
          onClick={() => setDepartureActive(!departureActive)}
        >
          {departureActive ? '🔓 정상 모드로 전환' : '🔒 출항 모드 활성화'}
        </button>
      </div>

      <div className="settings-grid">
        <SettingItem 
          label="M/E 부하 해제 설정" 
          value={settings.meg_load_lmt2} 
          unit="%"
          onChange={(v) => onChange('meg_load_lmt2', v)}
          min={0}
          max={100}
        />
      </div>
    </div>
  )
}

// 시스템 설정 탭
function SystemSettings() {
  return (
    <div className="settings-section">
      <h3>💻 시스템 설정</h3>

      <div className="system-info">
        <div className="info-card">
          <h4>🔌 PLC 연결 정보</h4>
          <div className="info-row">
            <span>IP 주소:</span>
            <span>127.0.0.1</span>
          </div>
          <div className="info-row">
            <span>포트:</span>
            <span>502</span>
          </div>
          <div className="info-row">
            <span>프로토콜:</span>
            <span>Modbus TCP</span>
          </div>
          <div className="info-row">
            <span>Node ID:</span>
            <span>3</span>
          </div>
        </div>

        <div className="info-card">
          <h4>📊 시스템 정보</h4>
          <div className="info-row">
            <span>버전:</span>
            <span>1.0.0</span>
          </div>
          <div className="info-row">
            <span>화면 해상도:</span>
            <span>1280 x 1024</span>
          </div>
          <div className="info-row">
            <span>업데이트 주기:</span>
            <span>1초</span>
          </div>
        </div>

        <div className="info-card">
          <h4>💾 데이터 저장</h4>
          <div className="info-row">
            <span>데이터 폴더:</span>
            <span>C:\HMI_DATA</span>
          </div>
          <div className="info-row">
            <span>로그 보관 기간:</span>
            <span>30일</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// 알람 설정 탭
function AlarmSettings({ settings, onChange }) {
  return (
    <div className="settings-section alarm-settings">
      <div className="alarm-grid-container">
        <div className="alarm-column">
          <h4>🌡️ 온도 센서 (TX1~TX4)</h4>
          <SettingItem label="TX1 냉각수 토출" value={settings.alarm_tx1} unit="°C" onChange={(v) => onChange('alarm_tx1', v)} min={0} max={100} step={0.5} />
          <SettingItem label="TX2 NO.1 쿨러 출구" value={settings.alarm_tx2} unit="°C" onChange={(v) => onChange('alarm_tx2', v)} min={0} max={100} step={0.5} />
          <SettingItem label="TX3 NO.2 쿨러 출구" value={settings.alarm_tx3} unit="°C" onChange={(v) => onChange('alarm_tx3', v)} min={0} max={100} step={0.5} />
          <SettingItem label="TX4 청수 입구" value={settings.alarm_tx4} unit="°C" onChange={(v) => onChange('alarm_tx4', v)} min={0} max={100} step={0.5} />
        </div>

        <div className="alarm-column">
          <h4>🌡️ 온도 센서 (TX5~TX7)</h4>
          <SettingItem label="TX5 청수 출구" value={settings.alarm_tx5} unit="°C" onChange={(v) => onChange('alarm_tx5', v)} min={0} max={100} step={0.5} />
          <SettingItem label="TX6 E/R 내부" value={settings.alarm_tx6} unit="°C" onChange={(v) => onChange('alarm_tx6', v)} min={0} max={100} step={0.5} />
          <SettingItem label="TX7 E/R 외부" value={settings.alarm_tx7} unit="°C" onChange={(v) => onChange('alarm_tx7', v)} min={0} max={100} step={0.5} />
        </div>

        <div className="alarm-column">
          <h4>📊 압력 / ⚡ 부하</h4>
          <SettingItem label="PX1 압력 하한" value={settings.alarm_px1_low} unit="bar" onChange={(v) => onChange('alarm_px1_low', v)} min={0} max={5} step={0.1} />
          <SettingItem label="PX1 압력 상한" value={settings.alarm_px1_high} unit="bar" onChange={(v) => onChange('alarm_px1_high', v)} min={0} max={10} step={0.1} />
          <SettingItem label="PU1 M/E 부하" value={settings.alarm_pu1} unit="%" onChange={(v) => onChange('alarm_pu1', v)} min={0} max={100} step={1} />
        </div>
      </div>

      <div className="alarm-info-compact">
        <span>ℹ️ 온도/압력상한/부하: 초과 시 알람 | 압력하한: 미만 시 알람</span>
      </div>
    </div>
  )
}

// 설정 항목 컴포넌트
function SettingItem({ label, value, unit, onChange, min = 0, max = 100, step = 1 }) {
  return (
    <div className="setting-item">
      <label>{label}</label>
      <div className="setting-input-group">
        <input 
          type="number" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          step={step}
        />
        <span className="unit">{unit}</span>
      </div>
    </div>
  )
}

export default Settings




