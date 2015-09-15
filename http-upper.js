var http = require("http");
var map = require("through2-map");

function handleRequest(request, response){
	//code goes here
	console.log("request: " + request.method + " - " + request.url);
	if (request.method === "POST"){
		//got post event
		request.pipe(map(function(chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(response);
	}else{
		response.end();
	}
		
}

var server = http.createServer(handleRequest);
server.listen(process.argv[2]);