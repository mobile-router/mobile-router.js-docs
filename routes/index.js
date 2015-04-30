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

		var cloneFiles = files.concat();
		var historyFiles = [];
		var routerFiles = [];
		var dataFiles = [];

		var historyStr = 'M.history';
		var routerStr = 'M.router';
		var dataStr = 'data-';

		files.length = 0;
		
		cloneFiles.forEach(function(item) {
			if (item.substr(0, historyStr.length) === historyStr) {
				historyFiles.push(item);
			} else if (item.substr(0, routerStr.length) === routerStr) {
				routerFiles.push(item);
			} else if (item.substr(0, dataStr.length) === dataStr) {
				dataFiles.push(item);
			} else {
				files.push(item);
			}
		});

		files.push.apply(files, historyFiles);
		files.push.apply(files, routerFiles);
		files.push.apply(files, dataFiles);

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
