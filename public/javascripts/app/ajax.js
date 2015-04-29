define(function() {

	var ajax = {

		get: function(url, cb) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onreadystatechange = function callback(_, isAbort) {
				var responses;
				var status, statusText;
				try {
					if (callback && (isAbort || xhr.readyState === 4)) {
						callback = undefined;
						if (isAbort) {
							if (xhr.readyState !== 4) {
								xhr.abort();
							}
						} else {
							responses = {};
							if (typeof xhr.responseText == 'string') {
								responses.text = xhr.responseText;
							}
							statusText = '';
							try {
								statusText = xhr.statusText;
							} catch(e) {
								statusText = '';
							}
							status = xhr.status;
							if (!status) {
								xhr.status = responses.text ? 200 : 400;
							} else if (xhr.status == 1223) {
								status = 204;
							}
						}
					}
				} catch(e) {
					if (!isAbort) cb('aborted', -1);
				}
				if (responses) {
					cb(responses.text, status, statusText);
				}
			};
			xhr.send(null);
		}

	};

	return ajax;

});