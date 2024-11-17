import './assets/main.css'

import { createApp } from 'vue'
import V3ColorPicker from 'v3-color-picker';
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(V3ColorPicker);
// import { directive, colorEvent, V3ColorPicker } from 'v3-color-picker';
app.use(createPinia())
app.use(router)
// app.component('v3-color-picker', V3ColorPicker); // 只注册组件
// app.directive('color', directive); // 只注册指令
// app.config.globalProperties.colorEvent = colorEvent; // 只绑定方法
app.mount('#app')
