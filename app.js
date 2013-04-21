var express = require('express');
var http = require('http');
var util = require('./lib/util');
var monitor = require('./lib/monitor');
var command = require('./lib/command');
var error_handler = require('./lib/error-handler');

var app = express();
app.use(util);
app.use(monitor);
app.use(command);

app.set('port', process.env.port || 3000);
app.use(app.router);
app.use(error_handler);

http.createServer(app.listen(app.get('port'), function () {
    console.log('Web AMB Manager listening on', app.get('port'));
}));
