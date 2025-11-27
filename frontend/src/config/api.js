/**
 * API 엔드포인트 설정
 *
 * HMI_V1 Backend API: 포트 8001
 * - WebSocket, 실시간 데이터, 제어 명령
 *
 * Edge Computer API: 포트 8000
 * - 알람 히스토리 조회 (HTTP API)
 */

// HMI_V1 Backend API (WebSocket + REST API)
export const HMI_BACKEND_HOST = import.meta.env.VITE_HMI_BACKEND_HOST || 'localhost'
export const HMI_BACKEND_PORT = import.meta.env.VITE_HMI_BACKEND_PORT || '8001'
export const HMI_BACKEND_URL = `http://${HMI_BACKEND_HOST}:${HMI_BACKEND_PORT}`
export const HMI_WS_URL = `ws://${HMI_BACKEND_HOST}:${HMI_BACKEND_PORT}/ws`

// Edge Computer API (알람 로그 조회용)
export const EDGE_COMPUTER_HOST = import.meta.env.VITE_EDGE_COMPUTER_HOST || 'localhost'
export const EDGE_COMPUTER_PORT = import.meta.env.VITE_EDGE_COMPUTER_PORT || '8000'
export const EDGE_COMPUTER_URL = `http://${EDGE_COMPUTER_HOST}:${EDGE_COMPUTER_PORT}`
