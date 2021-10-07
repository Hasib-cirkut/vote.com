import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  define: {
    'process.env': {
      VITE_LOCAL_API_URL: 'http://localhost:5000',
      GOOGLE_AUTH_CLIENT_ID:
        '949755678038-35hoemmom9g7h254odkl02bg4mr9763r.apps.googleusercontent.com',
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 3000,
  },
  plugins: [reactRefresh()],
})
