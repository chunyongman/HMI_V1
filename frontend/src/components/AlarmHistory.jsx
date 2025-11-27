import React, { useState, useEffect } from 'react'
import './AlarmHistory.css'

/**
 * AlarmHistory 컴포넌트
 * Edge Computer HTTP API를 통해 알람 로그 조회
 *
 * Edge Computer API: http://<edge-computer-ip>:8000
 * 엔드포인트:
 *   - GET /alarms/latest?count=N  - 최근 N개 알람
 *   - GET /alarms?start_date=YYYYMMDD&end_date=YYYYMMDD&sensor_id=TX6&alarm_type=HIGH
 *   - GET /alarms/stats?days=7    - 알람 통계
 */
function AlarmHistory({ edgeComputerIP = 'localhost' }) {
  const [alarmHistory, setAlarmHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // 필터 상태
  const [filters, setFilters] = useState({
    days: 7,            // 최근 N일
    sensorId: 'all',    // 센서 필터
    alarmType: 'all',   // 알람 타입 필터
    limit: 50           // 최대 개수
  })

  // 통계 데이터
  const [stats, setStats] = useState({
    total_alarms: 0,
    unacknowledged: 0,
    acknowledged: 0,
    by_sensor: {},
    by_type: {}
  })

  // Edge Computer API URL
  const API_BASE_URL = `http://${edgeComputerIP}:8000`

  // 알람 로그 조회
  const fetchAlarmHistory = async () => {
    setLoading(true)
    setError(null)

    try {
      // 날짜 계산
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(endDate.getDate() - filters.days)

      const startDateStr = formatDateYYYYMMDD(startDate)
      const endDateStr = formatDateYYYYMMDD(endDate)

      // API 요청 URL 생성
      let url = `${API_BASE_URL}/alarms?start_date=${startDateStr}&end_date=${endDateStr}&limit=${filters.limit}`

      if (filters.sensorId !== 'all') {
        url += `&sensor_id=${filters.sensorId}`
      }

      if (filters.alarmType !== 'all') {
        url += `&alarm_type=${filters.alarmType}`
      }

      console.log('🔍 알람 히스토리 조회:', url)

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()

      setAlarmHistory(data.alarms || [])
      console.log(`✅ 알람 ${data.total}개 조회 완료`)

    } catch (err) {
      console.error('❌ 알람 히스토리 조회 실패:', err)
      setError(err.message)
      setAlarmHistory([])
    } finally {
      setLoading(false)
    }
  }

  // 알람 통계 조회
  const fetchAlarmStats = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/alarms/stats?days=${filters.days}`)

      if (response.ok) {
        const data = await response.json()
        setStats(data)
        console.log('📊 알람 통계 조회 완료:', data)
      }
    } catch (err) {
      console.error('❌ 알람 통계 조회 실패:', err)
    }
  }

  // 날짜 포맷 (YYYYMMDD)
  const formatDateYYYYMMDD = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}${month}${day}`
  }

  // 최초 로드 및 필터 변경 시 조회
  useEffect(() => {
    fetchAlarmHistory()
    fetchAlarmStats()
  }, [filters])

  // 새로고침
  const handleRefresh = () => {
    fetchAlarmHistory()
    fetchAlarmStats()
  }

  // CSV 다운로드
  const handleDownloadCSV = async () => {
    try {
      const endDate = new Date()
      const startDate = new Date()
      startDate.setDate(endDate.getDate() - filters.days)

      const startDateStr = formatDateYYYYMMDD(startDate)
      const endDateStr = formatDateYYYYMMDD(endDate)

      const url = `${API_BASE_URL}/alarms/export?start_date=${startDateStr}&end_date=${endDateStr}`

      // CSV 다운로드
      const link = document.createElement('a')
      link.href = url
      link.download = `alarm_history_${startDateStr}_${endDateStr}.csv`
      link.click()

      console.log('📥 CSV 다운로드 시작:', url)

    } catch (err) {
      console.error('❌ CSV 다운로드 실패:', err)
      alert('CSV 다운로드에 실패했습니다.')
    }
  }

  return (
    <div className="alarm-history">
      <div className="alarm-history-header">
        <h2>📋 알람 히스토리</h2>
        <button className="btn-refresh" onClick={handleRefresh} disabled={loading}>
          🔄 새로고침
        </button>
      </div>

      {/* 필터 */}
      <div className="alarm-filters">
        <div className="filter-group">
          <label>기간</label>
          <select
            value={filters.days}
            onChange={(e) => setFilters({...filters, days: parseInt(e.target.value)})}
          >
            <option value={1}>최근 1일</option>
            <option value={7}>최근 7일</option>
            <option value={30}>최근 30일</option>
            <option value={90}>최근 90일</option>
          </select>
        </div>

        <div className="filter-group">
          <label>센서</label>
          <select
            value={filters.sensorId}
            onChange={(e) => setFilters({...filters, sensorId: e.target.value})}
          >
            <option value="all">전체</option>
            <option value="TX1">TX1</option>
            <option value="TX2">TX2</option>
            <option value="TX3">TX3</option>
            <option value="TX4">TX4</option>
            <option value="TX5">TX5</option>
            <option value="TX6">TX6</option>
            <option value="TX7">TX7</option>
            <option value="PX1_LOW">PX1 하한</option>
            <option value="PX1_HIGH">PX1 상한</option>
            <option value="PU1">PU1</option>
          </select>
        </div>

        <div className="filter-group">
          <label>타입</label>
          <select
            value={filters.alarmType}
            onChange={(e) => setFilters({...filters, alarmType: e.target.value})}
          >
            <option value="all">전체</option>
            <option value="HIGH">HIGH</option>
            <option value="LOW">LOW</option>
          </select>
        </div>

        <div className="filter-group">
          <label>개수</label>
          <select
            value={filters.limit}
            onChange={(e) => setFilters({...filters, limit: parseInt(e.target.value)})}
          >
            <option value={20}>20개</option>
            <option value={50}>50개</option>
            <option value={100}>100개</option>
            <option value={200}>200개</option>
          </select>
        </div>

        <button className="btn-download" onClick={handleDownloadCSV}>
          📥 CSV 다운로드
        </button>
      </div>

      {/* 통계 */}
      <div className="alarm-stats">
        <div className="stat-card">
          <div className="stat-label">전체</div>
          <div className="stat-value">{stats.total_alarms}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">미확인</div>
          <div className="stat-value warning">{stats.unacknowledged}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">확인됨</div>
          <div className="stat-value success">{stats.acknowledged}</div>
        </div>
      </div>

      {/* 알람 목록 */}
      <div className="alarm-history-list">
        {loading && (
          <div className="loading-message">
            ⏳ 알람 히스토리 조회 중...
          </div>
        )}

        {error && (
          <div className="error-message">
            ❌ 오류: {error}
            <div className="error-hint">
              Edge Computer가 실행 중인지 확인하세요 ({API_BASE_URL})
            </div>
          </div>
        )}

        {!loading && !error && alarmHistory.length === 0 && (
          <div className="no-data-message">
            ℹ️ 조회된 알람이 없습니다.
          </div>
        )}

        {!loading && !error && alarmHistory.length > 0 && (
          <table className="alarm-table">
            <thead>
              <tr>
                <th>시간</th>
                <th>센서</th>
                <th>타입</th>
                <th>센서값</th>
                <th>임계값</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {alarmHistory.map((alarm, index) => (
                <tr key={index} className={alarm.status === '미확인' ? 'unacknowledged' : ''}>
                  <td>{alarm.timestamp}</td>
                  <td><span className="sensor-badge">{alarm.sensor_id}</span></td>
                  <td>
                    <span className={`alarm-type-badge ${alarm.alarm_type.toLowerCase()}`}>
                      {alarm.alarm_type}
                    </span>
                  </td>
                  <td>{alarm.sensor_value}</td>
                  <td>{alarm.threshold}</td>
                  <td>
                    <span className={`status-badge ${alarm.status === '미확인' ? 'pending' : 'ack'}`}>
                      {alarm.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 센서별 통계 */}
      {stats.by_sensor && Object.keys(stats.by_sensor).length > 0 && (
        <div className="sensor-stats">
          <h3>📊 센서별 알람 발생 횟수</h3>
          <div className="sensor-stats-grid">
            {Object.entries(stats.by_sensor).map(([sensor, count]) => (
              <div key={sensor} className="sensor-stat-item">
                <span className="sensor-name">{sensor}</span>
                <span className="sensor-count">{count}회</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default AlarmHistory
