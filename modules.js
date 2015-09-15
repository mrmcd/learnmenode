var filesmodule = require("./files-module.js")

filesmodule(process.argv[2],process.argv[3],function(err, data){
	if (err){
		console.log("There was an error: " + err);
		return;
	}else{
		//console.log(data);
		for (var i = 0; i < data.length; i++){
			console.log(data[i]);
		}
	}
});

