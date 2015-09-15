//http collect modules
http = require("http");

function collectHttp(url, endCallback){
	
	var output = "";
	
	function dataPost(data){
		output += data;
	}

	function dataEnd(data){
		endCallback(url,output);
	}
	
	http.get(url,function(response) {
	response.setEncoding("utf8");
	response.on("data",dataPost);
	response.on("end",dataEnd);
});
}



module.exports = collectHttp;