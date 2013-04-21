var express = require('express');
var amb_manager = require('amb-manager');
var querystring = require('querystring');

var app = module.exports = express();

app.get('/monitor', function () {
    var options = {
        channel: req.query.channel,
        node_addr: req.query.node_addr,
        relative_addr: req.query.relative_addr,
        timestamp: parseInt(req.query.timestamp)
    };
    amb_manager.monitor(options, function (err, data) {
        res.json(data);
    });
});

app.get('/monitor/timingevent', function () {
    var options = {
        channel: req.query.channel,
        node_addr: req.query.node_addr,
        relative_addr: req.query.relative_addr,
        timestamp: parseInt(req.query.timestamp)
    };
    amb_manager.monitor_timing_event(options, function (err, data) {
        res.json(data);
    });
});

app.get('/monitor/next/timingevent', function () {
    var options = {
        channel: req.query.channel,
        node_addr: req.query.node_addr,
        relative_addr: req.query.relative_addr,
        timestamp: parseInt(req.query.timestamp)
    };
    amb_manager.monitor_next_timing_event(options, function (err, data) {
        res.json(data);
    });
});
