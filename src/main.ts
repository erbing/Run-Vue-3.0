import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 创建Vue的实例
const app = createApp(App)

app.use(router);
app.use(store);

app.mount('#app');
