var r    = require('rethinkdb');
var Pool = require('generic-pool').Pool;

module.exports = function(options) {
    var pool = Pool({
        name: 'rethinkdb',
        create: function(callback) {
            return r.connect(options, callback);
        },
        destroy: function(conn) {
            conn.close();
        },
        max: 10,
        min: 2,
        idleTimeoutMillis: 30000,
        log: false
    });

    // acquire connection - callback function is called
    // once a resource becomes available
    pool.acquire(function(err, client) {
        if (err) {
        // handle error - this is generally the err from your
        // factory.create function  
        }
        else {
            client.query("select * from foo", [], function() {
                // return object back to pool
                pool.release(client);
            });
        }
    });
};
