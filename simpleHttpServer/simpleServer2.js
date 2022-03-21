const http = require('http'); //http -> node's core module
const listener = function(req, res){
    res.setHeader('Content-Type', 'text/html');
    console.log("our server is working");
    res.writeHead(200);
    
    switch(req.url){
        case "/":
            res.end("Http server response: Home page");
            break;
        case "/1":
            res.end("Http server response: Student 1");
            break;
        case "/2":
            res.end("Http server response: Student 2");
            break;
        case "/name":
            res.end("Http server response: Arnab");
            break;
        case "/company":
            res.end("Http server response: MNC");
            break;
        default:
            res.end("<h1>Http server response: Incorrect endpoint! <a href ='http://localhost:8080/name'>Go here</a></h1>");
    }
}

const simpleServer = http.createServer(listener);

simpleServer.listen(8080);

//url -> http://localhost:8080/