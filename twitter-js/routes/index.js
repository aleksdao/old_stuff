// module.exports = function(io) {


// 	var express = require('express');
// 	var router = express.Router();
// 	// could use one line instead: var router = require('express').Router();
// 	var tweetBank = require('../tweets');
// 	var bodyParser = require('body-parser');

// 	router.use(bodyParser.urlencoded({ extended: false }));
// 	router.use(bodyParser.json());


// 	router.get('/', function (req, res) {
// 	  var tweets = tweetBank.list();
// 	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
// 	});

// 	router.get('/users/:name', function(req, res) {
// 	  var name = req.params.name;
// 	  var tweets = tweetBank.find( {name: name} );
// 	  console.log(name);
// 	  res.render( 'index', { title: 'Twitter.js - Posts by '+name, user: name, tweets: tweets, showForm: true } );
// 	});

// 	router.get('/tweets/:id', function(req, res) {
// 		var id = Number(req.params.id);
// 		var tweets = tweetBank.find( {id: id} );
// 	  	res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: false } );

// 	});

// 	router.post('/tweets', function(req, res) {
	  
// 		var name = req.body.name;
//   	var text = req.body.text;
// 	  //console.log(name, text);
//   	var id = tweetBank.add(name, text);
  	
//   	//we emit the new_tweet event to indicate a new tweet has been added. because socket.io 
//   	//listens for new_tweet event, it then dynamically adds new tweet to page. no need for
//   	//redirect to homepage
//   	io.sockets.emit('new_tweet', { name: name, text: text, id: id });
//   	//redirect here so that the user posting doesn't 
//   	res.redirect('/');
// 	});

// 	return router;
// }

'use strict';
var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var myio = require('../utils/myio');
var swig = require('swig');
var path = require('path'); 

module.exports = router; 

  // a reusable function
  function respondWithAllTweets (req, res, next){
    var allTheTweets = tweetBank.list();
    res.render('index', {
      title: 'Twitter.js',
      tweets: allTheTweets,
      showForm: true
    });
  }

  // here we basically treet the root view and tweets view as identical
  router.get('/', respondWithAllTweets);
  router.get('/tweets', respondWithAllTweets);

  // single-user page
  router.get('/users/:username', function(req, res, next){
    var tweetsForName = tweetBank.find({ name: req.params.username });
    res.render('index', {
      title: 'Twitter.js',
      tweets: tweetsForName,
      showForm: true,
      username: req.params.username
    });
  });

  // single-tweet page
  router.get('/tweets/:id', function(req, res, next){
    var tweetsWithThatId = tweetBank.find({ id: Number(req.params.id) });
    res.render('index', {
      title: 'Twitter.js',
      tweets: tweetsWithThatId // an array of only one element ;-)
    });
  });

  // create a new tweet
  router.post('/tweets', function(req, res, next){
    var tweet = tweetBank.add(req.body.name, req.body.text);
    var tweetHtml = swig.renderFile(
        path.join(__dirname, '../views/tweet.html'),
        { tweet : tweet },
        function(err, data){
          myio.emit('new_tweet', data);
        });

    res.redirect('/');
  });

  // // replaced this hard-coded route with general static routing in app.js
  // router.get('/stylesheets/style.css', function(req, res, next){
  //   res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
  // });