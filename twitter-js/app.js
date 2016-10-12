var express = require('express');
var swig = require('swig');
var app = express();
var routes = require('./routes/');
var socketio = require('socket.io');

var server = app.listen(8080);
var io = socketio.listen(server);

app.use('/', routes(io));

swig.setDefaults({ cache: false });

app.use(express.static('public'));


app.engine("html", require('swig').renderFile);
app.set("view engine", "html");
app.set(__dirname + "./views/index.html")





/*
var express = require('express');
var swig = require('swig');

var app = express();

app.listen(process.env.PORT || 8080);
app.use(express.static('public'));
swig.setDefaults({ cache: false });

*/