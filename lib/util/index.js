var express = require('express');
var amb_manager = require('../fake-amb-manager');

var app = module.exports = express();

var NOT_SET = '**NOT SET**';
var check_not_set = require('../validator');

app.get('/util/channelcount', function (req, res) {
    amb_manager.channel_count(function (err, channel) {
        if (err) {
            throw err;
            return;
        }
        res.json({ response: parseInt(channel) });
    });
});

app.get('/util/reset', function (req, res) {
    var options = {
        channel: req.query.channel || NOT_SET,
        timestamp: parseInt(req.query.timestamp) || NOT_SET
    };
    check_not_set(options, function () {
        amb_manager.reset(options, function (err) {
            if (err) {
                throw err;
                return;
            }
            res.send('channel ' + options.channel +' reset');
        });
    });
});

app.get('/util/serialnumber', function (req, res) {
    var options = {
        channel: req.query.channel || NOT_SET,
        node_addr: req.query.node_addr || NOT_SET,
        timestamp: parseInt(req.query.timestamp) || NOT_SET
    };
    check_not_set(options, function () {
        amb_manager.find_serial_num(options, function (err, serial_number) {
            if (err) {
                throw err;
                return;
            }
            res.json(serial_number);
        });
    });
});

app.get('/util/nodes', function (req, res) {
    var options = {
        channel: req.query.channel || NOT_SET,
        timestamp: parseInt(req.query.timestamp) || NOT_SET
    };
    check_not_set(options, function () {
        amb_manager.get_nodes(options, function (err, node_list) {
            if (err) {
                throw err;
                return;
            }
            res.json({ response : node_list });
        });
    });
});

app.get('/util/flush', function (req, res) {
    var options = {
        channel: req.query.channel || NOT_SET,
        flush_time: parseInt(req.query.flush_time) || NOT_SET,
        timestamp: parseInt(req.query.timestamp) || NOT_SET
    };
    check_not_set(options, function () {
        amb_manager.flush(options, function (err) {
            if (err) {
                throw err;
                return;
            }
            res.send('channel ' + options.channel + ' flushed');
        });
    });
});
