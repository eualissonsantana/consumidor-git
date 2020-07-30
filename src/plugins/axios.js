import Vue from 'vue'
import axios from'axios'

//axios.defaults.baseURL = 'https://curso-vue-1d6ce.firebaseio.com/'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios

        Vue.prototype.$http = axios.create({
            baseURL: 'https://api.github.com',
            headers: {
                "Authorization": {
                    my_client_id: 'Iv1.c11d6d28d3090217',
                    my_client_secret: '1fc1117e75f245b844ce566ff061d4998f3fc539'
                }
            }
        })
    }
})