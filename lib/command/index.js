var express = require('express');
var amb_manager = require('amb-manager');

var app = module.exports = express();

var not_set = '**NOT SET**';
function check_not_set (optionsObj, callback) {
    for (option in optionsObj) {
        if (optionsObj[option] === '**NOT SET**') {
            throw new Error('The', option, 'parameter was not set');
            return;
        }
    }
    callback();
}

app.get('/command', function (req, res) {
    var options = {
        channel: req.query.channel,
        node_addr: req.query.node_addr,
        relative_addr: req.query.relative_addr,
        command_data: req.query.command_data,
        timestamp: parseInt(req.query.timestamp),
    };
    check_not_set(options, function () {
        amb_manager.monitor(options, function (err, data) {
            if (err) {
                throw err;
                return;
            }
            res.json(data);
        });
    });
});

app.get('/command/timingevent', function (req, res) {
    var options = {
        channel: req.query.channel,
        node_addr: req.query.node_addr,
        relative_addr: req.query.relative_addr,
        command_data: req.query.command_data,
        timestamp: parseInt(req.query.timestamp),
        event_time: parseInt(req.query.event_time)
    };
    check_not_set(options, function () {
        amb_manager.monitor_timing_event(options, function (err, data) {
            if (err) {
                throw err;
                return;
            }
            res.json(data);
        });
    });
});

app.get('/command/next/timingevent', function (req, res) {
    var options = {
        channel: req.query.channel,
        node_addr: req.query.node_addr,
        relative_addr: req.query.relative_addr,
        command_data: req.query.command_data,
        timestamp: parseInt(req.query.timestamp)
    };
    check_not_set(options, function () {
        amb_manager.monitor_next_timing_event(options, function (err, data) {
            if (err) {
                throw err;
                return;
            }
            res.json(data);
        });
    });
});
