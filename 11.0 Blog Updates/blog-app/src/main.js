import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

//Custom Directives
Vue.directive('rainbow', {
	bind(el, binding, vnode) {
		el.style.color = '#' + Math.random().toString().slice(2, 8);
		binding;
		vnode;
	}
});
Vue.directive('redText', {
	bind(el) {
		el.style.color = 'red';
	}
});

Vue.directive('theme', {
	bind(el, binding, vnode) {
		if (binding.value == 'wide') {
			el.style.maxWidth = '1200px';
		} else if (binding.value == 'narrow') {
			el.style.maxWidth = '800px';
		}

		if (binding.arg == 'column') {
			el.style.background = '#ddd';
			el.style.padding = '20px';
		}
		vnode;
	}
});

//Filters
Vue.filter('to-uppercase', function(value) {
	return value.toUpperCase();
});
Vue.filter('snippet', function(value) {
	return value.slice(0, 100) + '......';
});

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
