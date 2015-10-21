module.exports = function() {

	function genericResponse(req, res) {

		res.type('.html');
		res.write('<h2>Request processed.</h2>');
		res.write('<ul>');
		res.write('<li>' + req.originalUrl + '</li>');
		res.write('</ul>');
		res.end();
	}

	return {
		genericResponse: genericResponse
	}
};
