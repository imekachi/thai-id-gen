import './index.css'
import App from './App.svelte'

const rootElement = document.getElementById('app')

if (!rootElement) {
  throw new Error('Root element not found')
}

const app = new App({
  target: rootElement,
})

export default app
