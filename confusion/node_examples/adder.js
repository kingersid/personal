

var prompt = require('prompt')

prompt.get(["a","b"], function(err, result){
	if (err) {
		return onErr(err)
	}
	else{
		operations.sub(Number(result.a),Number(result.b), function(err,sum){
		if (err) {
			console.log(err)
		}
		
		else {
		console.log(sum)
		}

		})

	}
})







	