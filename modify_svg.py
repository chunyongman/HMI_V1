import re
import sys
import io

# UTF-8 출력 설정
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# SVG 파일 읽기
svg_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\assets\cooling_diagram_new.svg'

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. 검은색 배경 추가 (svg 태그 바로 다음에)
if '<rect x="0" y="0" width="1024" height="768" fill="#0f1419"' not in content:
    # clipPath 정의 직전에 배경 삽입
    content = content.replace(
        '<clipPath',
        '<rect x="0" y="0" width="1024" height="768" fill="#0f1419" />\n<clipPath',
        1
    )
    print("Black background added")

# 2. 모든 회색 박스 제거
content = re.sub(r'fill="#e7e6e6"', 'fill="none"', content)
content = re.sub(r'fill="#ccecff"', 'fill="none"', content)
content = re.sub(r'fill="rgb\(231,230,230\)"', 'fill="none"', content)
content = re.sub(r'fill="rgb\(204,236,255\)"', 'fill="none"', content)
print("Gray boxes removed")

# 3. 펌프 심볼의 회색 부분을 어두운 색으로 변경
content = re.sub(r'fill="#d0d0d0"', 'fill="#2a2a2a"', content)
content = re.sub(r'fill="#a8a8a8"', 'fill="#1a1a1a"', content)
print("Pump symbol colors changed")

# 4. 모든 검은색 선을 흰색으로 변경
content = re.sub(r'stroke="rgb\(0,0,0\)"', 'stroke="#ffffff"', content)
content = re.sub(r'stroke="#000000"', 'stroke="#ffffff"', content)
content = re.sub(r'stroke="#000"', 'stroke="#ffffff"', content)
print("Black strokes changed to white")

# 5. 모든 빨간색 텍스트를 흰색으로 변경
content = re.sub(r'fill="rgb\(255,0,0\)"', 'fill="#ffffff"', content)
content = re.sub(r'fill="rgb\(192,0,0\)"', 'fill="#ffffff"', content)
content = re.sub(r'fill="#ff0000"', 'fill="#ffffff"', content)
content = re.sub(r'stroke="rgb\(255,0,0\)"', 'stroke="#ffffff"', content)
content = re.sub(r'stroke="rgb\(192,0,0\)"', 'stroke="#ffffff"', content)
content = re.sub(r'stroke="#ff0000"', 'stroke="#ffffff"', content)
print("Red text changed to white")

# 6. 제목 색상 변경 (파란색 → 흰색)
content = re.sub(r'fill="rgb\(0,0,102\)"', 'fill="#ffffff"', content)
content = re.sub(r'stroke="rgb\(0,0,102\)"', 'stroke="#ffffff"', content)
print("Title color changed to white")

# 수정된 내용 저장
with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nAll modifications completed: {svg_path}")
