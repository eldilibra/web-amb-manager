var express = require('express');
var http = require('http');
var monitor = require('./lib/monitor');

var app = express();
app.use(monitor);

app.set('port', process.env.port || 3000);
app.use(app.router);

http.createServer(app.listen(app.get('port'), function () {
  console.log('Web AMB Manager listening on', app.get('port'));
});
