import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/components/Index.vue'
import Test from '@/components/Test.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [ 
		{ path: '/', name: '/', component: Index}, 
		{ path: '/test', name: 'Test', component: Test}
	]
})

export default router;