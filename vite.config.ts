import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '127.0.0.1', // Use 127.0.0.1 (localhost) for secure context
    port: 5174, // Different port to avoid conflicts
    allowedHosts: ['p0stman.local', 'localhost', '127.0.0.1'],
  },
});
