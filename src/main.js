import { createApp } from 'vue'
// 全局样式
import '@/common/styles/frame.styl'


import Home from '@/views/home.vue'

const app = createApp(Home)
app.mount('#app')
