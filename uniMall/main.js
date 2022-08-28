import App from './App'
import { createSSRApp } from 'vue'
import './common/common.css'
	
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}