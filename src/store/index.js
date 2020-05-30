import Vue from 'vue'
import Vuex from 'vuex'
//import router from '@/router/index'
Vue.use(Vuex)

export const store = new Vuex.Store({

state: {
    products: [
        {
            title: 'Camara fotográfica',
            regularPrice: 2626,
            discountPrice: 2101,
            image: {
                URL: 'https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                alt: 'Product image'
            }
        },
        {
            title: 'Juego de espejo',
            regularPrice: 2626,
            discountPrice: 2101,
            image: {
                URL: 'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Product image'
            }
        },
        {
            title: 'Delineador',
            regularPrice: 2626,
            discountPrice: 2101,
            image: {
                URL: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Product image'
            }
        },
        {
            title: 'Set de maquillaje',
            regularPrice: 2626,
            discountPrice: 2101,
            image: {
                URL: 'https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                alt: 'Product image'
            }
        },
        {
            title: 'Camara fotográfica',
            regularPrice: 2626,
            discountPrice: 2101,
            image: {
                URL: 'https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                alt: 'Product image'
            }
        },
        {
            title: 'Juego de espejo',
            regularPrice: 2626,
            discountPrice: 2101,
            image: {
                URL: 'https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Product image'
            }
        },
        {
            title: 'Delineador',
            regularPrice: 2626,
            discountPrice: 2101,
            image: {
                URL: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Product image'
            }
        },
        {
            title: 'Set de maquillaje',
            regularPrice: 2626,
            discountPrice: 2101,
            image: {
                URL: 'https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                alt: 'Product image'
            }
        },
    ]
},

/*const getters = {

}
*/

mutations: {


},

actions: {

    

}

})