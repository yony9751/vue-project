import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins.js'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import i18nPlugin from './plugins/i18n';

const i18nStrings ={
  en : {
    hi : 'hello'
  },
  ko : {
    hi : '안녕하세요'
  }
}
const app= createApp(App)
app.use(router)
app.mixin(mixins) // 글로벌 mixin
app.use(VueSweetalert2)
app.use(store)
app.use(i18nPlugin,i18nStrings)
app.mount('#app')

