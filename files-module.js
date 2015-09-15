var fs = require("fs");
var path = require("path");

function filterFiles(directory, extension, callback) { 
		
	var filtered = [];
	fs.readdir(directory , function (err, unfiltered) {
		if (err){
			return callback(err);
		}
		filtered = unfiltered.filter(function pathFilter(fileName){			
			if (path.extname(fileName) === "."+extension){				
				//console.log(fileName);
				return fileName;
			}
		});
		//console.log(filtered);
		return callback(null,filtered);
	});	
}

module.exports = filterFiles;