const http = require('http'); //http -> node's core module
const listener = function(req, res){
    console.log("our server is working");
    res.writeHead(200);
    res.end("our server is live");
}

const simpleServer = http.createServer(listener);

simpleServer.listen(8080);

//url -> http://localhost:8080/