/**
 * 로그인 화면 컴포넌트
 * - 가상 키보드 지원 (터치스크린용)
 */

import React, { useState, useRef } from 'react'
import { useAuth } from '../AuthContext'
import VirtualKeyboard from './VirtualKeyboard'
import './Login.css'

function Login({ onLoginSuccess, isPopup = false }) {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // 가상 키보드 상태
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [activeInput, setActiveInput] = useState(null) // 'username' or 'password'

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setShowKeyboard(false)

    const result = await login(username, password)

    if (!result.success) {
      setError(result.message)
    } else if (onLoginSuccess) {
      onLoginSuccess()
    }

    setLoading(false)
  }

  // 입력 필드 클릭 시 가상 키보드 표시
  const handleInputFocus = (inputType) => {
    setActiveInput(inputType)
    setShowKeyboard(true)
  }

  // 가상 키보드 키 입력 처리
  const handleKeyPress = (key) => {
    if (!activeInput) return

    const setValue = activeInput === 'username' ? setUsername : setPassword
    const currentValue = activeInput === 'username' ? username : password

    if (key === 'BACKSPACE') {
      setValue(currentValue.slice(0, -1))
    } else if (key === 'CLEAR') {
      setValue('')
    } else if (key === 'ENTER') {
      // 다음 필드로 이동 또는 로그인
      if (activeInput === 'username') {
        setActiveInput('password')
        passwordRef.current?.focus()
      } else {
        setShowKeyboard(false)
        if (username && password) {
          handleSubmit(new Event('submit'))
        }
      }
    } else {
      setValue(currentValue + key)
    }
  }

  // 가상 키보드 닫기
  const handleCloseKeyboard = () => {
    setShowKeyboard(false)
    setActiveInput(null)
  }

  return (
    <div className={`login-container ${isPopup ? 'login-popup-mode' : ''}`}>
      <div className={`login-box ${showKeyboard ? 'keyboard-active' : ''}`}>
        {isPopup && (
          <button className="login-close-btn" onClick={onLoginSuccess} aria-label="닫기">
            ✕
          </button>
        )}
        <div className="login-header">
          <h1>{isPopup ? '로그인' : 'ESS 냉각시스템 HMI'}</h1>
          {!isPopup && <p>Energy Saving System</p>}
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">사용자 ID</label>
            <input
              ref={usernameRef}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => handleInputFocus('username')}
              placeholder="터치하여 입력"
              autoComplete="off"
              disabled={loading}
              required
              className={activeInput === 'username' ? 'input-active' : ''}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handleInputFocus('password')}
              placeholder="터치하여 입력"
              autoComplete="off"
              disabled={loading}
              required
              className={activeInput === 'password' ? 'input-active' : ''}
              readOnly
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <div className="login-footer">
          <p>기본 계정 안내</p>
          <ul>
            <li><strong>관리자:</strong> admin / admin123</li>
            <li><strong>운전자:</strong> operator / operator123</li>
          </ul>
        </div>
      </div>

      {/* 가상 키보드 */}
      {showKeyboard && (
        <VirtualKeyboard
          onKeyPress={handleKeyPress}
          onClose={handleCloseKeyboard}
          isPassword={activeInput === 'password'}
        />
      )}
    </div>
  )
}

export default Login
