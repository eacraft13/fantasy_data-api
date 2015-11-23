global.__base = __dirname + '/';

var _ = require('lodash');

// TODO: add clustering here (require('cluster'))

var config = {
    app: {},
    //app:       _.merge(require('./config/app') || {},       require('./secrets/app')),
    express: {},
    //express:   _.merge(require('./config/express') || {},   require('./secrets/express')),
    //rethinkdb: _.merge(require('./config/rethinkdb') || {}, require('./secrets/rethinkdb'))
    rethinkdb: require('./config/rethinkdb')
};

var app = require('./lib/index')(config);
app.listen(config.app.port || 3000);
