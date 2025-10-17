import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: 'p0stman.local',
    port: 5173,
    allowedHosts: ['p0stman.local', 'localhost', '127.0.0.1'],
  },
});
