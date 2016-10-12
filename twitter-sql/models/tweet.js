var Sequelize = require('sequelize');

module.exports = function(db) {
	var Tweet = db.define('Tweet', {
		tweet: Sequelize.STRING
	}, {
		timestamps: false
	});

	return Tweet;
}