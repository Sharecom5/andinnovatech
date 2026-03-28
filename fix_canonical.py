import os
import re

root_dir = r'c:\Users\Abhishek Sharma\.gemini\antigravity\scratch\and-innovatech\src\app'
base_url = 'https://www.andinnovatech.com'

def fix_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if metadata is dynamic as it is likely handled correctly in generateMetadata
    if 'export async function generateMetadata' in content:
        return

    # Find the metadata object
    match = re.search(r'export const metadata: Metadata = \{([\s\S]+?)\};', content)
    if not match:
        return

    body = match.group(1)
    
    # If alternates is already present, skip
    if 'alternates:' in body:
        return

    rel_path = os.path.relpath(file_path, root_dir).replace('\\', '/')
    
    if rel_path == 'page.tsx':
        path = '/'
    else:
        # services/it-consulting/page.tsx -> /services/it-consulting/
        # services/page.tsx -> /services/
        path = '/' + rel_path.replace('/page.tsx', '').replace('page.tsx', '') + '/'
        # Handle cases like about/page.tsx where it might end with //
        if '//' in path:
            path = path.replace('//', '/')

    canonical_url = f'{base_url}{path}'
    
    # Add the alternates block
    alternates_block = f"    alternates: {{\n        canonical: '{canonical_url}',\n    }},"
    
    # Insert before openGraph if it exists
    if 'openGraph:' in body:
        new_body = body.replace('openGraph:', f"{alternates_block}\n    openGraph:")
    else:
        # Append to the end of the last property
        body = body.rstrip()
        if not body.endswith(','):
            body += ','
        new_body = body + f"\n{alternates_block}"

    new_metadata = f'export const metadata: Metadata = {{{new_body}\n}};'
    new_content = content.replace(match.group(0), new_metadata)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Fixed: {path}')

for root, d_names, f_names in os.walk(root_dir):
    for f in f_names:
        if f == 'page.tsx':
            fix_file(os.path.join(root, f))
