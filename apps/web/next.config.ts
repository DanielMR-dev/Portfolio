import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { existsSync } from 'fs';
import { join } from 'path';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Check for CV availability at build time
const cvEsPath = join(process.cwd(), 'public/documents/daniel-mira-cv-es.pdf');
const cvEnPath = join(process.cwd(), 'public/documents/daniel-mira-resume-en.pdf');

const hasEsCv = existsSync(cvEsPath);
const hasEnCv = existsSync(cvEnPath);

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_HAS_ES_CV: String(hasEsCv),
    NEXT_PUBLIC_HAS_EN_CV: String(hasEnCv),
  }
};

export default withNextIntl(nextConfig);
