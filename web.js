var express = require('express'),
		fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello World 2!');
	var data = fs.readFileSync('index.html');
	response.send(data.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
