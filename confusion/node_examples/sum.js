


var calc = function(a,b,c,d,callback) {
	if (a==1){
		callback(new Error("a cant be 1"))
	}
	else {
		var sum = a + b;
		var diff =c-d;
		var result = sum * diff;
		callback(null,result)
	}
}


calc(2,2,3,4, function(err,result){
	if (err) {
		console.log(err)
	}
	else{
		console.log(result)
	}
})



