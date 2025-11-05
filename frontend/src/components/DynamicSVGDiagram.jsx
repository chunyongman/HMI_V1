import React, { useEffect, useRef, useState } from 'react'
import { sensorMapping, pumpMapping } from '../config/svgMapping'
import svgDiagram from '../assets/cooling_diagram_new.svg?raw'
import './DynamicSVGDiagram.css'

function DynamicSVGDiagram({ sensors = {}, pumps = [], onPumpCommand }) {
  const svgContainerRef = useRef(null)
  const [svgLoaded, setSvgLoaded] = useState(false)
  const [selectedPump, setSelectedPump] = useState(null)

  useEffect(() => {
    // SVG 파일을 직접 삽입
    if (svgContainerRef.current && !svgLoaded) {
      svgContainerRef.current.innerHTML = svgDiagram
      setSvgLoaded(true)
      addPumpClickHandlers()
    }
  }, [])

  const addPumpClickHandlers = () => {
    if (!svgContainerRef.current) return
    const svgElement = svgContainerRef.current.querySelector('svg')
    if (!svgElement) return

    // 펌프별 클릭 영역 정의 (SVG 상의 실제 위치 기반)
    const pumpAreas = [
      // LT Pumps (왼쪽)
      { index: 0, name: 'LT Pump No.1', x: 240, y: 360, width: 65, height: 60 },
      { index: 1, name: 'LT Pump No.2', x: 240, y: 447, width: 65, height: 60 },
      { index: 2, name: 'LT Pump No.3', x: 240, y: 557, width: 65, height: 60 },
      // SW Pumps (아래쪽)
      { index: 3, name: 'SW Pump No.1', x: 585, y: 478, width: 65, height: 60 },
      { index: 4, name: 'SW Pump No.2', x: 680, y: 478, width: 65, height: 60 },
      { index: 5, name: 'SW Pump No.3', x: 770, y: 478, width: 65, height: 60 },
    ]

    pumpAreas.forEach(area => {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.setAttribute('x', area.x)
      rect.setAttribute('y', area.y)
      rect.setAttribute('width', area.width)
      rect.setAttribute('height', area.height)
      rect.setAttribute('fill', 'transparent')
      rect.setAttribute('cursor', 'pointer')
      rect.setAttribute('data-pump-index', area.index)

      rect.addEventListener('click', () => {
        handlePumpClick(area.index)
      })

      svgElement.appendChild(rect)
    })
  }

  const handlePumpClick = (pumpIndex) => {
    if (pumps[pumpIndex]) {
      setSelectedPump({ ...pumps[pumpIndex], index: pumpIndex })
      console.log(`펌프 ${pumpIndex} 클릭됨`)
    }
  }

  // 팝업이 열려있는 동안 펌프 상태가 변경되면 selectedPump도 업데이트
  useEffect(() => {
    if (selectedPump && pumps[selectedPump.index]) {
      setSelectedPump(prev => ({
        ...pumps[prev.index],
        index: prev.index
      }))
    }
  }, [pumps])

  useEffect(() => {
    // 센서 및 펌프 데이터가 변경될 때마다 SVG 업데이트
    if (svgLoaded) {
      updateSVGData()
    }
  }, [sensors, pumps, svgLoaded])

  const updateSVGData = () => {
    if (!svgContainerRef.current) return

    const svgElement = svgContainerRef.current.querySelector('svg')
    if (!svgElement) {
      console.warn('SVG 요소를 찾을 수 없습니다')
      return
    }

    console.log('📊 데이터 업데이트:', { sensors, pumps })

    // 센서 데이터 업데이트 - E/R 환기와 동일한 스타일로 표시
    Object.keys(sensorMapping).forEach(sensorKey => {
      const mapping = sensorMapping[sensorKey]
      const labelElement = svgElement.querySelector(`#${mapping.labelId}`)

      if (labelElement && sensors[sensorKey] !== undefined) {
        const value = sensors[sensorKey].toFixed(mapping.decimal)
        const valueId = `${sensorKey}_value`

        // 모든 센서에 대해 동일하게 처리: 기존 텍스트 완전히 삭제
        const allOldTexts = svgElement.querySelectorAll(`#${valueId}`)
        allOldTexts.forEach(el => el.remove())

        // 라벨 위치 정보 가져오기
        const transform = labelElement.getAttribute('transform')
        const match = transform?.match(/matrix\(([\d\.\s\-]+)\)/)

        if (match) {
          const matrixValues = match[1].split(' ').map(Number)
          const baseX = matrixValues[4] + 25  // 라벨 오른쪽
          const baseY = matrixValues[5]

          // 텍스트만 생성 (배경 없음) - 모든 센서 동일하게
          const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
          textElement.setAttribute('id', valueId)
          textElement.setAttribute('x', baseX)
          textElement.setAttribute('y', baseY)
          textElement.setAttribute('font-family', 'Arial, sans-serif')
          textElement.setAttribute('font-size', '10')
          textElement.setAttribute('fill', '#000000')
          textElement.setAttribute('font-weight', 'normal')  // normal로 통일
          textElement.style.fontWeight = 'normal'
          textElement.textContent = `${value}${mapping.unit}`

          labelElement.parentNode.appendChild(textElement)
        }
      }
    })

    // 펌프 데이터 업데이트
    pumps.forEach((pump, index) => {
      const mapping = pumpMapping[index]
      if (!mapping) {
        console.warn(`펌프 ${index} 매핑 정보 없음`)
        return
      }

      console.log(`펌프 ${index} 업데이트:`, pump)

      // 모드 업데이트 (AUTO/MANU)
      const modeElement = svgElement.querySelector(`#${mapping.symbolIds.mode}`)
      if (modeElement) {
        // auto_mode 필드 확인 (기본값 false = MANU)
        const isAuto = pump.auto_mode !== undefined ? pump.auto_mode : false
        modeElement.textContent = isAuto ? 'AUTO' : 'MANU'

        // 색상: AUTO = 진한 녹색, MANU = 빨강
        modeElement.setAttribute('fill', isAuto ? '#00AA00' : '#FF0000')

        // 텍스트 굵기
        modeElement.setAttribute('font-weight', 'bold')

        // 얇은 검은색 테두리 추가 (가독성 향상)
        modeElement.setAttribute('stroke', '#000000')
        modeElement.setAttribute('stroke-width', '0.3')
        modeElement.setAttribute('paint-order', 'stroke fill')

        console.log(`✅ 펌프 ${index} 모드 업데이트: ${isAuto ? 'AUTO' : 'MANU'}`)
      } else {
        console.warn(`❌ 펌프 ${index} 모드 요소 없음: #${mapping.symbolIds.mode}`)
      }

      // Hz 업데이트
      const hzElement = svgElement.querySelector(`#${mapping.symbolIds.hz}`)
      if (hzElement) {
        hzElement.textContent = pump.frequency ? `${pump.frequency.toFixed(1)} Hz` : '0.0 Hz'
        console.log(`✅ 펌프 ${index} Hz 업데이트: ${pump.frequency}`)
      } else {
        console.warn(`❌ 펌프 ${index} Hz 요소 없음: #${mapping.symbolIds.hz}`)
      }

      // Running Hour 업데이트
      const hourElement = svgElement.querySelector(`#${mapping.symbolIds.runningHour}`)
      if (hourElement) {
        hourElement.textContent = pump.run_hours ? `${pump.run_hours} h` : '0 h'
        console.log(`✅ 펌프 ${index} 운전시간 업데이트: ${pump.run_hours}`)
      } else {
        console.warn(`❌ 펌프 ${index} 운전시간 요소 없음: #${mapping.symbolIds.runningHour}`)
      }

      // 주파수는 항상 검은색으로 표시
      if (hzElement) {
        hzElement.setAttribute('fill', '#000000')
        hzElement.setAttribute('font-weight', 'bold')
      }
    })
  }

  const sendPumpCommand = async (pumpIndex, command) => {
    if (onPumpCommand) {
      const success = await onPumpCommand(pumpIndex, command)
      if (success) {
        alert(`펌프 ${pumpIndex + 1} ${command === 'start' ? '시작' : '정지'} 명령 전송 완료`)
        setSelectedPump(null)
      } else {
        alert('명령 전송 실패')
      }
    }
  }

  return (
    <div className="dynamic-svg-diagram">
      <div
        ref={svgContainerRef}
        className="svg-container"
      />

      {/* 펌프 정보 팝업 */}
      {selectedPump && (
        <div className="pump-popup-overlay" onClick={() => setSelectedPump(null)}>
          <div className="pump-popup" onClick={(e) => e.stopPropagation()}>
            <div className="pump-popup-header">
              <h3>
                {selectedPump.index < 3 ? 'LT' : 'SW'} Pump No.{(selectedPump.index % 3) + 1}
              </h3>
              <button className="popup-close" onClick={() => setSelectedPump(null)}>×</button>
            </div>

            <div className="pump-popup-body">
              <div className="pump-info-row">
                <span className="info-label">상태:</span>
                <span className={`info-value ${selectedPump.running ? 'status-running' : 'status-stopped'}`}>
                  {selectedPump.running ? '🟢 운전 중' : '⚪ 정지'}
                </span>
              </div>

              <div className="pump-info-row">
                <span className="info-label">운전 모드:</span>
                <span className="info-value" style={{
                  color: selectedPump.auto_mode ? '#00FF00' : '#FFA500',
                  fontWeight: 'bold'
                }}>
                  {selectedPump.auto_mode !== undefined ? (selectedPump.auto_mode ? 'AUTO' : 'MANUAL') : 'MANUAL'}
                </span>
              </div>

              <div className="pump-info-row">
                <span className="info-label">VFD 모드:</span>
                <span className="info-value" style={{
                  color: selectedPump.vfd_mode ? '#00BFFF' : '#FF69B4',
                  fontWeight: 'bold'
                }}>
                  {selectedPump.vfd_mode !== undefined ? (selectedPump.vfd_mode ? 'VFD' : 'BYPASS') : 'VFD'}
                </span>
              </div>

              <div className="pump-info-row">
                <span className="info-label">주파수:</span>
                <span className="info-value">{selectedPump.frequency?.toFixed(1) || '0.0'} Hz</span>
              </div>

              <div className="pump-info-row">
                <span className="info-label">전력:</span>
                <span className="info-value">{selectedPump.power_kw || 0} kW</span>
              </div>

              <div className="pump-info-row">
                <span className="info-label">평균 전력:</span>
                <span className="info-value">{selectedPump.avg_power || 0} kW</span>
              </div>

              <div className="pump-info-row">
                <span className="info-label">절감 전력:</span>
                <span className="info-value">{selectedPump.saved_kwh?.toLocaleString() || 0} kWh</span>
              </div>

              <div className="pump-info-row">
                <span className="info-label">운전 시간:</span>
                <span className="info-value">{selectedPump.run_hours?.toLocaleString() || 0} h</span>
              </div>

              <div className="pump-info-row">
                <span className="info-label">ESS 모드:</span>
                <span className="info-value">{selectedPump.ess_mode ? '🟢 활성' : '⚪ 비활성'}</span>
              </div>
            </div>

            <div className="pump-popup-controls">
              <button
                className="btn-pump-start"
                onClick={() => sendPumpCommand(selectedPump.index, 'start')}
                disabled={selectedPump.running}
              >
                ▶️ START
              </button>
              <button
                className="btn-pump-stop"
                onClick={() => sendPumpCommand(selectedPump.index, 'stop')}
                disabled={!selectedPump.running}
              >
                ⏹️ STOP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DynamicSVGDiagram
