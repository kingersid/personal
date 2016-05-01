
module.exports = {

"sum" : function(a,b,next) {
		if (a==0) {
			return next(new Error("this is an error"));
		}
		else {
			var sum = a + b
			return next(null,sum)
		}
},	
"sub": function(a,b,next) {
	var diff= a-b
	return next(null,diff)
}

}


