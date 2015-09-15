var net = require("net");

function zeroFill(value){
	if (value < 10){
		return "0"+value;
	}else{
		return ""+value;
	}
}

function handleConnection(socket){
	var date = new Date();
	var dateString = date.getFullYear() + "-" + zeroFill(date.getMonth()+1) + "-" + zeroFill(date.getDate()) + " " + zeroFill(date.getHours()) + ":" + zeroFill(date.getMinutes());
	socket.write(dateString+"\n");
	socket.end();
}







var server = net.createServer(handleConnection);
server.listen(process.argv[2]);