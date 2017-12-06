// todo if there is time to deploy: add in (require('../knexfile')) after "require('knex')"

const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'eka',
    user: 'Max',
    password: '',
    host: 'localhost',
    port: 5432
  }
});

const db = require('bookshelf')(knex);

db.plugin('registry');

module.exports = db;