var express = require('express');
var amb_manager = require('../fake-amb-manager');

var app = module.exports = express();

var NOT_SET = '**NOT SET**';
var check_not_set = require('../validator');

app.get('/monitor', function (req, res) {
    var options = {
        channel: req.query.channel || NOT_SET,
        node_addr: req.query.node_addr || NOT_SET,
        relative_addr: req.query.relative_addr || NOT_SET,
        timestamp: parseInt(req.query.timestamp) || NOT_SET
    };
    check_not_set(options, function () {
        amb_manager.monitor(options, function (err, data) {
            if (err) {
                throw err;
                return;
            }
            res.json({ response : data });
        });
    });
});

app.get('/monitor/timingevent', function (req, res) {
    var options = {
        channel: req.query.channel || NOT_SET,
        node_addr: req.query.node_addr || NOT_SET,
        relative_addr: req.query.relative_addr || NOT_SET,
        timestamp: parseInt(req.query.timestamp) || NOT_SET,
        event_time: parseInt(req.query.event_time) || NOT_SET
    };
    check_not_set(options, function () {
        amb_manager.monitor_timing_event(options, function (err, data) {
            if (err) {
                throw err;
                return;
            }
            res.json({ response: data });
        });
    });
});

app.get('/monitor/next/timingevent', function (req, res) {
    var options = {
        channel: req.query.channel || NOT_SET,
        node_addr: req.query.node_addr || NOT_SET,
        relative_addr: req.query.relative_addr || NOT_SET,
        timestamp: parseInt(req.query.timestamp) || NOT_SET
    };
    check_not_set(options, function () {
        amb_manager.monitor_next_timing_event(options, function (err, data) {
            if (err) {
                throw err;
                return;
            }
            res.json({ response: data });
        });
    });
});
