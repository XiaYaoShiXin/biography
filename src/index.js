import Vue from 'vue';
import iView from 'iview';

import Responsive from './plugin/responsive.js';

import App from './index.vue';

Vue.use(iView);
Vue.use(Responsive);

new Vue({
    el: '#app',
    render: h => h(App)
});