import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';

import Responsive from './plugin/responsive.js';
import BrowserRouter from './components/BrowserRouter.vue';
import BrowserDisplay from './components/BrowserDisplay.vue';

import App from './home.vue';

Vue.use(iView);
Vue.use(VueRouter);
Vue.use(Responsive);


const routes = [{
    path: '/:home_current_page',
    components: {
        'BrowserRouter': BrowserRouter,
        'BrowserDisplay': BrowserDisplay
    }
}, {
    path: '/writing',
    alias: '/'
}];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});