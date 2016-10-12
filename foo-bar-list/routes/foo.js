var router = require('express').Router();
var db = require('../db/foo');
module.exports = router;

router.get('/', function(req, res, next) {
	res.render('list', { foos: db.list(), title: 'Foo-List'});
});

router.get('/new', function(req, res, next) {
	res.render('new', {title: 'New Foo'});
})

router.post('/', function(req, res, next) {
	db.insert(req.body);
	res.redirect('/foos');
	//res.send(req.body);
});

router.delete('/:id', function(req, res, next) {
	var foo = { id: req.params.id*1 };
	db.delete(foo);
	res.redirect('/foos');
})

router.get('/:id/edit', function(req, res, next) {
	var editing = db.getById(req.params.id*1);
	res.render('edit', {title: 'New Foo', foo: editing});
})

router.put('/:id', function(req, res, next) {
	var foo = req.body;
	foo.id = req.params.id*1;
	db.update(foo);
	res.redirect('/foo');
})