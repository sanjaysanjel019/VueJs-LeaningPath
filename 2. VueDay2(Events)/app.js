new Vue({
	el: '#root',
	data: {
		age: 25,
		x: 0,
		y: 0
	},
	methods: {
		add: function(inc) {
			this.age += inc;
		},
		subtract: function(dec) {
			this.age -= dec;
		},
		updateXY: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
			console.log(event);
			return this.x, this.y;
		},
		eventModify: function() {
			alert('You clicked me');
		}
	}
});
