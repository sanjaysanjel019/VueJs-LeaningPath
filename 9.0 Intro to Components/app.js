Vue.component('greeting', {
	template: '<h3>Hey man, Say hello to {{name}}. <button @click="changeName">Change name</button>',
	data: function() {
		return {
			name: 'Yomari'
		};
	},
	methods: {
		changeName: function() {
			if (this.name === 'Yomari') {
				this.name = 'Yakuza';
			} else {
				this.name = 'Yomari';
			}
		}
	}
});

new Vue({
	el: '#root',
	data: {
		output: ''
	},
	methods: {
		doTheWork: function() {
			this.output = this.$refs.input.value;
		}
	}
});
