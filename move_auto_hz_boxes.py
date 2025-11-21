import re
import sys
import io

# UTF-8 출력 설정
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# SVG 파일 읽기
svg_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\assets\cooling_diagram_new.svg'

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 각 펌프의 새로운 위치 (펌프 심볼 우측)
# SW 펌프들: cx=616.88, 766.4, 916.x 정도 -> 박스를 우측으로 이동
# LT 펌프들도 마찬가지

pump_positions = {
    'SW_Pump1': {'box_x': 635, 'box_y': 480, 'text_x': 639, 'text_y1': 488, 'text_y2': 498, 'rh_x': 639, 'rh_y': 513, 'vfd_x': 635, 'vfd_y': 520},
    'SW_Pump2': {'box_x': 785, 'box_y': 480, 'text_x': 789, 'text_y1': 488, 'text_y2': 498, 'rh_x': 789, 'rh_y': 513, 'vfd_x': 785, 'vfd_y': 520},
    'SW_Pump3': {'box_x': 935, 'box_y': 480, 'text_x': 939, 'text_y1': 488, 'text_y2': 498, 'rh_x': 939, 'rh_y': 513, 'vfd_x': 935, 'vfd_y': 520},
    'LT_Pump1': {'box_x': 210, 'box_y': 350, 'text_x': 214, 'text_y1': 358, 'text_y2': 368, 'rh_x': 214, 'rh_y': 383, 'vfd_x': 210, 'vfd_y': 390},
    'LT_Pump2': {'box_x': 360, 'box_y': 430, 'text_x': 364, 'text_y1': 438, 'text_y2': 448, 'rh_x': 364, 'rh_y': 463, 'vfd_x': 360, 'vfd_y': 470},
    'LT_Pump3': {'box_x': 510, 'box_y': 550, 'text_x': 514, 'text_y1': 558, 'text_y2': 568, 'rh_x': 514, 'rh_y': 583, 'vfd_x': 510, 'vfd_y': 590},
}

for pump, pos in pump_positions.items():
    # AUTO/Hz 배경 박스 위치 변경
    content = re.sub(
        rf'(<g clip-path="url\(#clipId0\)" id="g_auto_hz_bg_{pump}">[\s\S]*?<rect x=")(\d+)(" y=")(\d+)(")',
        rf'\g<1>{pos["box_x"]}\g<3>{pos["box_y"]}\g<5>',
        content
    )

    # AUTO 텍스트 위치 변경
    content = re.sub(
        rf'(<text x=")(\d+)(" y=")(\d+)(" font-family="Calibri, sans-serif" font-size="7px"[\s\S]*?id="{pump}_Auto">)',
        rf'\g<1>{pos["text_x"]}\g<3>{pos["text_y1"]}\g<5>',
        content
    )

    # Hz 텍스트 위치 변경
    content = re.sub(
        rf'(<text x=")(\d+)(" y=")(\d+)(" font-family="Calibri, sans-serif" font-size="7px"[\s\S]*?id="{pump}_Hz">)',
        rf'\g<1>{pos["text_x"]}\g<3>{pos["text_y2"]}\g<5>',
        content
    )

    # Running Hour 위치 변경
    content = re.sub(
        rf'(<text x=")(\d+)(" y=")(\d+)(" font-family="Calibri, sans-serif" font-size="6px"[\s\S]*?id="{pump}_RunningHour">)',
        rf'\g<1>{pos["rh_x"]}\g<3>{pos["rh_y"]}\g<5>',
        content
    )

    # VFD 박스 위치 변경
    content = re.sub(
        rf'(<g clip-path="url\(#clipId0\)" id="g_{pump}_vfd">[\s\S]*?<rect x=")(\d+)(" y=")(\d+)(")',
        rf'\g<1>{pos["vfd_x"]}\g<3>{pos["vfd_y"]}\g<5>',
        content
    )

    # VFD 텍스트 위치 변경 (중앙 정렬을 위해 x + 36)
    vfd_text_x = pos["vfd_x"] + 36
    vfd_text_y = pos["vfd_y"] + 12
    content = re.sub(
        rf'(<text x=")(\d+)(" y=")(\d+)(" font-family="Calibri, sans-serif" font-size="6px"[\s\S]*?id="{pump}_VFD">)',
        rf'\g<1>{vfd_text_x}\g<3>{vfd_text_y}\g<5>',
        content
    )

    print(f'{pump} positions updated')

# 수정된 내용 저장
with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f'\nAUTO/Hz boxes moved to right side of pumps')
