import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons/fa', 'react-icons/fa6'], // Ensure both fa & fa6 are external
    },
  },
});
