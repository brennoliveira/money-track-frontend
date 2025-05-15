import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
      sourcemap: isBuild,
    },
  };
});
