import re
import sys
import io

# UTF-8 출력 설정
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# 새로운 배경색 (진한 네이비 블루)
NEW_BG_COLOR = '#1a1f35'

# SVG 파일 수정
svg_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\assets\cooling_diagram_new.svg'
with open(svg_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 기존 검은색 배경을 새로운 색으로 변경
content = re.sub(r'fill="#0f1419"', f'fill="{NEW_BG_COLOR}"', content)
content = re.sub(r'background-color:\s*#0f1419', f'background-color: {NEW_BG_COLOR}', content)
content = re.sub(r'pagecolor="#0f1419"', f'pagecolor="{NEW_BG_COLOR}"', content)

with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(content)
print(f'SVG background changed to {NEW_BG_COLOR}')

# CSS 파일 수정
css_path = r'C:\Users\my\Desktop\HMI_REAL\frontend\src\components\DynamicSVGDiagram.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()

# CSS 배경색 변경
css_content = re.sub(r'background:\s*#0f1419', f'background: {NEW_BG_COLOR}', css_content)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css_content)
print(f'CSS background changed to {NEW_BG_COLOR}')

print(f'\nBackground color changed to {NEW_BG_COLOR} (Dark Navy Blue)')
