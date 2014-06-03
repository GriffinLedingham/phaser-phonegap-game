var http = require('http');
var express = require('express');
var app = express();
var path    = require('path');
app.use(express.static(path.join(__dirname, 'client')));
app.configure(function(){
  app.use(express.bodyParser());
});
var server = http.createServer(app);
var io = require('socket.io').listen(server); 
server.listen(3000);  
io.set('log level', 0);

io.sockets.on('connection', function (socket) {
    
});