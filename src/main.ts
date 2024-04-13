import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Root from './Root.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(Root)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)

router.isReady().then(() => {
  app.mount('#root')
})
