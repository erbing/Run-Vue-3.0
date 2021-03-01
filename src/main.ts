import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// 创建Vue的实例
const app = createApp(App)

app.use(router);

app.mount('#app');
