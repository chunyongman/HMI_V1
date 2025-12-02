/**
 * 가상 키보드 컴포넌트
 * - 터치스크린에서 ID/비밀번호 입력용
 */

import React, { useState } from 'react'
import './VirtualKeyboard.css'

function VirtualKeyboard({ onKeyPress, onClose, isPassword = false, inputLabel = '' }) {
  const [isShift, setIsShift] = useState(false)
  const [isCaps, setIsCaps] = useState(false)

  // 키보드 레이아웃
  const keyboardLayout = {
    row1: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    row2: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    row3: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
    row4: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  }

  // Shift 레이아웃 (숫자/기호 모두 변환)
  const shiftLayout = {
    row1: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
    row2: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
    row3: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"'],
    row4: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'],
  }

  // Caps Lock 레이아웃 (알파벳만 대문자, 숫자/기호는 그대로)
  const capsLayout = {
    row1: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    row2: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'],
    row3: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"],
    row4: ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
  }

  const getLayout = () => {
    if (isShift) {
      return shiftLayout  // Shift: 숫자→기호, 알파벳→대문자
    }
    if (isCaps) {
      return capsLayout   // Caps: 알파벳만 대문자
    }
    return keyboardLayout // 기본: 소문자
  }

  const handleKeyClick = (key) => {
    onKeyPress(key)
    // Shift는 한 번 누르면 해제
    if (isShift && !isCaps) {
      setIsShift(false)
    }
  }

  const handleShift = () => {
    setIsShift(!isShift)
  }

  const handleCaps = () => {
    setIsCaps(!isCaps)
    setIsShift(false)
  }

  const handleBackspace = () => {
    onKeyPress('BACKSPACE')
  }

  const handleSpace = () => {
    onKeyPress(' ')
  }

  const handleEnter = () => {
    onKeyPress('ENTER')
  }

  const handleClear = () => {
    onKeyPress('CLEAR')
  }

  const layout = getLayout()

  return (
    <div className="virtual-keyboard-overlay">
      <div className="virtual-keyboard">
        <div className="keyboard-header">
          <span>{inputLabel || (isPassword ? '비밀번호 입력' : '사용자 ID 입력')}</span>
          <button className="keyboard-close" onClick={onClose}>×</button>
        </div>

        <div className="keyboard-body">
          {/* 숫자 행 */}
          <div className="keyboard-row">
            {layout.row1.map((key, index) => (
              <button
                key={index}
                className="keyboard-key"
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            <button className="keyboard-key key-backspace" onClick={handleBackspace}>
              ⌫
            </button>
          </div>

          {/* QWERTY 행 */}
          <div className="keyboard-row">
            <div className="key-spacer-half"></div>
            {layout.row2.map((key, index) => (
              <button
                key={index}
                className="keyboard-key"
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
          </div>

          {/* ASDF 행 */}
          <div className="keyboard-row">
            <button
              className={`keyboard-key key-caps ${isCaps ? 'active' : ''}`}
              onClick={handleCaps}
            >
              Caps
            </button>
            {layout.row3.map((key, index) => (
              <button
                key={index}
                className="keyboard-key"
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            <button className="keyboard-key key-enter" onClick={handleEnter}>
              Enter
            </button>
          </div>

          {/* ZXCV 행 */}
          <div className="keyboard-row">
            <button
              className={`keyboard-key key-shift ${isShift ? 'active' : ''}`}
              onClick={handleShift}
            >
              Shift
            </button>
            {layout.row4.map((key, index) => (
              <button
                key={index}
                className="keyboard-key"
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            <button
              className={`keyboard-key key-shift ${isShift ? 'active' : ''}`}
              onClick={handleShift}
            >
              Shift
            </button>
          </div>

          {/* 스페이스바 행 */}
          <div className="keyboard-row">
            <button className="keyboard-key key-clear" onClick={handleClear}>
              Clear
            </button>
            <button className="keyboard-key key-space" onClick={handleSpace}>
              Space
            </button>
            <button className="keyboard-key key-done" onClick={onClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VirtualKeyboard
