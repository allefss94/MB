import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { makeServer } from './server/mirage'
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
    makeServer()
  }

createApp(App).mount('#app')
