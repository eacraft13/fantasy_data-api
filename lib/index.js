var _       = require('lodash');
var express = require('express');
var r       = require('rethinkdb');


module.exports = function(config) {
    var app = express();

    app.get('/', function(req, res) {
        res.send('Hello World!');
    });

    return app;
};
