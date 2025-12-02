/**
 * 인증 Context
 * - 로그인/로그아웃 상태 관리
 * - 사용자 정보 및 권한 관리
 */

import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

// Edge Computer API 주소
const EDGE_API_URL = 'http://localhost:8000'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [permissions, setPermissions] = useState(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(() => localStorage.getItem('authToken'))

  // 토큰이 있으면 사용자 정보 복원
  useEffect(() => {
    const restoreSession = async () => {
      const savedToken = localStorage.getItem('authToken')
      if (savedToken) {
        try {
          const response = await fetch(`${EDGE_API_URL}/api/auth/me`, {
            headers: {
              'Authorization': `Bearer ${savedToken}`
            }
          })

          if (response.ok) {
            const result = await response.json()
            if (result.success) {
              setUser(result.data.user)
              setPermissions(result.data.permissions)
              setToken(savedToken)
            } else {
              // 세션 만료
              localStorage.removeItem('authToken')
              setToken(null)
            }
          } else {
            // 인증 실패
            localStorage.removeItem('authToken')
            setToken(null)
          }
        } catch (error) {
          console.error('세션 복원 실패:', error)
          localStorage.removeItem('authToken')
          setToken(null)
        }
      }
      setLoading(false)
    }

    restoreSession()
  }, [])

  // 로그인
  const login = async (username, password) => {
    try {
      const response = await fetch(`${EDGE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setUser(result.data.user)
        setPermissions(result.data.permissions)
        setToken(result.data.token)
        localStorage.setItem('authToken', result.data.token)
        return { success: true }
      } else {
        return { success: false, message: result.detail || '로그인 실패' }
      }
    } catch (error) {
      console.error('로그인 오류:', error)
      return { success: false, message: '서버 연결 실패' }
    }
  }

  // 로그아웃
  const logout = async () => {
    try {
      if (token) {
        await fetch(`${EDGE_API_URL}/api/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      }
    } catch (error) {
      console.error('로그아웃 오류:', error)
    } finally {
      setUser(null)
      setPermissions(null)
      setToken(null)
      localStorage.removeItem('authToken')
    }
  }

  // 비밀번호 변경
  const changePassword = async (currentPassword, newPassword) => {
    try {
      const response = await fetch(`${EDGE_API_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          current_password: currentPassword,
          new_password: newPassword
        })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        return { success: true }
      } else {
        return { success: false, message: result.detail || '비밀번호 변경 실패' }
      }
    } catch (error) {
      console.error('비밀번호 변경 오류:', error)
      return { success: false, message: '서버 연결 실패' }
    }
  }

  // 탭 접근 권한 확인
  const canAccessTab = (tabName) => {
    if (!permissions) return false
    return permissions.tabs.includes(tabName)
  }

  // 제어 권한 확인
  const canControl = () => {
    return permissions?.can_control ?? false
  }

  // 사용자 관리 권한 확인
  const canManageUsers = () => {
    return permissions?.can_manage_users ?? false
  }

  const value = {
    user,
    permissions,
    token,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
    changePassword,
    canAccessTab,
    canControl,
    canManageUsers
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
