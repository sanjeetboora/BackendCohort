const http = require('http'); //http -> node's core module
const listener = function(req, res){
    console.log("our server is working");
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(`{"message" : "This is a JSON obj from our server"}`);
}

const simpleServer = http.createServer(listener);

simpleServer.listen(8080);

//url -> http://localhost:8080/