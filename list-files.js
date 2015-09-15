var fs = require("fs");
var path = require("path");


function dirCallback(err,files){	
	if (err) throw err;
	files.filter(function pathFilter(fileName){
		//console.log(path.extname(fileName));
		if (path.extname(fileName) === "."+process.argv[3]){
			console.log(fileName);
		}
	})
}

fs.readdir(process.argv[2],dirCallback);