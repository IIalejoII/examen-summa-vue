import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from '@/store/index.js'

//import '@/assets/scss/main.scss'

Vue.config.productionTip = false

// handle page reloads
let app
if (!app) {
    app = new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    })
}