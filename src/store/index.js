import Vue from 'vue'
import Vuex from 'vuex'
//import router from '@/router/index'
Vue.use(Vuex)

export const store = new Vuex.Store({

state: {
    users: [
        {
            name: 'Alejandro',
            lastName: 'Torres',
            email: 'alejandrojoeltorres@gmail.com'
        },
        {
            name: 'Andres',
            lastName: 'Cano',
            email: 'acano@gmail.com'
        },
        {
            name: 'Daniel',
            lastName: 'Torres',
            email: 'danieltorres@gmail.com'
        }
    ]
},

/*const getters = {

}
*/

mutations: {

    addUser(state, user) {
        state.users.push(user)
    },

    deleteUser(state, index) {
        state.users.splice(index, 1);
    }

},

actions: {

    addUser({ commit }, user) {
        commit('addUser', user)
    },

    deleteUser({ commit }, index) {
        commit('deleteUser', index)
    }

}


})