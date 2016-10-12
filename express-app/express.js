var express = require('express')

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.set('view engine', 'jade');

app.use(function(req, resp, next) {
	next();
})

app.get('/', function(req, res) {
	//res.send('hello');
	res.render('index', {
		title : 'Home'
	});
})

app.use('/foo', require('./foo-router'));

// function(req, res) {
// 	//res.send('hello');
// 	res.render('index', {
// 		title : 'Foo'
// 	});
// })
//inner function called middleware

app.listen(process.env.PORT || 8080);

