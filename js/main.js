var Counter={
	count:0,									
btn1Counter:function(){
if(this.count<1000000){
	return this.count = this.count + 1;
}
},

btnCounter:function(){
	if (this.count>0){
		return this.count = this.count - 1;
	} else {
		return this.count=0;
	}
}
};

var number = document.getElementById('h1');
number.innerHTML=0;
document.getElementById('btn1').onclick=function(){
number.innerHTML=Counter.btn1Counter();
}
document.getElementById('btn').onclick=function(){
number.innerHTML =Counter.btnCounter();
}

