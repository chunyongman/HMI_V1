// ============================================================
// Piping Diagram 데이터 매핑 설정
// ============================================================
//
// ★★★★★ SVG 파일 교체 시 필수 확인 사항 ★★★★★
//
// 【1. 화면 배치 원칙 (절대 규칙 - 변경 불가)】
//   - 화면 우측 = No.1 (SWP1, 백엔드 pumps[0])
//   - 화면 중앙 = No.2 (SWP2, 백엔드 pumps[1])
//   - 화면 좌측 = No.3 (SWP3, 백엔드 pumps[2])
//
// 【2. SVG 파일 교체 시 수정 절차】
//   Step 1: 새 SVG 파일에서 SW Pump 요소들의 X 좌표 확인
//           (grep 명령어: grep -i "sw_pump" new_svg.svg)
//   Step 2: X 좌표가 가장 큰 펌프 = 화면 우측 = SWP1에 매핑
//   Step 3: X 좌표가 중간인 펌프 = 화면 중앙 = SWP2에 매핑
//   Step 4: X 좌표가 가장 작은 펌프 = 화면 좌측 = SWP3에 매핑
//   Step 5: 텍스트 Y 좌표는 배관선과 겹치지 않도록 조정 (현재 485~536)
//
// 【3. 현재 piping_diagram.svg 매핑 정보 (2024.12)】
//   - SW_Pump_3 (x=803, 우측) → SWP1 데이터 표시
//   - SW_Pump_2 (x=712, 중앙) → SWP2 데이터 표시
//   - SW_Pump_1 (x=617, 좌측) → SWP3 데이터 표시
//
// 【4. 텍스트 표시 Y 좌표 (배관선 회피용)】
//   - Auto/Man mode: y=485
//   - VFD/BYPASS: y=502
//   - Hz(VFD): y=519
//   - running hour: y=536
//
// ============================================================

export const pipingDataMapping = [
  // 온도 센서 (TX1-TX6) - 라벨과 균형을 맞추도록 조정
  { name: 'TX1', symbolId: 'TX1', x: 825, y: 320, unit: '°C', decimal: 1 },
  { name: 'TX2', symbolId: 'TX2', x: 568, y: 154, unit: '°C', decimal: 1 },
  { name: 'TX3', symbolId: 'TX3', x: 568, y: 298, unit: '°C', decimal: 1 },
  { name: 'TX4', symbolId: 'TX4', x: 318, y: 156, unit: '°C', decimal: 1 },
  { name: 'TX5', symbolId: 'TX5', x: 495, y: 440, unit: '°C', decimal: 1 },
  { name: 'TX6', symbolId: 'TX6', x: 0, y: 0, unit: '°C', decimal: 1 }, // 좌표 미제공

  // 압력 센서 - 균형 조정
  { name: 'DPX1', symbolId: 'PX1', x: 945, y: 439, unit: ' bar', decimal: 2 },
  { name: 'PX2', symbolId: 'PX2', x: 0, y: 0, unit: ' bar', decimal: 2 }, // Symbol ID 없음

  // LT Pump No.1 정보
  { name: 'LT Pump No.1', symbolId: 'g229', x: 244.243, y: 372.093, type: 'pump' },
  { name: 'LT Pump No.1 Auto/Man mode', symbolId: 'LT_Pump1_Mode', x: 300, y: 365 },
  { name: 'LT Pump No.1 VFD/ BYPASS', symbolId: 'LT_Pump1_VFD', x: 300, y: 382 },
  { name: 'LT Pump No.1 Hz(VFD)', symbolId: 'LT_Pump1_Hz', x: 300, y: 399, unit: ' Hz' },
  { name: 'LT Pump No.1 running hour', symbolId: 'LT_Pump1_hour', x: 300, y: 416, unit: ' h' },

  // LT Pump No.2 정보
  { name: 'LT Pump No.2', symbolId: 'g245', x: 244.243, y: 459.033, type: 'pump' },
  { name: 'LT Pump No.2 Auto/Man mode', symbolId: 'LT_Pump2_Mode', x: 300, y: 452 },
  { name: 'LT Pump No.2 VFD/ BYPASS', symbolId: 'LT_Pump2_VFD', x: 300, y: 469 },
  { name: 'LT Pump No.2 Hz(VFD)', symbolId: 'LT_Pump2_Hz', x: 300, y: 486, unit: ' Hz' },
  { name: 'LT Pump No.2 running hour', symbolId: 'LT_Pump2_hour', x: 300, y: 503, unit: ' h' },

  // LT Pump No.3 정보
  { name: 'LT Pump No.3', symbolId: 'g261', x: 244.243, y: 545.963, type: 'pump' },
  { name: 'LT Pump No.3 Auto/Man mode', symbolId: 'LT_Pump3_Mode', x: 300, y: 539 },
  { name: 'LT Pump No.3 VFD/ BYPASS', symbolId: 'LT_Pump3_VFD', x: 300, y: 556 },
  { name: 'LT Pump No.3 Hz(VFD)', symbolId: 'LT_Pump3_Hz', x: 300, y: 573, unit: ' Hz' },
  { name: 'LT Pump No.3 running hour', symbolId: 'LT_Pump3_hour', x: 300, y: 590, unit: ' h' },

  // ★★★ 화면 배치 원칙 (절대 규칙) ★★★
  //   - 화면 우측 = No.1 (SWP1)
  //   - 화면 중앙 = No.2 (SWP2)
  //   - 화면 좌측 = No.3 (SWP3)
  //
  // piping_diagram.svg 펌프 X 좌표:
  //   화면 우측 (x=803) = SW_Pump_3 → SWP1 데이터 표시
  //   화면 중앙 (x=712) = SW_Pump_2 → SWP2 데이터 표시
  //   화면 좌측 (x=617) = SW_Pump_1 → SWP3 데이터 표시

  // SWP1 정보 → 화면 우측 (x=803 근처)
  { name: 'SWP1', symbolId: 'SW_Pump_3', x: 803, y: 505, type: 'pump' },
  { name: 'SWP1 Auto/Man mode', symbolId: 'SWP1_Mode', x: 827, y: 485 },
  { name: 'SWP1 VFD/ BYPASS', symbolId: 'SWP1_VFD', x: 827, y: 502 },
  { name: 'SWP1 Hz(VFD)', symbolId: 'SWP1_Hz', x: 827, y: 519, unit: ' Hz' },
  { name: 'SWP1 running hour', symbolId: 'SWP1_hour', x: 827, y: 536, unit: ' h' },

  // SWP2 정보 → 화면 중앙 (x=712 근처)
  { name: 'SWP2', symbolId: 'SW_Pump_2', x: 712, y: 505, type: 'pump' },
  { name: 'SWP2 Auto/Man mode', symbolId: 'SWP2_Mode', x: 735, y: 485 },
  { name: 'SWP2 VFD/ BYPASS', symbolId: 'SWP2_VFD', x: 735, y: 502 },
  { name: 'SWP2 Hz(VFD)', symbolId: 'SWP2_Hz', x: 735, y: 519, unit: ' Hz' },
  { name: 'SWP2 running hour', symbolId: 'SWP2_hour', x: 735, y: 536, unit: ' h' },

  // SWP3 정보 → 화면 좌측 (x=617 근처)
  { name: 'SWP3', symbolId: 'SW_Pump_1', x: 617, y: 505, type: 'pump' },
  { name: 'SWP3 Auto/Man mode', symbolId: 'SWP3_Mode', x: 640, y: 485 },
  { name: 'SWP3 VFD/ BYPASS', symbolId: 'SWP3_VFD', x: 640, y: 502 },
  { name: 'SWP3 Hz(VFD)', symbolId: 'SWP3_Hz', x: 640, y: 519, unit: ' Hz' },
  { name: 'SWP3 running hour', symbolId: 'SWP3_hour', x: 640, y: 536, unit: ' h' },
]

// 센서 데이터만 필터링
export const pipingSensorMapping = pipingDataMapping.filter(item =>
  item.name.startsWith('TX') || item.name.startsWith('PX') || item.name.startsWith('DPX')
)

// 펌프 데이터만 필터링
// pumps 배열 순서 (백엔드): [SWP1, SWP2, SWP3, FWP1, FWP2, FWP3]
//
// ★★★ 화면 배치 원칙 (절대 규칙) ★★★
//   - 화면 우측 = No.1
//   - 화면 중앙 = No.2
//   - 화면 좌측 = No.3
//
// piping_diagram.svg 펌프 X 좌표:
//   SW_Pump_1: x=616.88 (좌측) → SWP3에 매핑
//   SW_Pump_2: x=711.98 (중앙) → SWP2에 매핑
//   SW_Pump_3: x=803.4  (우측) → SWP1에 매핑
//
// ※ SVG 파일 교체 시: 펌프 X 좌표 확인 후 아래 매핑 수정 필요
export const pipingPumpMapping = {
  0: { // pumps[0] = SWP1 → 화면 우측 펌프 (SW_Pump_3, x=803.4)
    name: 'SW_Pump_3',
    data: pipingDataMapping.filter(item => item.name.startsWith('SWP1'))
  },
  1: { // pumps[1] = SWP2 → 화면 중앙 펌프 (SW_Pump_2, x=711.98)
    name: 'SW_Pump_2',
    data: pipingDataMapping.filter(item => item.name.startsWith('SWP2'))
  },
  2: { // pumps[2] = SWP3 → 화면 좌측 펌프 (SW_Pump_1, x=616.88)
    name: 'SW_Pump_1',
    data: pipingDataMapping.filter(item => item.name.startsWith('SWP3'))
  },
  3: { // pumps[3] = FWP1 → SVG LT_Pump_1
    name: 'LT_Pump_1',
    data: pipingDataMapping.filter(item => item.name.includes('LT Pump No.1'))
  },
  4: { // pumps[4] = FWP2 → SVG LT_Pump_2
    name: 'LT_Pump_2',
    data: pipingDataMapping.filter(item => item.name.includes('LT Pump No.2'))
  },
  5: { // pumps[5] = FWP3 → SVG LT_Pump_3
    name: 'LT_Pump_3',
    data: pipingDataMapping.filter(item => item.name.includes('LT Pump No.3'))
  }
}
