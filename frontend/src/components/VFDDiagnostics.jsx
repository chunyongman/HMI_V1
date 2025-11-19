/**
 * VFD 예방진단 컴포넌트
 * Edge AI 분석 결과 표시
 */

import React, { useState, useEffect } from 'react';
import './VFDDiagnostics.css';

const VFDDiagnostics = () => {
  const [diagnosticsData, setDiagnosticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVFD, setSelectedVFD] = useState(null);
  const [acknowledgedAnomalies, setAcknowledgedAnomalies] = useState({}); // { vfd_id: [pattern1, pattern2, ...] }
  const [accumulatedAnomalies, setAccumulatedAnomalies] = useState({}); // { vfd_id: [pattern1, pattern2, ...] } - 누적된 이상 패턴

  // VFD 진단 데이터 가져오기
  const fetchDiagnostics = async () => {
    try {
      const response = await fetch('/api/vfd/diagnostics');
      const result = await response.json();

      if (result.success && result.data.vfd_diagnostics) {
        console.log('📊 VFD 진단 데이터 로드:', result.data);
        setDiagnosticsData(result.data);

        // 누적 이상 패턴 업데이트 (새로운 패턴 추가, 기존 패턴 유지)
        setAccumulatedAnomalies(prev => {
          const updated = { ...prev };

          // vfd_diagnostics는 객체이므로 Object.entries로 변환
          Object.entries(result.data.vfd_diagnostics).forEach(([vfdId, vfd]) => {
            const currentPatterns = vfd.anomaly_patterns || [];
            const existingPatterns = prev[vfdId] || [];

            // 기존 패턴과 새 패턴을 합치고 중복 제거
            const mergedPatterns = [...new Set([...existingPatterns, ...currentPatterns])];

            if (mergedPatterns.length > 0) {
              updated[vfdId] = mergedPatterns;
            }
          });

          return updated;
        });

        setError(null);
      } else {
        console.error('❌ VFD 진단 데이터 없음');
        setError('VFD 진단 데이터를 사용할 수 없습니다.');
      }
    } catch (err) {
      console.error('❌ VFD 진단 데이터 로드 실패:', err);
      setError(`데이터 로드 실패: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiagnostics();
    const interval = setInterval(fetchDiagnostics, 2000); // 2초마다 갱신
    return () => clearInterval(interval);
  }, []);

  // 상태 등급에 따른 색상 및 아이콘
  const getStatusColor = (status) => {
    switch (status) {
      case 'normal': return '#4CAF50'; // 녹색
      case 'caution': return '#FFC107'; // 노란색
      case 'warning': return '#FF9800'; // 주황색
      case 'critical': return '#F44336'; // 빨간색
      default: return '#9E9E9E'; // 회색
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'normal': return '정상';
      case 'caution': return '주의';
      case 'warning': return '경고';
      case 'critical': return '위험';
      default: return '알 수 없음';
    }
  };

  const getMaintenancePriorityText = (priority) => {
    switch (priority) {
      case 0: return '정상';
      case 1: return '정기 점검';
      case 3: return '1주일 내 점검';
      case 5: return '즉시 점검';
      default: return '-';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'rising': return '↑ 상승';
      case 'falling': return '↓ 하강';
      case 'stable': return '→ 안정';
      default: return '-';
    }
  };

  // 이상 감지 확인(Acknowledge) 함수
  const acknowledgeAnomaly = (vfdId, patterns) => {
    console.log(`✅ ${vfdId} 이상 감지 확인 - 패턴:`, patterns);

    // 확인된 패턴 저장
    setAcknowledgedAnomalies(prev => ({
      ...prev,
      [vfdId]: patterns
    }));

    // 누적된 패턴 초기화
    setAccumulatedAnomalies(prev => {
      const updated = { ...prev };
      delete updated[vfdId];
      return updated;
    });
  };

  // 미확인 이상 패턴만 필터링 (누적된 패턴 사용)
  const getUnacknowledgedPatterns = (vfdId) => {
    // 누적된 패턴 가져오기
    const accumulated = accumulatedAnomalies[vfdId] || [];

    if (accumulated.length === 0) {
      return [];
    }

    // 확인된 패턴 가져오기
    const acknowledged = acknowledgedAnomalies[vfdId] || [];

    // 누적된 패턴과 확인된 패턴을 비교 (순서 무관)
    const accumulatedSet = [...accumulated].sort().join(',');
    const acknowledgedSet = [...acknowledged].sort().join(',');

    // 동일한 패턴 조합이면 이미 확인된 것으로 간주
    if (accumulatedSet === acknowledgedSet && acknowledged.length > 0) {
      return [];
    }

    // 아니면 누적된 패턴 중 미확인 패턴 반환
    return accumulated.filter(pattern => !acknowledged.includes(pattern));
  };

  if (loading) {
    return <div className="vfd-diagnostics loading">데이터 로드 중...</div>;
  }

  if (error) {
    return <div className="vfd-diagnostics error">{error}</div>;
  }

  if (!diagnosticsData || !diagnosticsData.vfd_diagnostics) {
    return <div className="vfd-diagnostics">VFD 진단 데이터가 없습니다.</div>;
  }

  const vfdList = Object.entries(diagnosticsData.vfd_diagnostics);

  // VFD 그룹별로 분류
  const swPumps = vfdList.filter(([id]) => id.startsWith('SW_PUMP'));
  const fwPumps = vfdList.filter(([id]) => id.startsWith('FW_PUMP'));
  const erFans = vfdList.filter(([id]) => id.startsWith('ER_FAN'));

  const renderVFDCard = ([vfdId, vfd]) => {
    const statusColor = getStatusColor(vfd.status_grade);
    const statusText = getStatusText(vfd.status_grade);

    return (
      <div
        key={vfdId}
        className={`vfd-card ${selectedVFD === vfdId ? 'selected' : ''}`}
        style={{ borderLeft: `4px solid ${statusColor}` }}
        onClick={() => setSelectedVFD(vfdId)}
      >
        <div className="vfd-card-header">
          <h4>{vfdId.replace('_', ' ')}</h4>
          <span className="vfd-status-badge" style={{ backgroundColor: statusColor }}>
            {statusText}
          </span>
        </div>

        <div className="vfd-card-body">
          <div className="vfd-metric">
            <span className="label">주파수</span>
            <span className="value">{vfd.current_frequency_hz?.toFixed(1) || '0.0'} Hz</span>
          </div>
          <div className="vfd-metric">
            <span className="label">출력 전류</span>
            <span className="value">{vfd.output_current_a?.toFixed(1) || '0.0'} A</span>
          </div>
          <div className="vfd-metric">
            <span className="label">모터 온도</span>
            <span className="value" style={{
              color: vfd.motor_temperature_c > 75 ? '#f44336' :
                     vfd.motor_temperature_c > 70 ? '#ff9800' : '#e2e8f0'
            }}>
              {vfd.motor_temperature_c?.toFixed(1) || '0.0'}°C
            </span>
          </div>
          <div className="vfd-metric">
            <span className="label">온도 추세</span>
            <span className="value predicted">
              {getTrendIcon(vfd.temp_trend)} {vfd.temp_rise_rate?.toFixed(2) || '0.00'}°C/min
            </span>
          </div>
          <div className="vfd-metric">
            <span className="label">이상 점수</span>
            <span className="value" style={{
              color: vfd.anomaly_score > 75 ? '#f44336' :
                     vfd.anomaly_score > 50 ? '#ff9800' :
                     vfd.anomaly_score > 25 ? '#ffc107' : '#4caf50'
            }}>
              {vfd.anomaly_score?.toFixed(0) || '0'}/100
            </span>
          </div>
          <div className="vfd-metric">
            <span className="label">정비 권고</span>
            <span className="value" style={{
              color: vfd.maintenance_priority === 5 ? '#f44336' :
                     vfd.maintenance_priority === 3 ? '#ff9800' :
                     vfd.maintenance_priority === 1 ? '#ffc107' : '#4caf50'
            }}>
              {getMaintenancePriorityText(vfd.maintenance_priority)}
            </span>
          </div>
        </div>

        <div className="vfd-card-footer">
          <div className="footer-row">
            <span className="runtime">⏱ {vfd.cumulative_runtime_hours?.toFixed(0) || 0}h</span>
            <span className="life">💚 수명 {vfd.remaining_life_percent?.toFixed(0) || 100}%</span>
          </div>
          {(() => {
            const unacknowledgedPatterns = getUnacknowledgedPatterns(vfdId);
            return unacknowledgedPatterns.length > 0 && (
              <div className="footer-row warning" title={unacknowledgedPatterns.join(', ')}>
                ⚠️ {unacknowledgedPatterns.length}개 이상 감지
                <div className="anomaly-preview">
                  {unacknowledgedPatterns.slice(0, 2).map((pattern, idx) => (
                    <span key={idx} className="anomaly-tag">
                      {pattern.replace('_', ' ')}
                    </span>
                  ))}
                  {unacknowledgedPatterns.length > 2 && (
                    <span className="anomaly-more">+{unacknowledgedPatterns.length - 2}</span>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    );
  };

  const renderDetailView = () => {
    if (!selectedVFD) return null;

    // 객체에서 VFD ID로 직접 접근
    const vfd = diagnosticsData.vfd_diagnostics[selectedVFD];
    if (!vfd) return null;

    return (
      <div className="vfd-detail-panel">
        <div className="detail-header">
          <h3>{selectedVFD.replace('_', ' ')} 상세 정보</h3>
          <button className="close-btn" onClick={() => setSelectedVFD(null)}>✕</button>
        </div>

        <div className="detail-body">
          {/* 실시간 운전 데이터 */}
          <section className="detail-section">
            <h4>실시간 운전 데이터</h4>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">주파수</span>
                <span className="value">{vfd.current_frequency_hz?.toFixed(1)} Hz</span>
              </div>
              <div className="detail-item">
                <span className="label">출력 전류</span>
                <span className="value">{vfd.output_current_a?.toFixed(1)} A</span>
              </div>
              <div className="detail-item">
                <span className="label">출력 전압</span>
                <span className="value">{vfd.output_voltage_v?.toFixed(0)} V</span>
              </div>
              <div className="detail-item">
                <span className="label">DC 버스 전압</span>
                <span className="value">{vfd.dc_bus_voltage_v?.toFixed(0)} V</span>
              </div>
              <div className="detail-item">
                <span className="label">모터 온도</span>
                <span className="value">{vfd.motor_temperature_c?.toFixed(1)}°C</span>
              </div>
              <div className="detail-item">
                <span className="label">히트싱크 온도</span>
                <span className="value">{vfd.heatsink_temperature_c?.toFixed(1)}°C</span>
              </div>
            </div>
          </section>

          {/* 예측 데이터 */}
          <section className="detail-section">
            <h4>예측 분석</h4>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">30분 후 예측 온도</span>
                <span className="value predicted">{vfd.predicted_temp_30min?.toFixed(1)}°C</span>
              </div>
              <div className="detail-item">
                <span className="label">온도 상승률</span>
                <span className="value">{vfd.temp_rise_rate?.toFixed(3)}°C/min</span>
              </div>
              <div className="detail-item">
                <span className="label">온도 트렌드</span>
                <span className="value">{getTrendIcon(vfd.temp_trend)}</span>
              </div>
              <div className="detail-item">
                <span className="label">수명 잔여율</span>
                <span className="value">{vfd.remaining_life_percent?.toFixed(1)}%</span>
              </div>
              <div className="detail-item">
                <span className="label">정비 예상 일수</span>
                <span className="value">{vfd.estimated_days_to_maintenance} days</span>
              </div>
              <div className="detail-item">
                <span className="label">이상 점수</span>
                <span className="value">{vfd.anomaly_score?.toFixed(1)}</span>
              </div>
            </div>
          </section>

          {/* 진단 결과 */}
          <section className="detail-section">
            <h4>진단 결과</h4>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">상태 등급</span>
                <span className="value" style={{ color: getStatusColor(vfd.status_grade) }}>
                  {getStatusText(vfd.status_grade)}
                </span>
              </div>
              <div className="detail-item">
                <span className="label">심각도 점수</span>
                <span className="value">{vfd.severity_score}/100</span>
              </div>
              <div className="detail-item">
                <span className="label">정비 우선순위</span>
                <span className="value">{getMaintenancePriorityText(vfd.maintenance_priority)}</span>
              </div>
              <div className="detail-item">
                <span className="label">예측 신뢰도</span>
                <span className="value">{(vfd.prediction_confidence * 100)?.toFixed(0)}%</span>
              </div>
            </div>
          </section>

          {/* 이상 패턴 */}
          {(() => {
            const unacknowledgedPatterns = getUnacknowledgedPatterns(selectedVFD);
            return unacknowledgedPatterns.length > 0 && (
              <section className="detail-section">
                <h4>이상 패턴</h4>
                <ul className="anomaly-list">
                  {unacknowledgedPatterns.map((pattern, index) => (
                    <li key={index}>{pattern}</li>
                  ))}
                </ul>
                <button
                  className="acknowledge-btn"
                  onClick={() => {
                    acknowledgeAnomaly(selectedVFD, unacknowledgedPatterns);
                  }}
                >
                  ✓ 이상 감지 확인
                </button>
              </section>
            );
          })()}

          {/* 권고사항 */}
          {vfd.recommendation && (
            <section className="detail-section">
              <h4>권고사항</h4>
              <div className="recommendation-box">
                {vfd.recommendation}
              </div>
            </section>
          )}

          {/* 누적 통계 */}
          <section className="detail-section">
            <h4>누적 통계</h4>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">누적 운전시간</span>
                <span className="value">{vfd.cumulative_runtime_hours?.toFixed(1)} h</span>
              </div>
              <div className="detail-item">
                <span className="label">트립 횟수</span>
                <span className="value">{vfd.trip_count}</span>
              </div>
              <div className="detail-item">
                <span className="label">에러 횟수</span>
                <span className="value">{vfd.error_count}</span>
              </div>
              <div className="detail-item">
                <span className="label">경고 횟수</span>
                <span className="value">{vfd.warning_count}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="vfd-diagnostics">
      <div className="diagnostics-header">
        <div className="header-title">
          <h2>VFD 예방진단</h2>
          <div className="header-info">
            <span>마지막 업데이트: {new Date(diagnosticsData.timestamp).toLocaleTimeString('ko-KR')}</span>
            <span>총 {diagnosticsData.vfd_count}대</span>
          </div>
        </div>

        <div className="status-legend">
          <div className="legend-title">📊 상태 등급</div>
          <div className="legend-items">
            <span className="legend-item">
              <span className="legend-dot" style={{backgroundColor: '#4CAF50'}}></span>
              정상 (0-20점)
            </span>
            <span className="legend-item">
              <span className="legend-dot" style={{backgroundColor: '#FFC107'}}></span>
              주의 (21-50점)
            </span>
            <span className="legend-item">
              <span className="legend-dot" style={{backgroundColor: '#FF9800'}}></span>
              경고 (51-75점)
            </span>
            <span className="legend-item">
              <span className="legend-dot" style={{backgroundColor: '#F44336'}}></span>
              위험 (76-100점)
            </span>
          </div>
        </div>
      </div>

      <div className="guide-panel">
        <h4>📖 항목 설명</h4>
        <div className="guide-items">
          <div className="guide-item">
            <strong>온도 추세:</strong> ↑상승 (모터 온도가 계속 오르는 중) / →안정 / ↓하강
          </div>
          <div className="guide-item">
            <strong>이상 점수:</strong> 0-25(정상), 25-50(주의), 50-75(경고), 75+(위험)
          </div>
          <div className="guide-item">
            <strong>정비 권고:</strong> 즉시점검(위험), 1주일내(경고), 정기점검(주의), 정상
          </div>
          <div className="guide-item">
            <strong>수명 잔여:</strong> 베어링/냉각팬 기준 예상 잔여 수명 (70% 이하 시 부품 준비)
          </div>
        </div>
      </div>

      <div className={`diagnostics-content ${selectedVFD ? 'panel-open' : ''}`}>
        <div className="vfd-groups">
          {/* SW 펌프 */}
          <div className="vfd-group">
            <h3>해수 펌프 (SW Pumps)</h3>
            <div className="vfd-grid">
              {swPumps.map(renderVFDCard)}
            </div>
          </div>

          {/* FW 펌프 */}
          <div className="vfd-group">
            <h3>청수 펌프 (FW Pumps)</h3>
            <div className="vfd-grid">
              {fwPumps.map(renderVFDCard)}
            </div>
          </div>

          {/* E/R 팬 */}
          <div className="vfd-group">
            <h3>기관실 팬 (E/R Fans)</h3>
            <div className="vfd-grid">
              {erFans.map(renderVFDCard)}
            </div>
          </div>
        </div>

        {selectedVFD && renderDetailView()}
      </div>
    </div>
  );
};

export default VFDDiagnostics;
