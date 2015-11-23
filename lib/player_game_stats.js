var _ = require('lodash');
var r = require('rethinkdb');



module.exports = {

    show: function(req, res) {
        r.table('player_game_stats')
        //.filter(req.query.params)
        .run(req.conn, function(err, cursor) {
            if (err) throw err;
            cursor.toArray(function(err, results) {
                if (err) throw err;
                res.send(results);
            });
        });
    }


};
