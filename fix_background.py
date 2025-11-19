import re
import sys
import io

# UTF-8 출력 설정
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# SVG 파일 읽기
svg_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\assets\cooling_diagram_new.svg'

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 회색 배경 색상들을 검은색 또는 투명으로 변경
content = re.sub(r'fill="#ecf0f1"', 'fill="none"', content)
content = re.sub(r'fill="#95a5a6"', 'fill="none"', content)
content = re.sub(r'fill="rgb\(236,240,241\)"', 'fill="none"', content)
content = re.sub(r'fill="rgb\(149,165,166\)"', 'fill="none"', content)

print("Gray background colors removed (#ecf0f1, #95a5a6)")

# 수정된 내용 저장
with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Background fix completed: {svg_path}")
