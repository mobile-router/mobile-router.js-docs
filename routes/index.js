var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

// 获取 files
router.use(function(req, res, next) {
	var files = [];
	res.locals.files = files;
	fs.readdir(path.join(__dirname, '../views/apis'), function(err, _files) {
		if (err) return next(err);
		_files.forEach(function(fileName) {
			fileName = fileName.replace('.md', '');
			if (fileName !== 'index') {
				files.push(fileName);
			}
		});
		files.sort();
		next();
	});
});

/* index */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* docs */
router.get('/:id', function(req, res, next) {
  res.render('index');
});

module.exports = router;