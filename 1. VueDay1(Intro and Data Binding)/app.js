new Vue({
	el: '#vue-app',
	data: {
		name: 'Sanjay Sanjel',
		address: 'Lokanthali, Bhaktapur, Nepal',
		age: 21,
		marriageStatus: 'Not Married',
		baseJob: {
			jobType: 'worker',
			salary: '$4000'
		}
	},

	methods: {
		greet: function(time) {
			return `Woah ${this.name}. Welcome. You win ${this.baseJob.salary} today on ${time}`;
		}
	}
});
