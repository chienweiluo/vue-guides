import Vue from 'vue';
import App from './App.vue';

import store from './store';

store.commit('INIT_JOKES',[{'TEST': 'TESTYYYY'}],)

var app = new Vue({
	el: '#app',
	store,
	render: h => h(App)
})