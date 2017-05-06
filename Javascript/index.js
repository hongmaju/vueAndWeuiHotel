new Vue({
	el:".top",
	data:{
		// imgs[]
	},
	mounted:function(){
		this.$nextTick(function(){
			this.getPic();

		});
	},
	computed:{},
	methods:{
		getPic:function(){
		// 也可以通过 params 对象传递参数
		axios.get('Data/goPics.json', {
		params: {
		//ID: 12345
		},
		 responseType: 'json', // default
		})
		.then(function (response) {
		console.log(response);
		})
		.catch(function (error) {
		console.log(error);
		});
		}
	}
});