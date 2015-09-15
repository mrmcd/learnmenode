var fs = require("fs");

function callback(err,data){
		if (err) throw err;
		var lines = data.toString().split("\n").length-1;
		console.log(lines);
}

fs.readFile(process.argv[2],callback);