import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
	define: {
		'process.env': {
			VITE_LOCAL_API_URL: 'http://localhost:5000'
		}
	},
	server: {
		watch: {
			usePolling: true
		},
		port: 3000
	},
	plugins: [ reactRefresh() ]
});
