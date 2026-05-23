from PyPDF2 import PdfReader
import sys

path = 'Resume.pdf'
try:
    reader = PdfReader(path)
    text = []
    for i, page in enumerate(reader.pages):
        page_text = page.extract_text() or ''
        text.append(f"--- PAGE {i+1} ---\n" + page_text)
    full = '\n\n'.join(text)
    print(full)
except Exception as e:
    print('ERROR:', e, file=sys.stderr)
    sys.exit(1)
