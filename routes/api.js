var express = require('express');
var marked = require('marked');
var fs = require('fs');
var router = express.Router();

/* api */
router.get('/:name', function(req, res, next) {
	
	res.send(marked(fs.readFileSync('views/apis/' + req.params.name + '.md', 'utf8')));

});

module.exports = router;