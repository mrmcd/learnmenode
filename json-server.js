var http = require("http");
var url = require("url");

function handleRequest(request, response){
	//code goes here
	var parsed = url.parse(request.url,true)
	if (parsed.pathname === "/api/parsetime") {		
		parsetimeFunction(parsed,response);
	}else if (parsed.pathname === "/api/unixtime") {
		console.log("unixtime");
		unixtimeFunction(parsed,response);
	}else{
		response.writeHead(404);
		response.end("Invalid Endpoint");
	}
}

function loadDate(parsed){
	console.log(parsed.query.iso);
	return new Date(parsed.query.iso);
}

function parsetimeFunction(parsed, response){
	response.writeHead(200, { 'Content-Type': 'application/json' })
	var date = loadDate(parsed)
	var respData = { "hour" : date.getHours(),
					 "minute" : date.getMinutes(),
					 "second" : date.getSeconds()					
				   };
    response.end(JSON.stringify(respData));				   
}

function unixtimeFunction(parsed, response){
	response.writeHead(200, { 'Content-Type': 'application/json' })
	var date = loadDate(parsed)
	var respData = { "unixtime" : date.getTime() };
	response.end(JSON.stringify(respData));
}

var server = http.createServer(handleRequest);
server.listen(process.argv[2]);