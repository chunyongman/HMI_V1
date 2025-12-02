import React, { useState, useEffect, useRef } from 'react'
import Dashboard from './components/Dashboard'
import CoolingDiagramImage from './components/CoolingDiagramImage'
import DynamicSVGDiagram from './components/DynamicSVGDiagram'
import FanDiagram from './components/FanDiagram'
// import PumpControl from './components/PumpControl'  // AdvancedControl에 통합됨
import TrendChart from './components/TrendChart'
import AlarmPanel from './components/AlarmPanel'
// import AlarmHistory from './components/AlarmHistory'  // History.jsx에 통합됨
import Settings from './components/Settings'
import AdvancedControl from './components/AdvancedControl'
import History from './components/History'
import VFDDiagnostics from './components/VFDDiagnostics'
import SystemOverview from './components/SystemOverview'
import Home from './components/Home'
import Login from './components/Login'
import { AuthProvider, useAuth } from './AuthContext'
import './App.css'

function AppContent() {
  const { isAuthenticated, user, canAccessTab, logout, loading } = useAuth()

  // State 관리
  const [sensors, setSensors] = useState({})
  const [pumps, setPumps] = useState([])
  const [fans, setFans] = useState([])
  const [equipment, setEquipment] = useState([])
  const [alarms, setAlarms] = useState([])
  const [alarmSummary, setAlarmSummary] = useState({})
  const [essData, setEssData] = useState(null)  // ESS 운전/에너지 데이터
  const [wsConnected, setWsConnected] = useState(false)  // WebSocket 연결 상태
  const [plcConnected, setPlcConnected] = useState(false)  // PLC 연결 상태
  const [edgeConnected, setEdgeConnected] = useState(false)  // Edge AI 연결 상태
  const [ws, setWs] = useState(null)
  const [activeTab, setActiveTab] = useState('home')

  // 경고음 관련 상태
  const [audioContext, setAudioContext] = useState(null)
  const [alarmSoundMuted, setAlarmSoundMuted] = useState(false) // Mute 상태
  const prevAlarmIdsRef = useRef(new Set())
  const prevCriticalAlarmIdsRef = useRef(new Set()) // CRITICAL 알람 ID 추적
  const isFirstRenderRef = useRef(true)
  const alarmSoundIntervalRef = useRef(null) // 연속 경고음 인터벌
  const alarmsRef = useRef([]) // 최신 alarms 상태를 참조하기 위한 ref

  // AudioContext 초기화
  useEffect(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    console.log('🎵 [App] AudioContext 생성됨, 초기 상태:', ctx.state)

    // 즉시 AudioContext를 활성화 시도
    const initAudio = async () => {
      try {
        await ctx.resume()
        console.log('🔊 [App] AudioContext 즉시 활성화 시도:', ctx.state)
      } catch (error) {
        console.log('⚠️ [App] AudioContext 즉시 활성화 실패, 사용자 인터랙션 필요')
      }
    }
    initAudio()
    setAudioContext(ctx)

    // 사용자 인터랙션으로 AudioContext 활성화
    const resumeAudio = async () => {
      console.log('👆 [App] 사용자 인터랙션 감지, AudioContext 상태:', ctx.state)
      if (ctx.state === 'suspended') {
        await ctx.resume()
        console.log('🔊 [App] AudioContext 활성화됨')

        // AudioContext 활성화 후 미확인 알람이 있으면 경고음 시작
        if (alarms.some(a => !a.acknowledged) && !alarmSoundIntervalRef.current) {
          console.log('🔔 [App] AudioContext 활성화 후 경고음 시작')
          startContinuousAlarmSound()
        }
      }
    }

    document.addEventListener('click', resumeAudio, { once: true })
    document.addEventListener('keydown', resumeAudio, { once: true })

    return () => {
      document.removeEventListener('click', resumeAudio)
      document.removeEventListener('keydown', resumeAudio)
      if (ctx) ctx.close()
    }
  }, [])

  useEffect(() => {
    // WebSocket 연결
    connectWebSocket()

    return () => {
      if (ws) {
        ws.close()
      }
    }
  }, [])

  // 경고음 재생 함수 (한 번의 비프음 패턴)
  const playAlarmSoundOnce = async () => {
    if (!audioContext || alarmSoundMuted) {
      return
    }

    try {
      if (audioContext.state === 'suspended') {
        await audioContext.resume()
      }

      // alarmsRef에서 최신 알람 목록 가져오기
      const currentAlarms = alarmsRef.current
      const unacknowledgedAlarms = currentAlarms.filter(a => !a.acknowledged)
      const hasCritical = unacknowledgedAlarms.some(a => a.level === 'critical')
      const hasWarning = unacknowledgedAlarms.some(a => a.level === 'warning')

      // Critical: 연속 3번, Warning: 2번, Info: 1번
      let beepCount = 1
      if (hasCritical) {
        beepCount = 3
      } else if (hasWarning) {
        beepCount = 2
      }

      console.log(`🔊 [App] 경고음 재생: ${beepCount}번 (Critical: ${hasCritical}, Warning: ${hasWarning}, 총 미확인: ${unacknowledgedAlarms.length})`)

      // 비프음 재생
      for (let i = 0; i < beepCount; i++) {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()

          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)

          oscillator.frequency.value = 880
          oscillator.type = 'sine'

          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)

          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.15)
        }, i * 200)
      }
    } catch (error) {
      console.error('❌ [App] 경고음 재생 오류:', error)
    }
  }

  // 연속 경고음 시작
  const startContinuousAlarmSound = () => {
    console.log('🔊 [App] 연속 경고음 시작')

    // 기존 인터벌 정리
    if (alarmSoundIntervalRef.current) {
      clearInterval(alarmSoundIntervalRef.current)
    }

    // 즉시 한 번 재생
    playAlarmSoundOnce()

    // 2초마다 반복 재생
    alarmSoundIntervalRef.current = setInterval(() => {
      playAlarmSoundOnce()
    }, 2000)
  }

  // 연속 경고음 정지
  const stopContinuousAlarmSound = () => {
    console.log('🔇 [App] 연속 경고음 정지')
    if (alarmSoundIntervalRef.current) {
      clearInterval(alarmSoundIntervalRef.current)
      alarmSoundIntervalRef.current = null
    }
  }

  // Mute 토글 함수
  const toggleAlarmMute = () => {
    setAlarmSoundMuted(!alarmSoundMuted)
    if (!alarmSoundMuted) {
      // Mute 활성화 시 경고음 정지
      stopContinuousAlarmSound()
    } else {
      // Mute 해제 시 미확인 알람이 있으면 경고음 재시작
      const hasUnacknowledged = alarms.some(a => !a.acknowledged)
      if (hasUnacknowledged) {
        startContinuousAlarmSound()
      }
    }
  }

  // alarms 상태가 변경될 때마다 alarmsRef 업데이트
  useEffect(() => {
    alarmsRef.current = alarms
  }, [alarms])

  // 알람 감지 및 연속 경고음 관리
  useEffect(() => {
    const hasUnacknowledged = alarms.some(a => !a.acknowledged)

    // 현재 미확인 CRITICAL 알람 ID 세트
    const currentCriticalAlarmIds = new Set(
      alarms.filter(a => !a.acknowledged && a.level === 'critical').map(a => a.id)
    )

    // 새로운 CRITICAL 알람 감지 (이전에 없었던 ID)
    const newCriticalAlarmIds = Array.from(currentCriticalAlarmIds).filter(
      id => !prevCriticalAlarmIdsRef.current.has(id)
    )

    // 상세 디버그 로그
    console.log('🔍 [App] 알람 상태 체크:', {
      총알람: alarms.length,
      미확인알람: hasUnacknowledged,
      현재위험알람: currentCriticalAlarmIds.size,
      새위험알람: newCriticalAlarmIds.length,
      muted: alarmSoundMuted,
      audioContext: !!audioContext,
      intervalActive: !!alarmSoundIntervalRef.current
    })

    // 알람 상세 정보 출력
    console.log('📋 [App] 알람 목록:', alarms.map(a => ({
      id: a.id,
      tag: a.tag,
      level: a.level,
      message: a.message,
      acknowledged: a.acknowledged
    })))

    // 새로운 CRITICAL 알람 발생 시 음소거 해제
    if (newCriticalAlarmIds.length > 0 && alarmSoundMuted) {
      console.log('🔴 [App] 새로운 위험 알람 발생 - 음소거 자동 해제', newCriticalAlarmIds)
      setAlarmSoundMuted(false)
    }

    // CRITICAL 알람 ID 추적 업데이트
    prevCriticalAlarmIdsRef.current = currentCriticalAlarmIds

    if (hasUnacknowledged && audioContext && !alarmSoundMuted) {
      // 미확인 알람이 있는데 경고음이 울리지 않고 있으면 시작
      if (!alarmSoundIntervalRef.current) {
        console.log('🔊 [App] 미확인 알람 감지 - 연속 경고음 시작')
        startContinuousAlarmSound()
      }
    } else {
      // 미확인 알람이 없으면 경고음 정지
      if (alarmSoundIntervalRef.current) {
        console.log('✅ [App] 모든 알람 확인됨 - 경고음 정지')
        stopContinuousAlarmSound()
      }
    }

    // Cleanup: 컴포넌트 언마운트 시 경고음 정지
    return () => {
      if (alarmSoundIntervalRef.current) {
        stopContinuousAlarmSound()
      }
    }
  }, [alarms, audioContext, alarmSoundMuted])

  const connectWebSocket = () => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
    const wsUrl = `${protocol}//${window.location.hostname}:8001/ws`  // HMI Backend 포트 8001

    console.log('WebSocket 연결 시도:', wsUrl)
    const websocket = new WebSocket(wsUrl)

    websocket.onopen = () => {
      console.log('✅ WebSocket 연결 성공')
      setWsConnected(true)
    }

    websocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        if (data.type === 'realtime_update') {
          setSensors(data.sensors)
          setEquipment(data.equipment || [])
          setPumps(data.pumps || data.equipment?.slice(0, 6) || [])
          setFans(data.equipment?.slice(6, 10) || [])
          setAlarms(data.alarms || [])
          setAlarmSummary(data.alarm_summary || {})
          setPlcConnected(data.plc_connected || false)  // PLC 연결 상태 업데이트
          setEdgeConnected(data.edge_connected !== false)  // Edge AI 연결 상태 (WebSocket 데이터 받으면 연결됨)
          setEssData(data.ess_data || null)  // ESS 운전/에너지 데이터
        }
      } catch (error) {
        console.error('WebSocket 메시지 파싱 오류:', error)
      }
    }

    websocket.onerror = (error) => {
      console.error('❌ WebSocket 오류:', error)
      setWsConnected(false)
      setPlcConnected(false)
      setEdgeConnected(false)
    }

    websocket.onclose = () => {
      console.log('WebSocket 연결 종료, 5초 후 재연결...')
      setWsConnected(false)
      setPlcConnected(false)
      setEdgeConnected(false)
      setTimeout(connectWebSocket, 5000)
    }

    setWs(websocket)
  }

  const sendEquipmentCommand = async (equipmentName, command) => {
    try {
      console.log(`🔧 장비 명령 전송 시도: equipment=${equipmentName}, command=${command}`)

      const response = await fetch('http://localhost:8001/api/equipment/command', {  // HMI Backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          equipment_name: equipmentName,
          command: command
        })
      })

      console.log(`📡 응답 상태: ${response.status}`)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ HTTP 오류:', response.status, errorText)
        alert(`명령 전송 실패: ${response.status}`)
        return false
      }

      const result = await response.json()
      console.log('📦 응답 데이터:', result)

      if (result.success) {
        console.log(`✅ ${equipmentName} ${command} 명령 성공`)
        return true
      } else {
        console.error('❌ 장비 명령 실패:', result)
        alert('명령 전송 실패')
        return false
      }
    } catch (error) {
      console.error('❌ 장비 명령 오류:', error)
      alert(`오류 발생: ${error.message}`)
      return false
    }
  }

  // 하위 호환성을 위한 펌프 명령 함수
  const sendPumpCommand = async (pumpIndex, command) => {
    const pumpNames = ["SWP1", "SWP2", "SWP3", "FWP1", "FWP2", "FWP3"]
    if (pumpIndex >= 0 && pumpIndex < 6) {
      return await sendEquipmentCommand(pumpNames[pumpIndex], command)
    }
    return false
  }

  // 로그인 팝업 상태
  const [showLoginPopup, setShowLoginPopup] = useState(false)

  // 로딩 중일 때 표시
  if (loading) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
        <p>로딩 중...</p>
      </div>
    )
  }

  // 로그인 성공 시 팝업 닫기
  const handleLoginSuccess = () => {
    setShowLoginPopup(false)
  }

  // 게스트(비로그인) 접근 가능 탭
  const GUEST_TABS = ['home', 'system_overview', 'dashboard', 'vfd_diagnostics', 'trend', 'history', 'alarm']

  // 권한 체크 (로그인 안 된 경우 게스트 탭만 허용)
  const canAccessTabWithGuest = (tabName) => {
    if (!isAuthenticated) {
      return GUEST_TABS.includes(tabName)
    }
    return canAccessTab(tabName)
  }

  // 역할별 한글 표시
  const roleNames = {
    admin: '관리자',
    operator: '운전자'
  }

  return (
    <div className="app">
      {/* 헤더 */}
      <header className="app-header">
        <h1>🚢 ESS HMI - Energy Saving System</h1>
        <div className="header-right">
          <div className="status-indicators">
            <div className={`status-indicator ${plcConnected ? 'connected' : 'disconnected'}`}>
              <span className="status-dot"></span>
              <span>{plcConnected ? 'PLC 연결됨' : 'PLC 연결 안됨'}</span>
            </div>
            <div className={`status-indicator ${edgeConnected ? 'connected' : 'disconnected'}`}>
              <span className="status-dot"></span>
              <span>{edgeConnected ? 'Edge AI 연결됨' : 'Edge AI 연결 안됨'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* 탭 네비게이션 */}
      <nav className="tab-nav">
        {canAccessTabWithGuest('home') && (
          <button
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
          >
            홈
          </button>
        )}
        {canAccessTabWithGuest('system_overview') && (
          <button
            className={activeTab === 'system_overview' ? 'active' : ''}
            onClick={() => setActiveTab('system_overview')}
          >
            운전 현황
          </button>
        )}
        {canAccessTabWithGuest('dashboard') && (
          <button
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            에너지 절감 현황
          </button>
        )}
        {canAccessTabWithGuest('diagram') && (
          <button
            className={activeTab === 'diagram' ? 'active' : ''}
            onClick={() => setActiveTab('diagram')}
          >
            냉각수 계통도
          </button>
        )}
        {canAccessTabWithGuest('fan_diagram') && (
          <button
            className={activeTab === 'fan_diagram' ? 'active' : ''}
            onClick={() => setActiveTab('fan_diagram')}
          >
            E/R 환기 계통도
          </button>
        )}
        {canAccessTabWithGuest('advanced') && (
          <button
            className={activeTab === 'advanced' ? 'active' : ''}
            onClick={() => setActiveTab('advanced')}
          >
            운전 제어
          </button>
        )}
        {canAccessTabWithGuest('vfd_diagnostics') && (
          <button
            className={activeTab === 'vfd_diagnostics' ? 'active' : ''}
            onClick={() => setActiveTab('vfd_diagnostics')}
          >
            VFD 진단
          </button>
        )}
        {canAccessTabWithGuest('trend') && (
          <button
            className={activeTab === 'trend' ? 'active' : ''}
            onClick={() => setActiveTab('trend')}
          >
            센서 트렌드
          </button>
        )}
        {canAccessTabWithGuest('settings') && (
          <button
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            파라미터 설정
          </button>
        )}
        {canAccessTabWithGuest('history') && (
          <button
            className={activeTab === 'history' ? 'active' : ''}
            onClick={() => setActiveTab('history')}
          >
            이력
          </button>
        )}
        {canAccessTabWithGuest('alarm') && (
          <button
            className={`${activeTab === 'alarm' ? 'active' : ''} ${alarms.some(a => !a.acknowledged) ? 'has-unack-alarms' : ''}`}
            onClick={() => setActiveTab('alarm')}
          >
            알람
          </button>
        )}

        {/* 사용자 정보 (탭 네비게이션 우측) */}
        <div className="nav-user-section">
          {isAuthenticated ? (
            <div className="nav-user-info">
              <span className="nav-user-name">{user?.display_name || user?.username}</span>
              <span className="nav-user-role">({roleNames[user?.role] || user?.role})</span>
              <button className="nav-logout-btn" onClick={logout}>로그아웃</button>
            </div>
          ) : (
            <button className="nav-login-btn" onClick={() => setShowLoginPopup(true)}>로그인</button>
          )}
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="app-content">
        {activeTab === 'home' && (
          <Home />
        )}
        {activeTab === 'dashboard' && (
          <Dashboard sensors={sensors} equipment={equipment} pumps={pumps} fans={fans} />
        )}
        {activeTab === 'diagram' && (
          <DynamicSVGDiagram
            sensors={sensors}
            equipment={equipment}
            pumps={pumps}
            fans={fans}
            onCommand={sendEquipmentCommand}
            onPumpCommand={sendPumpCommand}
          />
        )}
        {activeTab === 'fan_diagram' && (
          <FanDiagram
            sensors={sensors}
            fans={fans}
            equipment={equipment}
            onCommand={sendEquipmentCommand}
          />
        )}
        {activeTab === 'advanced' && (
          <AdvancedControl
            equipment={equipment}
            pumps={pumps}
            fans={fans}
            onCommand={sendEquipmentCommand}
            onPumpCommand={sendPumpCommand}
          />
        )}
        {activeTab === 'settings' && (
          <Settings />
        )}
        {activeTab === 'trend' && (
          <TrendChart sensors={sensors} equipment={equipment} pumps={pumps} fans={fans} />
        )}
        {activeTab === 'history' && (
          <History />
        )}
        {activeTab === 'alarm' && (
          <AlarmPanel
            alarms={alarms}
            alarmSummary={alarmSummary}
            alarmSoundMuted={alarmSoundMuted}
            onToggleMute={toggleAlarmMute}
          />
        )}
        {activeTab === 'vfd_diagnostics' && (
          <VFDDiagnostics />
        )}
        {activeTab === 'system_overview' && (
          <SystemOverview sensors={sensors} pumps={pumps} fans={fans} essData={essData} />
        )}
      </main>

      {/* 푸터 */}
      <footer className="app-footer">
        <span>© 2025 ESS HMI System</span>
        <span>마지막 업데이트: {new Date().toLocaleTimeString('ko-KR')}</span>
      </footer>

      {/* 로그인 팝업 모달 */}
      {showLoginPopup && (
        <div className="login-popup-overlay" onClick={() => setShowLoginPopup(false)}>
          <div className="login-popup-content" onClick={(e) => e.stopPropagation()}>
            <Login onLoginSuccess={handleLoginSuccess} isPopup={true} />
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App

