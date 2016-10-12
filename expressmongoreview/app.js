var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/foo", function() {
	var fooSchema = mongoose.Schema({
		bar: String
	})

	var Foo = mongoose.Model("Foo", fooSchema);

	var f = new Foo({ bar: "bazz" + Math.random() })

	f.save()
		.then(function(_f) {
			console.log(_f)
		})
		.catch(function(err) {
			console.log(err);
		})

})