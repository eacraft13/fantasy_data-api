var _               = require('lodash');
var express         = require('express');
var playerGameStats = require('./player_game_stats');
var r               = require('rethinkdb');



module.exports = function(config) {
    var app    = express();
    var router = express.Router();



    // Rethinkdb connection
    app.use(function(req, res, next) {
        r.connect(config.rethinkdb, function(err, conn) {
            if (err) throw err;
            req.conn = conn;
            next();
        });
    });



    // Player game stats
    router
    .get('/player-game-stats', playerGameStats.show);



    app.use('/v1', router);
    app.use(function(req, res, next) {
        if (req.conn) req.conn.close();
        next();
    });

    return app;
};
