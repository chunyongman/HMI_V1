/**
 * VFD 예방진단 컴포넌트
 * Edge Computer Dashboard와 동일한 스타일
 */

import React, { useState, useEffect } from 'react';
import './VFDDiagnostics.css';

const VFDDiagnostics = () => {
  const [diagnosticsData, setDiagnosticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVFD, setSelectedVFD] = useState('SWP1');
  const [anomalyHistory, setAnomalyHistory] = useState([]);
  const [anomalyStats, setAnomalyStats] = useState(null);
  const [historyFilter, setHistoryFilter] = useState('all'); // all, ACTIVE, ACKNOWLEDGED, CLEARED, AUTO_CLEARED

  // VFD 진단 데이터 가져오기
  const fetchDiagnostics = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/vfd/diagnostics');
      const result = await response.json();

      if (result.success && result.data && result.data.vfd_diagnostics) {
        setDiagnosticsData(result.data);
        setError(null);
      } else if (result.error === 'PLC 연결 안됨') {
        setDiagnosticsData(null);
        setError('PLC 연결 안됨 - VFD 진단 데이터를 표시할 수 없습니다.');
      } else {
        setError('VFD 진단 데이터를 사용할 수 없습니다.');
      }
    } catch (err) {
      setError(`데이터 로드 실패: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // 이상 징후 히스토리 가져오기
  const fetchAnomalyHistory = async () => {
    try {
      const params = historyFilter !== 'all' ? `?status=${historyFilter}&limit=50` : '?limit=50';
      const response = await fetch(`http://localhost:8001/api/vfd/anomalies/history${params}`);
      const result = await response.json();

      if (result.success && result.data) {
        setAnomalyHistory(result.data);
      }
    } catch (err) {
      console.error('이상 징후 히스토리 로드 실패:', err);
    }
  };

  // 이상 징후 통계 가져오기
  const fetchAnomalyStats = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/vfd/anomalies/statistics?days=30');
      const result = await response.json();

      if (result.success && result.data) {
        setAnomalyStats(result.data);
      }
    } catch (err) {
      console.error('이상 징후 통계 로드 실패:', err);
    }
  };

  // 이상 징후 확인 처리
  const handleAcknowledge = async (vfdId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/vfd/acknowledge/${vfdId}`, {
        method: 'POST'
      });
      const result = await response.json();
      if (result.success) {
        fetchDiagnostics(); // 데이터 새로고침
      }
    } catch (err) {
      console.error('확인 처리 실패:', err);
    }
  };

  // 이상 징후 해제 처리
  const handleClear = async (vfdId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/vfd/clear/${vfdId}`, {
        method: 'POST'
      });
      const result = await response.json();
      if (result.success) {
        fetchDiagnostics(); // 데이터 새로고침
      }
    } catch (err) {
      console.error('해제 처리 실패:', err);
    }
  };

  useEffect(() => {
    fetchDiagnostics();
    fetchAnomalyHistory();
    fetchAnomalyStats();
    const interval = setInterval(fetchDiagnostics, 2000);
    const historyInterval = setInterval(fetchAnomalyHistory, 10000); // 10초마다 히스토리 갱신
    return () => {
      clearInterval(interval);
      clearInterval(historyInterval);
    };
  }, []);

  // 필터 변경 시 히스토리 다시 가져오기
  useEffect(() => {
    fetchAnomalyHistory();
  }, [historyFilter]);

  // VFD 이름 매핑
  const getVFDName = (vfdId) => {
    const mapping = {
      'SW_PUMP_1': 'SWP1',
      'SW_PUMP_2': 'SWP2',
      'SW_PUMP_3': 'SWP3',
      'FW_PUMP_1': 'FWP1',
      'FW_PUMP_2': 'FWP2',
      'FW_PUMP_3': 'FWP3',
      'ER_FAN_1': 'FAN1',
      'ER_FAN_2': 'FAN2',
      'ER_FAN_3': 'FAN3',
      'ER_FAN_4': 'FAN4'
    };
    return mapping[vfdId] || vfdId;
  };

  // 4단계 중증도 레벨에 따른 색상 (Edge Computer와 동일)
  const getSeverityColor = (severityLevel) => {
    switch (severityLevel) {
      case 0: return '#10b981'; // 녹색 - 정상
      case 1: return '#9e9e9e'; // 회색 - 주의
      case 2: return '#ff9800'; // 주황색 - 경고
      case 3: return '#f44336'; // 빨간색 - 위험
      default: return '#10b981';
    }
  };

  // 4단계 중증도 레벨에 따른 텍스트
  const getSeverityText = (severityLevel) => {
    switch (severityLevel) {
      case 0: return '정상';
      case 1: return '주의';
      case 2: return '경고';
      case 3: return '위험';
      default: return '정상';
    }
  };

  // 건강도 점수에서 색상 (하위 호환용)
  const getStatusColor = (healthScore) => {
    if (healthScore >= 98) return '#10b981'; // 녹색
    if (healthScore >= 95) return '#9e9e9e'; // 회색
    if (healthScore >= 92) return '#ff9800'; // 주황색
    return '#f44336'; // 빨간색
  };

  const getStatusText = (healthScore) => {
    if (healthScore >= 98) return '정상';
    if (healthScore >= 95) return '주의';
    if (healthScore >= 92) return '경고';
    return '위험';
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'rising': return '↑ 상승';
      case 'stable': return '→ 안정';
      case 'falling': return '↓ 하강';
      default: return '→ 안정';
    }
  };

  if (loading) {
    return <div className="vfd-diagnostics-container">로딩 중...</div>;
  }

  if (error) {
    return <div className="vfd-diagnostics-container"><div className="error-message">{error}</div></div>;
  }

  if (!diagnosticsData || !diagnosticsData.vfd_diagnostics) {
    return <div className="vfd-diagnostics-container">데이터가 없습니다.</div>;
  }

  const vfdList = Object.entries(diagnosticsData.vfd_diagnostics).map(([id, data]) => ({
    id,
    name: getVFDName(id),
    healthScore: data.health_score || 100,
    severityLevel: data.severity_level || 0,
    ...data
  }));

  // 선택된 VFD 상세 정보
  const selectedVFDData = vfdList.find(v => v.name === selectedVFD);

  // 이상 징후 VFD 목록 (중증도 레벨 > 0, 해제된 VFD 제외)
  const warningVFDs = vfdList.filter(v => v.severityLevel > 0 && !v.is_cleared);

  return (
    <div className="vfd-diagnostics-container">
      <div className="diagnostics-header">
        <h2>📊 VFD 예방진단</h2>
        <div className="update-time">
          마지막 업데이트: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* 1. 10대 VFD 건강도 현황 - Edge Computer와 동일한 스타일 */}
      <section className="vfd-status-cards">
        <h3>📊 VFD 건강도 현황 (4단계 중증도)</h3>
        {/* 범례 */}
        <div className="severity-legend" style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
          padding: '10px 15px',
          background: '#0f172a',
          borderRadius: '6px',
          fontSize: '13px'
        }}>
          <span style={{ color: '#10b981' }}>● Level 0: 정상 (0-2점)</span>
          <span style={{ color: '#9e9e9e' }}>● Level 1: 주의 (3-5점)</span>
          <span style={{ color: '#ff9800' }}>● Level 2: 경고 (6-8점)</span>
          <span style={{ color: '#f44336' }}>● Level 3: 위험 (9점+)</span>
        </div>
        <div className="vfd-grid">
          {vfdList.map((vfd) => {
            const color = getSeverityColor(vfd.severityLevel);
            const status = getSeverityText(vfd.severityLevel);
            return (
              <div
                key={vfd.id}
                className="vfd-card"
                style={{ borderLeft: `4px solid ${color}` }}
              >
                <h4>{vfd.name}</h4>
                <div className="health-score" style={{ color }}>{vfd.healthScore}</div>
                <div className="health-label">건강도 점수</div>
                <div className="status-badge" style={{ color }}>{status} (Lv.{vfd.severityLevel})</div>
                {/* 모터 열부하 및 방열판 온도 표시 - Edge Computer와 동일 */}
                <div style={{
                  marginTop: '10px',
                  fontSize: '12px',
                  color: '#94a3b8',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <span>모터열: {vfd.motor_thermal_pct || 0}%</span>
                  <span>히트싱크: {vfd.heatsink_temperature_c || 0}°C</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. 이상 징후 경고 */}
      <section className="anomaly-warnings">
        <h3>⚠️ 이상 징후 탐지</h3>
        {warningVFDs.length > 0 ? (
          <div className="warning-list">
            {warningVFDs.map((vfd) => {
              // 4단계 중증도 기반 스타일링
              const severity = vfd.severityLevel === 1 ? 'warning' : vfd.severityLevel === 2 ? 'error' : 'critical';
              const icon = vfd.severityLevel === 1 ? '⚠️' : vfd.severityLevel === 2 ? '🟠' : '🔴';
              const isAcknowledged = vfd.is_acknowledged || false;

              return (
                <div
                  key={vfd.id}
                  className={`warning-item ${severity}`}
                  style={isAcknowledged ? {
                    backgroundColor: 'rgba(255, 193, 7, 0.15)',
                    borderLeftColor: '#ffc107'
                  } : {}}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                      {icon} <strong>{vfd.name}</strong>: 건강도 {vfd.healthScore} ({getSeverityText(vfd.severityLevel)} Lv.{vfd.severityLevel}) - {vfd.recommendation}
                      {isAcknowledged && <span style={{marginLeft: '10px', color: '#ffc107'}}>✓ 확인됨</span>}
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                      {!isAcknowledged && (
                        <button
                          onClick={() => handleAcknowledge(vfd.id)}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          확인
                        </button>
                      )}
                      {isAcknowledged && (
                        <button
                          onClick={() => handleClear(vfd.id)}
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#6b7280',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          해제
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="success-message">✅ 모든 VFD가 정상 상태입니다.</div>
        )}
      </section>

      {/* 3. 예측 유지보수 정보 */}
      <section className="maintenance-section">
        <h3>🔮 예측 유지보수</h3>
        {warningVFDs.length > 0 ? (
          <div className="maintenance-table">
            <table>
              <thead>
                <tr>
                  <th>장비명</th>
                  <th>건강도</th>
                  <th>예상 정비 시기</th>
                  <th>권장 조치</th>
                  <th>우선순위</th>
                </tr>
              </thead>
              <tbody>
                {warningVFDs.map((vfd) => {
                  const priorityText = vfd.maintenance_priority === 5 ? '즉시 점검' :
                                     vfd.maintenance_priority === 3 ? '1주일 내 점검' :
                                     vfd.maintenance_priority === 1 ? '정기 점검' : '정상';
                  return (
                    <tr key={vfd.id}>
                      <td>{vfd.name}</td>
                      <td style={{ color: getStatusColor(vfd.healthScore) }}>{vfd.healthScore}</td>
                      <td>{vfd.estimated_days_to_maintenance ? `${vfd.estimated_days_to_maintenance}일 후` : '-'}</td>
                      <td>{vfd.recommendation}</td>
                      <td>{priorityText}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="info-message">✅ 예정된 유지보수 항목이 없습니다.</div>
        )}
      </section>

      {/* 4. 상세 진단 정보 */}
      <section className="detailed-diagnostics">
        <h3>📋 상세 진단 정보</h3>

        {/* VFD 선택 버튼 */}
        <div className="vfd-selector">
          {vfdList.map((vfd) => (
            <button
              key={vfd.id}
              className={`vfd-select-btn ${selectedVFD === vfd.name ? 'active' : ''}`}
              onClick={() => setSelectedVFD(vfd.name)}
            >
              {vfd.name}
            </button>
          ))}
        </div>

        {selectedVFDData && (
          <div className="vfd-details">
            {/* 실시간 운전 데이터 - Edge Computer 대시보드와 동일 */}
            <div className="detail-section">
              <h4>🔧 실시간 운전 데이터</h4>
              <div className="metrics-grid">
                <div className="metric-item">
                  <div className="metric-label">주파수</div>
                  <div className="metric-value">{selectedVFDData.current_frequency_hz?.toFixed(1) || 0} Hz</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">모터 열부하</div>
                  <div className="metric-value">{selectedVFDData.motor_thermal_pct || 0} %</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">인버터 열부하</div>
                  <div className="metric-value">{selectedVFDData.inverter_thermal_pct || 0} %</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">운전 시간</div>
                  <div className="metric-value">{selectedVFDData.cumulative_runtime_hours || 0} h</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">모터 전류</div>
                  <div className="metric-value">{selectedVFDData.output_current_a?.toFixed(1) || 0} A</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">방열판 온도</div>
                  <div className="metric-value">{selectedVFDData.heatsink_temperature_c || 0} °C</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">DC 링크 전압</div>
                  <div className="metric-value">{selectedVFDData.dc_bus_voltage_v || 0} V</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">기동 횟수</div>
                  <div className="metric-value">{selectedVFDData.num_starts || 0} 회</div>
                </div>
              </div>
            </div>

            {/* 3상 전류 상태 - Edge Computer 대시보드와 동일 */}
            <div className="detail-section">
              <h4>⚡ 3상 전류 상태</h4>
              <div className="metrics-grid">
                <div className="metric-item">
                  <div className="metric-label">U상 전류</div>
                  <div className="metric-value">{selectedVFDData.phase_u_current?.toFixed(1) || 0} A</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">V상 전류</div>
                  <div className="metric-value">{selectedVFDData.phase_v_current?.toFixed(1) || 0} A</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">W상 전류</div>
                  <div className="metric-value">{selectedVFDData.phase_w_current?.toFixed(1) || 0} A</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">불평형률</div>
                  <div className="metric-value">{selectedVFDData.current_imbalance_pct?.toFixed(1) || 0} %</div>
                </div>
              </div>
            </div>

            {/* 예측 분석 */}
            <div className="detail-section">
              <h4>🔮 예측 분석</h4>
              <div className="metrics-grid">
                <div className="metric-item">
                  <div className="metric-label">건강도 점수</div>
                  <div className="metric-value" style={{ color: getSeverityColor(selectedVFDData.severityLevel) }}>
                    {selectedVFDData.healthScore}
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">중증도 레벨</div>
                  <div className="metric-value" style={{ color: getSeverityColor(selectedVFDData.severityLevel) }}>
                    Lv.{selectedVFDData.severityLevel} ({getSeverityText(selectedVFDData.severityLevel)})
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">30분 후 예측 온도</div>
                  <div className="metric-value">{selectedVFDData.predicted_temp_30min?.toFixed(1)} °C</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">온도 상승률</div>
                  <div className="metric-value">{selectedVFDData.temp_rise_rate?.toFixed(3)} °C/min</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">온도 트렌드</div>
                  <div className="metric-value">{getTrendIcon(selectedVFDData.temp_trend)}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">이상 점수</div>
                  <div className="metric-value">{selectedVFDData.anomaly_score?.toFixed(1)}</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">수명 잔여율</div>
                  <div className="metric-value">{selectedVFDData.remaining_life_percent?.toFixed(1)} %</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">정비 예상</div>
                  <div className="metric-value">{selectedVFDData.estimated_days_to_maintenance ? `${selectedVFDData.estimated_days_to_maintenance}일 후` : '-'}</div>
                </div>
              </div>
            </div>

            {/* 이상 패턴 */}
            <div className="detail-section">
              <h4>⚠️ 이상 패턴</h4>
              {selectedVFDData.anomaly_patterns && selectedVFDData.anomaly_patterns.length > 0 ? (
                <div className="anomaly-patterns">
                  {selectedVFDData.anomaly_patterns.map((pattern, idx) => (
                    <div key={idx} className="anomaly-pattern-item">
                      🔴 {pattern}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="success-message">✅ 이상 패턴 없음 - 정상 운전 중</div>
              )}
            </div>

            {/* 권고사항 */}
            <div className="detail-section">
              <h4>💡 권고사항</h4>
              <div className="recommendation-box">
                {selectedVFDData.recommendation}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 5. 이상 징후 히스토리 */}
      <section className="anomaly-history-section" style={{ marginBottom: '40px' }}>
        <h3>📜 이상 징후 히스토리</h3>

        {/* 통계 요약 */}
        {anomalyStats && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <div style={{
              background: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f1f5f9' }}>
                {anomalyStats.total_anomalies || 0}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>최근 30일 발생</div>
            </div>
            <div style={{
              background: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f44336' }}>
                {anomalyStats.active_anomalies || 0}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>활성 이상 징후</div>
            </div>
            <div style={{
              background: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#9e9e9e' }}>
                {anomalyStats.by_severity?.[1] || 0}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>주의 (Lv.1)</div>
            </div>
            <div style={{
              background: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9800' }}>
                {anomalyStats.by_severity?.[2] || 0}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>경고 (Lv.2)</div>
            </div>
            <div style={{
              background: '#0f172a',
              padding: '15px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f44336' }}>
                {anomalyStats.by_severity?.[3] || 0}
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>위험 (Lv.3)</div>
            </div>
          </div>
        )}

        {/* 필터 버튼 */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '15px'
        }}>
          {['all', 'ACTIVE', 'ACKNOWLEDGED', 'CLEARED', 'AUTO_CLEARED'].map(filter => (
            <button
              key={filter}
              onClick={() => setHistoryFilter(filter)}
              style={{
                padding: '8px 16px',
                background: historyFilter === filter ? '#3b82f6' : '#1e293b',
                color: historyFilter === filter ? 'white' : '#94a3b8',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              {filter === 'all' ? '전체' :
               filter === 'ACTIVE' ? '활성' :
               filter === 'ACKNOWLEDGED' ? '확인됨' :
               filter === 'CLEARED' ? '해제됨' : '자동해제'}
            </button>
          ))}
        </div>

        {/* 히스토리 테이블 */}
        <div className="maintenance-table">
          <table>
            <thead>
              <tr>
                <th style={{ width: '180px' }}>발생 시간</th>
                <th style={{ width: '100px' }}>장비</th>
                <th style={{ width: '80px' }}>중증도</th>
                <th style={{ width: '80px' }}>건강도</th>
                <th style={{ width: '100px' }}>상태</th>
                <th>권고사항</th>
                <th style={{ width: '100px' }}>지속시간</th>
              </tr>
            </thead>
            <tbody>
              {anomalyHistory.length > 0 ? (
                anomalyHistory.map((item, idx) => {
                  const severityColor = item.severity_level === 1 ? '#9e9e9e' :
                                       item.severity_level === 2 ? '#ff9800' : '#f44336';
                  const statusColor = item.status === 'ACTIVE' ? '#f44336' :
                                     item.status === 'ACKNOWLEDGED' ? '#ffc107' :
                                     item.status === 'CLEARED' ? '#10b981' : '#60a5fa';
                  const statusText = item.status === 'ACTIVE' ? '활성' :
                                    item.status === 'ACKNOWLEDGED' ? '확인됨' :
                                    item.status === 'CLEARED' ? '해제됨' : '자동해제';

                  return (
                    <tr key={item.anomaly_id || idx}>
                      <td>{new Date(item.occurred_at).toLocaleString('ko-KR')}</td>
                      <td>{getVFDName(item.equipment_id)}</td>
                      <td style={{ color: severityColor }}>
                        Lv.{item.severity_level} ({item.severity_name})
                      </td>
                      <td style={{ color: severityColor }}>{item.health_score}</td>
                      <td>
                        <span style={{
                          padding: '2px 8px',
                          background: `${statusColor}20`,
                          color: statusColor,
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}>
                          {statusText}
                        </span>
                      </td>
                      <td style={{ fontSize: '12px', color: '#94a3b8' }}>
                        {item.recommendations || '-'}
                      </td>
                      <td>
                        {item.duration_minutes ? `${item.duration_minutes}분` : '-'}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                    이상 징후 히스토리가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default VFDDiagnostics;
