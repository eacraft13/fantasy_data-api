var _ = require('lodash');
var r = require('rethinkdb');



module.exports = {

    show: function(req, res) {
        var filter = {};
        if (req.query.week)
            filter = _.merge(filter, { 'Week': +req.query.week });
        if (req.query.team)
            filter = _.merge(filter, { 'Team': +req.query.team });

        r.table('player_game_stats')
        .filter(filter)
        .run(req.conn, function(err, cursor) {
            if (err) throw err;
            cursor.toArray(function(err, results) {
                if (err) throw err;
                res.send(results);
            });
        });
    }

};
