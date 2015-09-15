collector = require("./http-collector.js");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var data1, data2, data3;
var loadCount = 0;


function loadFinished(){
	loadCount++;
	if (loadCount >= 3){
		console.log(data1);
		console.log(data2);
		console.log(data3);
	}
}


collector(url1,function ( url, output ) {
	data1 = output;
	loadFinished();
});

collector(url2,function ( url, output ) {
	data2 = output;
	loadFinished();
});

collector(url3,function ( url, output ) {
	data3 = output;
	loadFinished();
});




