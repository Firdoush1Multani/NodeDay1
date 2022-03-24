//Load HTTP Package
var http=require('http');

//create Server Code
http.createServer(function(req,res){
    //print Message on Browser
    res.end("<h1> Welcome To Node Js</h1>");
}).listen(3000);

console.log("Server is Started http://127.0.0.1:3000");