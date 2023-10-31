const http = require("http");
const os = require("os");


console.log("Kubia server starting");

var server = http.createServer((req, res)=>{
    console.log(`Recieved a request from ${req.socket.remoteAddress}`);
    res.writeHead(200);
    res.end(`You've hit ${os.hostname()}\n`);
});

server.listen(8080);