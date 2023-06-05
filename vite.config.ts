/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    clearMocks: true,
    // coverage: {
    //   statements: 100,
    //   branches: 100,
    //   functions: 100,
    //   lines: 100,
    // },
    include: ['./src/**/*.spec.{ts,tsx}'],
  },
});
