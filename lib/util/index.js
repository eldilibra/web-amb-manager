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

app.get('/util/channelcount', function (req, res) {
    amb_manager.channel(function (err, channel) {
        if (err) {
            throw err;
            return;
        }
        res.json(channel);
    });
});

app.get('/util/reset', function (req, res) {
    var options = {
        channel: req.query.channel || not_set,
        timestamp: parseInt(req.query.timestamp) || not_set
    };
    check_not_set(options, function () {
        amb_manager.reset(options, function (err) {
            if (err) {
                throw err;
                return;
            }
            res.send('channel', options.channel, 'reset');
        });
    });
});

app.get('/util/serialnumber', function (req, res) {
    var options = {
        channel: req.query.channel || not_set,
        node_addr: req.query.node_addr || not_set,
        timestamp: parseInt(req.query.timestamp) || not_set
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
        channel: req.query.channel || not_set,
        timestamp: parseInt(req.query.timestamp) || not_set
    };
    check_not_set(options, function () {
        amb_manager.get_nodes(options, function (err, node_list) {
            if (err) {
                throw err;
                return;
            }
            res.json(node_list);
        });
    });
});

app.get('/util/flush', function (req, res) {
    var options = {
        channel: req.query.channel || not_set,
        flush_time: parseInt(req.query.flush_time) || not_set,
        timestamp: parseInt(req.query.timestamp) || not_set
    };
    check_not_set(options, function () {
        amb_manager.flush(options, function (err) {
            if (err) {
                throw err;
                return;
            }
            res.send('channel', options.channel, 'flushed');
        });
    });
});
