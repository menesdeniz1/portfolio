import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Security & Clean Architecture Configuration', () => {
  const rootDir = path.resolve(__dirname, '..');

  it('verifies next.config.ts has no postgres import or database query', () => {
    const nextConfigContent = fs.readFileSync(path.join(rootDir, 'next.config.ts'), 'utf-8');
    expect(nextConfigContent).not.toContain('postgres');
    expect(nextConfigContent).not.toContain('POSTGRES_URL');
    expect(nextConfigContent).not.toContain('sql`');
  });

  it('verifies next.config.ts defines defensive HTTP security headers', () => {
    const nextConfigContent = fs.readFileSync(path.join(rootDir, 'next.config.ts'), 'utf-8');
    expect(nextConfigContent).toContain('headers');
    expect(nextConfigContent).toContain('X-Content-Type-Options');
    expect(nextConfigContent).toContain('X-Frame-Options');
    expect(nextConfigContent).toContain('Strict-Transport-Security');
    expect(nextConfigContent).toContain('Referrer-Policy');
  });

  it('verifies package.json does not retain dead/ghost dependencies', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8'));
    const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
    
    expect(allDeps['postgres']).toBeUndefined();
    expect(allDeps['@next/mdx']).toBeUndefined();
    expect(allDeps['@types/mdx']).toBeUndefined();
    expect(allDeps['sugar-high']).toBeUndefined();
    expect(allDeps['lucide-react']).toBeUndefined();
    expect(allDeps['framer-motion']).toBeUndefined();
  });

  it('verifies .gitignore blocks all variations of .env files', () => {
    const gitignoreContent = fs.readFileSync(path.join(rootDir, '.gitignore'), 'utf-8');
    expect(gitignoreContent).toMatch(/^\.env$/m);
    expect(gitignoreContent).toMatch(/^\.env\.\*$/m);
  });

  it('verifies zombie mdx-components.tsx file is deleted', () => {
    const mdxComponentsPath = path.join(rootDir, 'mdx-components.tsx');
    expect(fs.existsSync(mdxComponentsPath), 'mdx-components.tsx must not exist').toBe(false);
  });
});
