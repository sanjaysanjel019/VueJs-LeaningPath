new Vue({
	el: '#root',
	data: {
		available: false,
		nearby: false,
		mongol: false
	},
	methods: {},
	computed: {
		compClasses: function() {
			return {
				available: this.available,
				nearby: this.nearby,
				mongol: this.mongol
			};
		}
	}
});
