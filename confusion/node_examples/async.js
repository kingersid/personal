var fs =require('fs');
var operations = require('./operations');

operations.sum(fileContents, 2, function(err,sum) {
	if (err) {
		console.log(err)
	}
	else {
		console.log(sum)
	}

})



var fileContents = fs.readFile('object.js', function(err,data){
	if (err) {
		console.log(err)
	}
	else {
		return Number(data)
	}
	}
)













