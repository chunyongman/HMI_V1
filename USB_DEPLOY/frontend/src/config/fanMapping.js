// E/R FAN System - SVG Symbol ID와 센서/팬 데이터 매핑 설정
// fan_diagram.svg 파일의 실제 SVG ID 매핑 완료

export const fanSensorMapping = {
  // 온도 센서
  TX6: { labelId: 'TX6', unit: '°C', decimal: 1 },  // E/R Inside Temp
  TX7: { labelId: 'TX7', unit: '°C', decimal: 1 },  // E/R Outside Temp

  // 압력 센서
  DPX2: { labelId: 'DPX2', unit: ' Pa', decimal: 1 },  // E/R Diff Press

  // M/E 부하
  PU1: { labelId: 'ME_Load', unit: '%', decimal: 1 },  // M/E Load
}

export const fanMapping = {
  // E/R Fan 1
  0: {
    name: 'FAN1',
    symbolIds: {
      mode: 'FAN1_Mode',         // FAN1_Mode (polyline group)
      modeText: 'text428',       // MAN/AUTO 텍스트
      auto: 'Fan1_Auto',         // AUTO 텍스트
      hz: 'Fan1_Hz',             // Hz(VFD) 표시
      runningHour: 'Fan1_hour'   // Running hour 표시 영역
    }
  },

  // E/R Fan 2
  1: {
    name: 'FAN2',
    symbolIds: {
      mode: 'FAN2_Mode',
      modeText: 'text411',
      auto: 'Fan2_Auto',
      hz: 'Fan2_Hz',
      runningHour: 'Fan2_hour'
    }
  },

  // E/R Fan 3
  2: {
    name: 'FAN3',
    symbolIds: {
      mode: 'FAN3_Mode',
      modeText: 'text464',
      auto: 'Fan3_Auto',
      hz: 'Fan3_Hz',
      runningHour: 'Fan3_hour'
    }
  },

  // E/R Fan 4
  3: {
    name: 'FAN4',
    symbolIds: {
      mode: 'FAN4_Mode',
      modeText: 'text447',
      auto: 'Fan4_Auto',
      hz: 'Fan4_Hz',
      runningHour: 'Fan4_hour'
    }
  }
}
