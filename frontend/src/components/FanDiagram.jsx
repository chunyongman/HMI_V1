import React, { useEffect, useRef, useState } from 'react'
import { fanSensorMapping, fanMapping } from '../config/fanMapping'
import fanDiagramSvg from '../assets/fan_diagram.svg?raw'
import './FanDiagram.css'

function FanDiagram({ sensors = {}, fans = [], equipment = [], onCommand }) {
  const svgContainerRef = useRef(null)
  const [svgLoaded, setSvgLoaded] = useState(false)
  const [selectedFan, setSelectedFan] = useState(null)

  const fanData = fans.length > 0 ? fans : (equipment.length >= 10 ? equipment.slice(6, 10) : [])

  useEffect(() => {
    loadSVG()
  }, [])

  const loadSVG = async () => {
    try {
      if (svgContainerRef.current) {
        svgContainerRef.current.innerHTML = fanDiagramSvg
        setSvgLoaded(true)
      }
    } catch (error) {
      console.error('SVG 로드 오류:', error)
    }
  }

  useEffect(() => {
    if (svgLoaded) {
      updateSVGData()
    }
  }, [sensors, fanData, svgLoaded])

  const updateSVGData = () => {
    if (!svgContainerRef.current) return
    const svgElement = svgContainerRef.current.querySelector('svg')
    if (!svgElement) return

    // 센서 데이터 업데이트 - 박스 안에 텍스트 동적 생성
    Object.keys(fanSensorMapping).forEach(sensorKey => {
      const mapping = fanSensorMapping[sensorKey]
      const boxElement = svgElement.querySelector(`#${mapping.labelId}`)

      if (boxElement && sensors[sensorKey] !== undefined) {
        const value = sensors[sensorKey].toFixed(mapping.decimal)
        const textId = `${sensorKey}_text`

        // 기존 텍스트 삭제
        let oldText = svgElement.querySelector(`#${textId}`)
        if (oldText) {
          oldText.remove()
        }

        // 박스의 위치 가져오기
        const bbox = boxElement.getBBox()
        const centerX = bbox.x + bbox.width / 2
        const centerY = bbox.y + bbox.height / 2 + 2  // 약간 아래로

        // 새 텍스트 생성
        const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        textElement.setAttribute('id', textId)
        textElement.setAttribute('x', centerX)
        textElement.setAttribute('y', centerY)
        textElement.setAttribute('text-anchor', 'middle')
        textElement.setAttribute('fill', '#000000')
        textElement.setAttribute('font-size', '8')
        textElement.setAttribute('font-family', 'Arial, sans-serif')
        textElement.setAttribute('font-weight', 'bold')
        textElement.textContent = `${value}${mapping.unit}`

        svgElement.appendChild(textElement)
      }
    })

    // 팬 데이터 업데이트
    fanData.forEach((fan, index) => {
      const mapping = fanMapping[index]
      if (!mapping) return

      const isAuto = fan.auto_mode !== undefined ? fan.auto_mode : false

      // modeText 업데이트 (AUTO/MANU)
      const modeTextElement = svgElement.querySelector(`#${mapping.symbolIds.modeText}`)
      if (modeTextElement) {
        modeTextElement.textContent = isAuto ? 'AUTO' : 'MANU'
        modeTextElement.setAttribute('fill', isAuto ? '#00AA00' : '#FF0000')
        modeTextElement.setAttribute('font-weight', 'bold')
        modeTextElement.setAttribute('stroke', '#000000')
        modeTextElement.setAttribute('stroke-width', '0.3')
        modeTextElement.setAttribute('paint-order', 'stroke fill')
      }

      // auto 요소 업데이트 (호환성)
      const autoElement = svgElement.querySelector(`#${mapping.symbolIds.auto}`)
      if (autoElement) {
        autoElement.textContent = isAuto ? 'AUTO' : 'MANU'
        autoElement.setAttribute('fill', isAuto ? '#00AA00' : '#FF0000')
        autoElement.setAttribute('font-weight', 'bold')
        autoElement.setAttribute('stroke', '#000000')
        autoElement.setAttribute('stroke-width', '0.3')
        autoElement.setAttribute('paint-order', 'stroke fill')
      }

      // Hz 업데이트
      const hzElement = svgElement.querySelector(`#${mapping.symbolIds.hz}`)
      if (hzElement) {
        hzElement.textContent = `${fan.frequency?.toFixed(1) || 0} Hz`
      }
    })
  }

  return (
    <div className="fan-diagram-wrapper">
      <div className="fan-diagram-header">
        <h2>🌀 E/R Ventilation System</h2>
      </div>
      <div className="fan-diagram-content" ref={svgContainerRef}>
        {/* SVG가 여기에 로드됩니다 */}
      </div>
    </div>
  )
}

export default FanDiagram
