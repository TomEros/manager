import { defineConfig } from 'vite';
import { getBaseConfig } from '@ovh-ux/manager-vite-config';
import tailwindcss from 'tailwindcss';

const baseConfig = getBaseConfig({});

export default defineConfig({
  ...baseConfig,
  root: '',
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    ...baseConfig.resolve,
    dedupe: [
      '@ovh-ux/manager-core-api',
      '@ovh-ux/manager-react-shell-client',
      'i18next',
      'react',
      'react-dom',
      'react-i18next',
      'react-router-dom',
      'zustand',
    ],
  },
});
