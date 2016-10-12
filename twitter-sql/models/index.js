var Sequelize = require("sequelize");

var twitterjsDB = new Sequelize('twitterjs', 'root', null, {
	dialect: "mysql",
	port: 3306,
});

twitterjsDB
	.authenticate()
	.catch(function(err) {
		console.log("Unable to connect to the database:", err);
	})
	.then(function() {
		console.log('Connection has been established successfully.');
	});

	var Tweet = require('./tweet')(twitterjsDB);
	var User = require('./user')(twitterjsDB);

	User.hasMany(Tweet);
	Tweet.belongsTo(User);

	module.exports = {
		User: User,
		Tweet: Tweet
	};

	// User.findOne()
	// .then(function(user) {
	// 	console.log(user);
	// })

	// User.findOne()
	// .then(function(user) {
	// 	console.log(user.name);
	// })

// 	User.findOne().then(function (user) {
//     console.log(user.dataValues);
// });

User.findOne().then(function (user) {
    return user.getTweets();
})
.then(function (tweets) {
    JSON.stringify(tweets); // another way of just logging the plain old values
});

User.findAll({ include: [ Tweet ] }).then(function(users) {
	console.log(JSON.stringify(users));
})