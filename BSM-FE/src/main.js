import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import configFile from './config/confilg.json'
import AlertMixin from './mixins/alert'
import RolesMixin from './mixins/roles'
//Global Style
import './assets/css/main.css';

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
const TheHeader = defineAsyncComponent(() =>
    import ('./components/layout/TheHeader.vue'));
const TheSidebar = defineAsyncComponent(() =>
    import ('./components/layout/TheSidebar.vue'));
const BaseCard = defineAsyncComponent(() =>
    import ('./components/ui/cards/BaseCard.vue'));
const AnalyticalCard = defineAsyncComponent(() =>
    import ('./components/ui/cards/AnalyticalCard.vue'));

app.component('base-spinner', BaseSpinner);
app.component('the-header', TheHeader);
app.component('the-sidebar', TheSidebar);
app.component('base-card', BaseCard);
app.component('analytical-card', AnalyticalCard);




app.mixin(AlertMixin);
app.mixin(RolesMixin);

app.use(store);
app.use(router);
app.mount('#app')