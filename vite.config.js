import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set up any path aliases you use in your project
      '@': path.resolve(__dirname, './src')
    }
  },
  // Handle .env files similar to Create React App
  define: {
    'process.env': process.env
  }
});