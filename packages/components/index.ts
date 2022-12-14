import type { App } from 'vue'
import components from './src/index'
export * from './src/index'

export default {
  install: (app: App) => {
    components.forEach(c => app.use(c))
  },
}
