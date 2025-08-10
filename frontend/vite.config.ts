import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// Conditional configuration based on the mode (development or production)
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_ORIGIN,
          changeOrigin: true, // makes forwarded requests Host header match the target
          secure: false,
        },
      },
    },
  };
});