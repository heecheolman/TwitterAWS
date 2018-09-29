const knex = require('knex')({
    client: 'pg',
    version: '10.4',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'twitter',
    },
});

module.exports = knex;
