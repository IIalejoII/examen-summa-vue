import Vue from 'vue'
import Router from 'vue-router'
//import {store} from '@/store/index.js'
import Home from '@/pages/home'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: "*",
			redirect: {
				name: 'Home'
			}
		}
	]
})

export default router