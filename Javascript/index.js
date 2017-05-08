new Vue({
	el:".top",
	data:{
		pic:[],
        
        now:""
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
				this.pic=response;
			let i=0;
				//alert(this.pic.data[0].url)
 				 var _this=this;
	 			setInterval(function(){
			      
			        if(i>=_this.pic.data.length){
			        i=0;
		       		}
		       		 _this.now=_this.pic.data[i].url;
		       		 var element = document.getElementById('moveImgs');
				     element.src =  _this.now;
		       		//Vue.set(_this.now, i,_this.pic.data[i].url);
		       		console.log(_this.now);
		       		 i++;
		     },2000);
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}
});