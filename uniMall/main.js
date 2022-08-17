import App from './App'
import uView from "uview-ui";
import { createSSRApp } from 'vue'
	
	export function createApp() {
		const app = createSSRApp(App)
		return {
			app
		}
	}