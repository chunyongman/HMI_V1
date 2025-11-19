import re
import sys
import io

# UTF-8 출력 설정
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# CSV 데이터를 기반으로 한 위치 정보
positions = {
    'LT_Pump1': {
        'auto': {'x': 306, 'y': 365},  # text1252
        'hz': {'x': 304, 'y': 459},     # text1281
    },
    'LT_Pump2': {
        'auto': {'x': 306, 'y': 451},  # text1280
        'hz': {'x': 304, 'y': 459},     # text1281
    },
    'LT_Pump3': {
        'auto': {'x': 306, 'y': 540},  # text1308
        'hz': {'x': 304, 'y': 548},     # text1309
    },
    'SW_Pump1': {
        'auto': {'x': 654, 'y': 373},  # text1253
        'hz': {'x': 653, 'y': 502},     # text1387
    },
    'SW_Pump2': {
        'auto': {'x': 747, 'y': 494},  # text1413
        'hz': {'x': 745, 'y': 502},     # text1414
    },
    'SW_Pump3': {
        'auto': {'x': 835, 'y': 494},  # text1440
        'hz': {'x': 833, 'y': 502},     # text1441
    },
}

# SVG 파일 읽기
svg_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\assets\cooling_diagram_new.svg'

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

for pump, pos in positions.items():
    # AUTO 텍스트 위치 변경
    auto_x = pos['auto']['x']
    auto_y = pos['auto']['y']

    # Hz 텍스트 위치 변경
    hz_x = pos['hz']['x']
    hz_y = pos['hz']['y']

    # AUTO/Hz 박스 위치 (텍스트보다 약간 왼쪽, 위쪽)
    box_x = auto_x - 4
    box_y = auto_y - 8
    box_width = 73
    box_height = 25

    # Running hour 위치 (Hz 아래)
    rh_x = auto_x
    rh_y = hz_y + 15

    # VFD 박스 위치 (Running hour 아래)
    vfd_x = box_x
    vfd_y = hz_y + 20
    vfd_width = 73
    vfd_height = 18

    # AUTO/Hz 배경 박스 업데이트
    pattern = rf'(<g clip-path="url\(#clipId0\)" id="g_auto_hz_bg_{pump}">[\s\S]*?<rect x=")\d+(" y=")\d+(" width=")(\d+)(" height=")(\d+)(")'
    replacement = rf'\g<1>{box_x}\g<2>{box_y}\g<3>{box_width}\g<5>{box_height}\g<7>'
    content = re.sub(pattern, replacement, content)

    # AUTO 텍스트 위치 업데이트
    pattern = rf'(<text x=")\d+(" y=")\d+(" font-family="Calibri, sans-serif" font-size="7px"[\s\S]*?id="{pump}_Auto">)'
    replacement = rf'\g<1>{auto_x}\g<2>{auto_y}\g<3>'
    content = re.sub(pattern, replacement, content)

    # Hz 텍스트 위치 업데이트
    pattern = rf'(<text x=")\d+(" y=")\d+(" font-family="Calibri, sans-serif" font-size="7px"[\s\S]*?id="{pump}_Hz">)'
    replacement = rf'\g<1>{hz_x}\g<2>{hz_y}\g<3>'
    content = re.sub(pattern, replacement, content)

    # Running Hour 위치 업데이트
    pattern = rf'(<text x=")\d+(" y=")\d+(" font-family="Calibri, sans-serif" font-size="6px"[\s\S]*?id="{pump}_RunningHour">)'
    replacement = rf'\g<1>{rh_x}\g<2>{rh_y}\g<3>'
    content = re.sub(pattern, replacement, content)

    # VFD 박스 위치 업데이트
    pattern = rf'(<g clip-path="url\(#clipId0\)" id="g_{pump}_vfd">[\s\S]*?<rect x=")\d+(" y=")\d+(" width=")(\d+)(" height=")(\d+)(")'
    replacement = rf'\g<1>{vfd_x}\g<2>{vfd_y}\g<3>{vfd_width}\g<5>{vfd_height}\g<7>'
    content = re.sub(pattern, replacement, content)

    # VFD 텍스트 위치 업데이트 (중앙 정렬)
    vfd_text_x = vfd_x + (vfd_width // 2)
    vfd_text_y = vfd_y + 12
    pattern = rf'(<text x=")\d+(" y=")\d+(" font-family="Calibri, sans-serif" font-size="6px"[\s\S]*?id="{pump}_VFD">)'
    replacement = rf'\g<1>{vfd_text_x}\g<2>{vfd_text_y}\g<3>'
    content = re.sub(pattern, replacement, content)

    print(f'{pump} positions updated: AUTO({auto_x},{auto_y}), Hz({hz_x},{hz_y})')

# 수정된 내용 저장
with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\nAll positions updated based on CSV data')
