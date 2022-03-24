//Load HTTP Package
var http=require('http');

var f=20;
var m=30;
var a=f+m;
var msg=`F Value is ${f} <br/> B Value is ${m} <br/> Addition is  ${a}`;

//create Server Code
http.createServer(function(req,res){
    //print Message on Browser
    
    res.writeHead(200,{'content-type':'text/html'})
    res.end(msg);
}).listen(3000);

console.log("Server is Started http://127.0.0.1:3000");