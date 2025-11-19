import re
import sys
import io

# UTF-8 출력 설정
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# SVG 파일 읽기
svg_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\assets\cooling_diagram_new.svg'

with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# style 속성 내부의 검은색 → 흰색
content = re.sub(r'(style="[^"]*?)fill:#000000', r'\1fill:#ffffff', content)
content = re.sub(r'(style="[^"]*?)fill:#000\b', r'\1fill:#ffffff', content)
content = re.sub(r'(style="[^"]*?)fill:rgb\(0,0,0\)', r'\1fill:#ffffff', content)
content = re.sub(r'(style="[^"]*?)stroke:#000000', r'\1stroke:#ffffff', content)
content = re.sub(r'(style="[^"]*?)stroke:#000\b', r'\1stroke:#ffffff', content)
content = re.sub(r'(style="[^"]*?)stroke:rgb\(0,0,0\)', r'\1stroke:#ffffff', content)
print("Black colors in style attributes changed to white")

# style 속성 내부의 빨간색 → 흰색
content = re.sub(r'(style="[^"]*?)fill:#ff0000', r'\1fill:#ffffff', content)
content = re.sub(r'(style="[^"]*?)fill:rgb\(255,0,0\)', r'\1fill:#ffffff', content)
content = re.sub(r'(style="[^"]*?)fill:rgb\(192,0,0\)', r'\1fill:#ffffff', content)
content = re.sub(r'(style="[^"]*?)stroke:#ff0000', r'\1stroke:#ffffff', content)
content = re.sub(r'(style="[^"]*?)stroke:rgb\(255,0,0\)', r'\1stroke:#ffffff', content)
content = re.sub(r'(style="[^"]*?)stroke:rgb\(192,0,0\)', r'\1stroke:#ffffff', content)
print("Red colors in style attributes changed to white")

# style 속성 내부의 파란색 (제목용) → 흰색
content = re.sub(r'(style="[^"]*?)fill:rgb\(0,0,102\)', r'\1fill:#ffffff', content)
content = re.sub(r'(style="[^"]*?)stroke:rgb\(0,0,102\)', r'\1stroke:#ffffff', content)
print("Blue colors in style attributes changed to white")

# 수정된 내용 저장
with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Style colors fixed: {svg_path}")
