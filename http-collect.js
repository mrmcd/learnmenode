var http = require("http");

http.get(process.argv[2],function(response) {
	response.setEncoding("utf8");
	response.on("data",dataPost);
	response.on("end",dataEnd);
});


var collectionString = "";

function dataPost(data){
	collectionString += data;
}

function dataEnd(data){
	console.log(collectionString.length);
	console.log(collectionString);
}