import { createApp } from 'vue'

import VapourUI from 'vapour-ui'

import App from './App.vue'

const app = createApp(App)
app.use(VapourUI)
app.mount('#app')
