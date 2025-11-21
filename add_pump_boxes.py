import re
import sys
import io

# UTF-8 출력 설정
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# SVG 파일 읽기
svg_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\assets\cooling_diagram_new.svg'

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 펌프 정보 (이름, AUTO/Hz 박스 위치, Running hour 위치, VFD 박스 위치)
pumps = [
    {
        'name': 'SW_Pump1',
        'auto_id': 'SW_Pump1_Auto',
        'hz_id': 'SW_Pump1_Hz',
        'rh_id': 'SW_Pump1_RunningHour',
        'vfd_id': 'SW_Pump1_VFD',
        'box_x': 580,
        'box_y': 465,
        'box_width': 73,
        'box_height': 25,
        'auto_x': 584,
        'auto_y': 473,
        'hz_x': 584,
        'hz_y': 483,
        'rh_x': 584,
        'rh_y': 498,
        'vfd_x': 580,
        'vfd_y': 505,
        'vfd_width': 73,
        'vfd_height': 18
    },
    {
        'name': 'SW_Pump2',
        'auto_id': 'SW_Pump2_Auto',
        'hz_id': 'SW_Pump2_Hz',
        'rh_id': 'SW_Pump2_RunningHour',
        'vfd_id': 'SW_Pump2_VFD',
        'box_x': 730,
        'box_y': 465,
        'box_width': 73,
        'box_height': 25,
        'auto_x': 734,
        'auto_y': 473,
        'hz_x': 734,
        'hz_y': 483,
        'rh_x': 734,
        'rh_y': 498,
        'vfd_x': 730,
        'vfd_y': 505,
        'vfd_width': 73,
        'vfd_height': 18
    },
    {
        'name': 'SW_Pump3',
        'auto_id': 'SW_Pump3_Auto',
        'hz_id': 'SW_Pump3_Hz',
        'rh_id': 'SW_Pump3_RunningHour',
        'vfd_id': 'SW_Pump3_VFD',
        'box_x': 880,
        'box_y': 465,
        'box_width': 73,
        'box_height': 25,
        'auto_x': 884,
        'auto_y': 473,
        'hz_x': 884,
        'hz_y': 483,
        'rh_x': 884,
        'rh_y': 498,
        'vfd_x': 880,
        'vfd_y': 505,
        'vfd_width': 73,
        'vfd_height': 18
    },
    {
        'name': 'LT_Pump1',
        'auto_id': 'LT_Pump1_Auto',
        'hz_id': 'LT_Pump1_Hz',
        'rh_id': 'LT_Pump1_RunningHour',
        'vfd_id': 'LT_Pump1_VFD',
        'box_x': 155,
        'box_y': 570,
        'box_width': 73,
        'box_height': 25,
        'auto_x': 159,
        'auto_y': 578,
        'hz_x': 159,
        'hz_y': 588,
        'rh_x': 159,
        'rh_y': 603,
        'vfd_x': 155,
        'vfd_y': 610,
        'vfd_width': 73,
        'vfd_height': 18
    },
    {
        'name': 'LT_Pump2',
        'auto_id': 'LT_Pump2_Auto',
        'hz_id': 'LT_Pump2_Hz',
        'rh_id': 'LT_Pump2_RunningHour',
        'vfd_id': 'LT_Pump2_VFD',
        'box_x': 305,
        'box_y': 570,
        'box_width': 73,
        'box_height': 25,
        'auto_x': 309,
        'auto_y': 578,
        'hz_x': 309,
        'hz_y': 588,
        'rh_x': 309,
        'rh_y': 603,
        'vfd_x': 305,
        'vfd_y': 610,
        'vfd_width': 73,
        'vfd_height': 18
    },
    {
        'name': 'LT_Pump3',
        'auto_id': 'LT_Pump3_Auto',
        'hz_id': 'LT_Pump3_Hz',
        'rh_id': 'LT_Pump3_RunningHour',
        'vfd_id': 'LT_Pump3_VFD',
        'box_x': 455,
        'box_y': 570,
        'box_width': 73,
        'box_height': 25,
        'auto_x': 459,
        'auto_y': 578,
        'hz_x': 459,
        'hz_y': 588,
        'rh_x': 459,
        'rh_y': 603,
        'vfd_x': 455,
        'vfd_y': 610,
        'vfd_width': 73,
        'vfd_height': 18
    }
]

# SVG 요소를 추가할 위치 찾기 (</svg> 태그 직전)
svg_elements = []

for pump in pumps:
    # AUTO/Hz 배경 박스
    auto_bg = f'''<g clip-path="url(#clipId0)" id="g_auto_hz_bg_{pump['name']}">
<rect x="{pump['box_x']}" y="{pump['box_y']}" width="{pump['box_width']}" height="{pump['box_height']}" rx="2" ry="2"
      fill="rgba(10, 10, 10, 0.95)" stroke="#333333" stroke-width="0.8" />
</g>'''

    # AUTO/Hz 텍스트
    auto_text = f'''<g clip-path="url(#clipId0)" fill="#ffffff" stroke="#ffffff" stroke-width="0" id="g_{pump['name']}_text">
<text x="{pump['auto_x']}" y="{pump['auto_y']}" font-family="Calibri, sans-serif" font-size="7px"
      id="{pump['auto_id']}">AUTO</text>
<text x="{pump['hz_x']}" y="{pump['hz_y']}" font-family="Calibri, sans-serif" font-size="7px"
      id="{pump['hz_id']}">50.3 Hz</text>
</g>'''

    # Running Hour 텍스트
    rh_text = f'''<g clip-path="url(#clipId0)" fill="#ffffff" stroke="none" id="g_{pump['name']}_rh">
<text x="{pump['rh_x']}" y="{pump['rh_y']}" font-family="Calibri, sans-serif" font-size="6px"
      id="{pump['rh_id']}">0.0 h</text>
</g>'''

    # VFD 박스
    vfd_box = f'''<g clip-path="url(#clipId0)" id="g_{pump['name']}_vfd">
<rect x="{pump['vfd_x']}" y="{pump['vfd_y']}" width="{pump['vfd_width']}" height="{pump['vfd_height']}" rx="2" ry="2"
      fill="#2a2a2a" stroke="#444444" stroke-width="0.8" />
<text x="{pump['vfd_x'] + 36}" y="{pump['vfd_y'] + 12}" font-family="Calibri, sans-serif" font-size="6px"
      fill="#ffffff" text-anchor="middle" id="{pump['vfd_id']}">VFD</text>
</g>'''

    svg_elements.append(auto_bg)
    svg_elements.append(auto_text)
    svg_elements.append(rh_text)
    svg_elements.append(vfd_box)

# 모든 요소를 </svg> 직전에 삽입
all_elements = '\n'.join(svg_elements)
content = content.replace('</svg>', f'{all_elements}\n</svg>')

# 수정된 내용 저장
with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Pump boxes added successfully to {svg_path}")
print(f"Added {len(pumps)} pump info boxes (AUTO/Hz, Running Hour, VFD)")
