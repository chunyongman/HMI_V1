/**
 * VFD 예방진단 컴포넌트
 * 하위 탭: 건강도 현황 / 이상징후 히스토리
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './VFDDiagnostics.css';

// 4단계 중증도 레벨에 따른 색상
const getSeverityColor = (severityLevel) => {
  switch (severityLevel) {
    case 0: return '#10b981';
    case 1: return '#9e9e9e';
    case 2: return '#ff9800';
    case 3: return '#f44336';
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

const getTrendIcon = (trend) => {
  switch (trend) {
    case 'rising': return '↑ 상승';
    case 'stable': return '→ 안정';
    case 'falling': return '↓ 하강';
    default: return '→ 안정';
  }
};

// 상세 진단 정보 팝업 컴포넌트 (외부로 분리)
const DetailPopup = React.memo(({ vfd, onClose }) => {
  if (!vfd) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h3>{vfd.name} 상세 진단 정보</h3>
          <button className="popup-close" onClick={onClose}>×</button>
        </div>

        <div className="popup-body">
          {/* 건강도 요약 */}
          <div className="popup-summary" style={{ borderLeftColor: getSeverityColor(vfd.severityLevel) }}>
            <div className="popup-health-score" style={{ color: getSeverityColor(vfd.severityLevel) }}>
              {vfd.healthScore}
            </div>
            <div className="popup-health-info">
              <div className="popup-status" style={{ color: getSeverityColor(vfd.severityLevel) }}>
                {getSeverityText(vfd.severityLevel)} (Lv.{vfd.severityLevel})
              </div>
              <div className="popup-recommendation">{vfd.recommendation}</div>
            </div>
          </div>

          {/* 실시간 운전 데이터 */}
          <div className="popup-section">
            <h4>🔧 실시간 운전 데이터</h4>
            <div className="popup-metrics-grid">
              <div className="popup-metric">
                <span className="popup-metric-label">주파수</span>
                <span className="popup-metric-value">{vfd.current_frequency_hz?.toFixed(1) || 0} Hz</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">모터 열부하</span>
                <span className="popup-metric-value">{vfd.motor_thermal_pct || 0} %</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">인버터 열부하</span>
                <span className="popup-metric-value">{vfd.inverter_thermal_pct || 0} %</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">방열판 온도</span>
                <span className="popup-metric-value">{vfd.heatsink_temperature_c || 0} °C</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">모터 전류</span>
                <span className="popup-metric-value">{vfd.output_current_a?.toFixed(1) || 0} A</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">DC 링크 전압</span>
                <span className="popup-metric-value">{vfd.dc_bus_voltage_v || 0} V</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">운전 시간</span>
                <span className="popup-metric-value">{vfd.cumulative_runtime_hours || 0} h</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">기동 횟수</span>
                <span className="popup-metric-value">{vfd.num_starts || 0} 회</span>
              </div>
            </div>
          </div>

          {/* 3상 전류 상태 */}
          <div className="popup-section">
            <h4>⚡ 3상 전류 상태</h4>
            <div className="popup-metrics-grid">
              <div className="popup-metric">
                <span className="popup-metric-label">U상 전류</span>
                <span className="popup-metric-value">{vfd.phase_u_current?.toFixed(1) || 0} A</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">V상 전류</span>
                <span className="popup-metric-value">{vfd.phase_v_current?.toFixed(1) || 0} A</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">W상 전류</span>
                <span className="popup-metric-value">{vfd.phase_w_current?.toFixed(1) || 0} A</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">불평형률</span>
                <span className="popup-metric-value">{vfd.current_imbalance_pct?.toFixed(1) || 0} %</span>
              </div>
            </div>
          </div>

          {/* 예측 분석 */}
          <div className="popup-section">
            <h4>🔮 예측 분석</h4>
            <div className="popup-metrics-grid">
              <div className="popup-metric">
                <span className="popup-metric-label">30분 후 예측 온도</span>
                <span className="popup-metric-value">{vfd.predicted_temp_30min?.toFixed(1) || '-'} °C</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">온도 상승률</span>
                <span className="popup-metric-value">{vfd.temp_rise_rate?.toFixed(3) || '-'} °C/min</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">온도 트렌드</span>
                <span className="popup-metric-value">{getTrendIcon(vfd.temp_trend)}</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">이상 점수</span>
                <span className="popup-metric-value">{vfd.anomaly_score?.toFixed(1) || '-'}</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">수명 잔여율</span>
                <span className="popup-metric-value">{vfd.remaining_life_percent?.toFixed(1) || '-'} %</span>
              </div>
              <div className="popup-metric">
                <span className="popup-metric-label">정비 예상</span>
                <span className="popup-metric-value">{vfd.estimated_days_to_maintenance ? `${vfd.estimated_days_to_maintenance}일 후` : '-'}</span>
              </div>
            </div>
          </div>

          {/* 이상 패턴 */}
          {vfd.anomaly_patterns && vfd.anomaly_patterns.length > 0 && (
            <div className="popup-section">
              <h4>⚠️ 이상 패턴</h4>
              <div className="popup-anomaly-patterns">
                {vfd.anomaly_patterns.map((pattern, idx) => (
                  <div key={idx} className="popup-anomaly-item">🔴 {pattern}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

const VFDDiagnostics = () => {
  const [activeTab, setActiveTab] = useState('health'); // 'health' | 'history'
  const [diagnosticsData, setDiagnosticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [anomalyHistory, setAnomalyHistory] = useState([]);
  const [anomalyStats, setAnomalyStats] = useState(null);
  const [historyFilter, setHistoryFilter] = useState('all');

  // 팝업 상태
  const [selectedVFDPopup, setSelectedVFDPopup] = useState(null);

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
      const params = historyFilter !== 'all' ? `?status=${historyFilter}&limit=100` : '?limit=100';
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
        fetchDiagnostics();
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
        fetchDiagnostics();
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
    const historyInterval = setInterval(fetchAnomalyHistory, 10000);
    return () => {
      clearInterval(interval);
      clearInterval(historyInterval);
    };
  }, []);

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

  const getStatusColor = (healthScore) => {
    if (healthScore >= 98) return '#10b981';
    if (healthScore >= 95) return '#9e9e9e';
    if (healthScore >= 92) return '#ff9800';
    return '#f44336';
  };

  // 팝업 닫기 콜백
  const handleClosePopup = useCallback(() => {
    setSelectedVFDPopup(null);
  }, []);

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

  const warningVFDs = vfdList.filter(v => v.severityLevel > 0 && !v.is_cleared);

  // 건강도 현황 탭
  const HealthStatusTab = () => (
    <div className="health-status-tab">
      {/* 1. VFD 건강도 현황 */}
      <section className="vfd-status-cards">
        <h3>📊 VFD 건강도 현황 (4단계 중증도)</h3>
        {/* 범례 */}
        <div className="severity-legend" style={{
          display: 'flex',
          gap: '25px',
          marginBottom: '20px',
          padding: '12px 20px',
          background: '#0f172a',
          borderRadius: '6px',
          fontSize: '18px',
          fontWeight: '500'
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
            // 그룹별 테두리 색상 설정
            const getGroupBorderColor = (name) => {
              if (name.startsWith('SWP')) return '#3b82f6';  // 파란색 (해수펌프)
              if (name.startsWith('FWP')) return '#10b981';  // 초록색 (청수펌프)
              if (name.startsWith('FAN')) return '#a855f7';  // 보라색 (팬)
              return '#334155';
            };
            return (
              <div
                key={vfd.id}
                className="vfd-card clickable"
                style={{
                  borderLeft: `4px solid ${color}`,
                  border: `2px solid ${getGroupBorderColor(vfd.name)}`,
                  borderLeftWidth: '4px',
                  borderLeftColor: color
                }}
                onClick={() => setSelectedVFDPopup(vfd)}
              >
                <h4>{vfd.name}</h4>
                <div className="health-score" style={{ color }}>{vfd.healthScore}</div>
                <div className="health-label">건강도 점수</div>
                <div className="status-badge" style={{ color }}>{status} (Lv.{vfd.severityLevel})</div>
                <div style={{
                  marginTop: '10px',
                  fontSize: '15px',
                  color: '#94a3b8',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px'
                }}>
                  <span>모터열: {vfd.motor_thermal_pct || 0}%</span>
                  <span>히트싱크: {vfd.heatsink_temperature_c || 0}°C</span>
                </div>
                <div className="click-hint">클릭하여 상세보기</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 이상 징후 탐지 + 예측 유지보수 좌우 배치 */}
      <div className="bottom-sections">
        {/* 2. 이상 징후 탐지 */}
        <section className="anomaly-warnings">
          <h3>⚠️ 이상 징후 탐지</h3>
          {warningVFDs.length > 0 ? (
            <div className="warning-list">
              {warningVFDs.map((vfd) => {
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

        {/* 3. 예측 유지보수 */}
        <section className="maintenance-section">
          <h3>🔮 예측 유지보수</h3>
          {warningVFDs.length > 0 ? (
            <div className="maintenance-table">
              <table>
                <thead>
                  <tr>
                    <th>장비명</th>
                    <th>건강도</th>
                    <th>예상 정비</th>
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
      </div>
    </div>
  );

  // 이상징후 히스토리 탭
  const HistoryTab = () => (
    <div className="history-tab">
      {/* 통계 요약 */}
      {anomalyStats && (
        <div className="history-stats">
          <div className="stat-card">
            <div className="stat-value">{anomalyStats.total_anomalies || 0}</div>
            <div className="stat-label">최근 30일 발생</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#f44336' }}>{anomalyStats.active_anomalies || 0}</div>
            <div className="stat-label">활성 이상 징후</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#9e9e9e' }}>{anomalyStats.by_severity?.[1] || 0}</div>
            <div className="stat-label">주의 (Lv.1)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#ff9800' }}>{anomalyStats.by_severity?.[2] || 0}</div>
            <div className="stat-label">경고 (Lv.2)</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#f44336' }}>{anomalyStats.by_severity?.[3] || 0}</div>
            <div className="stat-label">위험 (Lv.3)</div>
          </div>
        </div>
      )}

      {/* 필터 버튼 */}
      <div className="history-filters">
        {['all', 'ACTIVE', 'ACKNOWLEDGED', 'CLEARED', 'AUTO_CLEARED'].map(filter => (
          <button
            key={filter}
            onClick={() => setHistoryFilter(filter)}
            className={`filter-btn ${historyFilter === filter ? 'active' : ''}`}
          >
            {filter === 'all' ? '전체' :
             filter === 'ACTIVE' ? '활성' :
             filter === 'ACKNOWLEDGED' ? '확인됨' :
             filter === 'CLEARED' ? '해제됨' : '자동해제'}
          </button>
        ))}
      </div>

      {/* 히스토리 테이블 (스크롤 가능) */}
      <div className="history-table-container">
        <table className="history-table">
          <thead>
            <tr>
              <th style={{ width: '180px' }}>발생 시간</th>
              <th style={{ width: '100px' }}>장비</th>
              <th style={{ width: '100px' }}>중증도</th>
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
                      <span className="status-tag" style={{
                        background: `${statusColor}20`,
                        color: statusColor
                      }}>
                        {statusText}
                      </span>
                    </td>
                    <td className="recommendation-cell">
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
                <td colSpan="7" className="empty-message">
                  이상 징후 히스토리가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="vfd-diagnostics-container">
      {/* 하위 탭 네비게이션 */}
      <div className="sub-tabs">
        <button
          className={`sub-tab ${activeTab === 'health' ? 'active' : ''}`}
          onClick={() => setActiveTab('health')}
        >
          📊 VFD 건강도 현황
        </button>
        <button
          className={`sub-tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          📜 이상징후 히스토리
        </button>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="tab-content">
        {activeTab === 'health' ? <HealthStatusTab /> : <HistoryTab />}
      </div>

      {/* 상세 정보 팝업 */}
      {selectedVFDPopup && (
        <DetailPopup vfd={selectedVFDPopup} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default VFDDiagnostics;
