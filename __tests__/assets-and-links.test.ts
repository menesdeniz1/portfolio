import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Asset Integrity & Link Security', () => {
  const rootDir = path.resolve(__dirname, '..');

  it('verifies public/resume.pdf exists on disk', () => {
    const resumePath = path.join(rootDir, 'public', 'resume.pdf');
    expect(fs.existsSync(resumePath), 'public/resume.pdf must exist').toBe(true);
  });

  it('verifies public/favicon.ico exists on disk', () => {
    const faviconPath = path.join(rootDir, 'public', 'favicon.ico');
    expect(fs.existsSync(faviconPath), 'public/favicon.ico must exist').toBe(true);
  });

  it('verifies no component renders unhandled dead anchor href="#"', () => {
    const componentsDir = path.join(rootDir, 'app', 'components');
    const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
    
    for (const file of files) {
      const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
      // Look for href="#" or href={'#'} or url: '#'
      const hasDeadHashLink = /href\s*=\s*["']#["']|url:\s*['"]#['"]|external:\s*['"]#['"]/.test(content);
      expect(hasDeadHashLink, `File ${file} contains dead '#' link references`).toBe(false);
    }
  });

  it('verifies all target="_blank" links include rel="noopener noreferrer"', () => {
    const appDir = path.join(rootDir, 'app');
    const checkDir = (dir: string) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
          checkDir(fullPath);
        } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
          const content = fs.readFileSync(fullPath, 'utf-8');
          const targetBlankRegex = /<a[^>]*target=["']_blank["'][^>]*>/g;
          const matches = content.match(targetBlankRegex) || [];
          for (const match of matches) {
            const hasProperRel = match.includes('rel="noopener noreferrer"') || match.includes('rel="noreferrer noopener"');
            expect(hasProperRel, `In ${entry.name}: link with target="_blank" must have rel="noopener noreferrer". Found: ${match}`).toBe(true);
          }
        }
      }
    };
    checkDir(appDir);
  });
});
