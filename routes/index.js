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

		var historyIndex = files.indexOf('M.history');
		var routerIndex = files.indexOf('M.router', historyIndex);
		var historyLastIndex = findLastIndex(files, 'M.history');
		var routerLastIndex = findLastIndex(files, 'M.router', historyIndex);

		var betweenHisAndRou = files.slice(historyLastIndex + 1, routerIndex);
		var afterRou = files.slice(routerLastIndex + 1);
		betweenHisAndRou.push.apply(betweenHisAndRou, afterRou);

		var args = betweenHisAndRou;
		args.unshift(0);
		args.unshift(historyIndex);

		// 移除 history 之后 router 之前的
		files.splice(historyLastIndex + 1, routerIndex - historyLastIndex - 1);
		routerLastIndex -= (routerIndex - historyLastIndex - 1);
		// 移除 router 之后 的
		files.splice(routerLastIndex + 1, files.length);
		// 插入之前的
		files.splice.apply(files, args);

		var dataIndex = files.indexOf('data-');
		files.push(files.splice(dataIndex, 1)[0]);
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

function findLastIndex(array, pattern, startIndex) {
	var index = -1;
	if (startIndex == undefined) startIndex = 0;
	var len = pattern.length;
	array.forEach(function(item, i) {
		if (i >= startIndex) {
			var next = item[i + 1];
			if (item.substr(0, len) === pattern && (!next || next.substr(0, len) !== pattern)) {
				index = i;
			}
		}
	});
	return index;
}