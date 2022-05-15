import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import configFile from './config/confilg.json'


//Axios Global Use 
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Accept'] = 'application/json';



const app = createApp(App);

//Config
app.config.globalProperties.$config = configFile;
store.$app_url = configFile.app_url;




/*Global Components*/
const BaseSpinner = defineAsyncComponent(() =>
    import ('./components/ui/spinners/BaseSpinner.vue'));
app.component('base-spinner', BaseSpinner);


app.use(store);
app.use(router);
app.mount('#app')