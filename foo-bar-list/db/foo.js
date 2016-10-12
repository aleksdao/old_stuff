var foos = [];

module.exports = {
	list: function() {
		return foos;
	},
	getById: function(id) {
		return foos.filter(function(f) {
			return f.id === id
		})[0];
	},
	insert: function(foo) {
		foo.id = Math.floor(Math.random() * 1000);
		foos.push(foo);
		return foo;
	},
	update: function(foo) {
		var toUpdate = this.getById(foo.id);
		toUpdate.text = foo.text;
	},
	delete: function(foo) {
		var toDelete = this.getById(foo.id);
		var index = foos.indexOf(toDelete);
		foos.splice(index, 1);
	}
};