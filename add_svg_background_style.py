import re
import sys
import io

# UTF-8 출력 설정
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# SVG 파일 읽기
svg_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\assets\cooling_diagram_new.svg'

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# SVG 태그에 style 추가 (background-color)
# 먼저 기존 style이 있는지 확인
if '<svg' in content and 'style=' not in content.split('</svg>')[0].split('<svg')[1].split('>')[0]:
    # style 속성이 없으면 추가
    content = re.sub(
        r'(<svg[^>]*)(>)',
        r'\1 style="background-color: #0f1419;"\2',
        content,
        count=1
    )
    print("Added background-color style to SVG root")
else:
    # 기존 style 속성에 background-color 추가
    content = re.sub(
        r'(<svg[^>]*style=")([^"]*)(">)',
        r'\1\2 background-color: #0f1419;\3',
        content,
        count=1
    )
    print("Updated existing style attribute")

# 수정된 내용 저장
with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"SVG background style added: {svg_path}")
