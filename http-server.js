var http = require("http");
var fs = require("fs");


function handleRequest(request, response){
	response.writeHead(200, { "content-type" : "text/plain" } );
	var source = fs.createReadStream(process.argv[3]);
	source.pipe(response);
}

var server = http.createServer(handleRequest);
server.listen(process.argv[2]);