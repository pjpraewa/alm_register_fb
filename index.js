var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.get('/regispopup', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


// server = app.listen(8084,async function () {
  
//     var host = server.address().address;
//     // var port = server.address().port;
//     var port = process.env.PORT
//     console.log("Host "+ host+ ":"+port)
//  });

app.listen(process.env.PORT || 8084, function(){
    console.log('Your node js server is running');
});
    