var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile('index.html', {'root': './'});
});
app.use('/build', express.static(__dirname));

http.listen(3000, function(){
    console.log('listening on *:3000');
});
