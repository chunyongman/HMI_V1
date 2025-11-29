/**
 * VFD 예방진단 컴포넌트
 * Dashboard V2.0 스타일 적용
 */

import React, { useState, useEffect } from 'react';
import './VFDDiagnostics.css';

const VFDDiagnostics = () => {
  const [diagnosticsData, setDiagnosticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVFD, setSelectedVFD] = useState('SWP1');

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
    const interval = setInterval(fetchDiagnostics, 2000);
    return () => clearInterval(interval);
  }, []);

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

  // 건강도 점수 계산 (100 - severity_score)
  const getHealthScore = (severityScore) => {
    return 100 - (severityScore || 0);
  };

  // 상태 등급에 따른 색상
  const getStatusColor = (healthScore) => {
    if (healthScore >= 80) return '#10b981'; // 녹색
    if (healthScore >= 50) return '#9e9e9e'; // 회색
    if (healthScore >= 25) return '#ff9800'; // 주황색
    return '#f44336'; // 빨간색
  };

  const getStatusText = (healthScore) => {
    if (healthScore >= 80) return '정상';
    if (healthScore >= 50) return '주의';
    if (healthScore >= 25) return '경고';
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
    healthScore: getHealthScore(data.severity_score),
    ...data
  }));

  // 선택된 VFD 상세 정보
  const selectedVFDData = vfdList.find(v => v.name === selectedVFD);

  // 이상 징후 VFD 목록 (건강도 < 80, 해제된 VFD 제외)
  const warningVFDs = vfdList.filter(v => v.healthScore < 80 && !v.is_cleared);

  return (
    <div className="vfd-diagnostics-container">
      <div className="diagnostics-header">
        <h2>📊 VFD 예방진단</h2>
        <div className="update-time">
          마지막 업데이트: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* 1. 10대 VFD 건강도 현황 */}
      <section className="vfd-status-cards">
        <h3>📊 VFD 건강도 현황</h3>
        <div className="vfd-grid">
          {vfdList.map((vfd) => {
            const color = getStatusColor(vfd.healthScore);
            const status = getStatusText(vfd.healthScore);
            return (
              <div
                key={vfd.id}
                className="vfd-card"
                style={{ borderLeft: `4px solid ${color}` }}
              >
                <h4>{vfd.name}</h4>
                <div className="health-score" style={{ color }}>{vfd.healthScore}</div>
                <div className="health-label">건강도 점수</div>
                <div className="status-badge" style={{ color }}>{status}</div>
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
              const severity = vfd.healthScore >= 50 ? 'warning' : vfd.healthScore >= 25 ? 'error' : 'critical';
              const icon = vfd.healthScore >= 50 ? '⚠️' : vfd.healthScore >= 25 ? '🟠' : '🔴';
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
                      {icon} <strong>{vfd.name}</strong>: 건강도 {vfd.healthScore} ({getStatusText(vfd.healthScore)}) - {vfd.recommendation}
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
            {/* 실시간 운전 데이터 */}
            <div className="detail-section">
              <h4>🔧 실시간 운전 데이터</h4>
              <div className="metrics-grid">
                <div className="metric-item">
                  <div className="metric-label">주파수</div>
                  <div className="metric-value">{selectedVFDData.current_frequency_hz?.toFixed(1)} Hz</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">출력 전류</div>
                  <div className="metric-value">{selectedVFDData.output_current_a?.toFixed(1)} A</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">출력 전압</div>
                  <div className="metric-value">{selectedVFDData.output_voltage_v?.toFixed(0)} V</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">운전 시간</div>
                  <div className="metric-value">{selectedVFDData.cumulative_runtime_hours?.toFixed(1)} h</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">모터 온도</div>
                  <div className="metric-value">{selectedVFDData.motor_temperature_c?.toFixed(1)} °C</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">히트싱크 온도</div>
                  <div className="metric-value">{selectedVFDData.heatsink_temperature_c?.toFixed(1)} °C</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">DC 버스 전압</div>
                  <div className="metric-value">{selectedVFDData.dc_bus_voltage_v?.toFixed(0)} V</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">트립 횟수</div>
                  <div className="metric-value">{selectedVFDData.trip_count} 회</div>
                </div>
              </div>
            </div>

            {/* 예측 분석 */}
            <div className="detail-section">
              <h4>🔮 예측 분석</h4>
              <div className="metrics-grid">
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
                <div className="metric-item">
                  <div className="metric-label">상태 등급</div>
                  <div className="metric-value" style={{ color: getStatusColor(selectedVFDData.healthScore) }}>
                    {selectedVFDData.status_grade}
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">심각도 점수</div>
                  <div className="metric-value">{selectedVFDData.severity_score}/100</div>
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
    </div>
  );
};

export default VFDDiagnostics;
