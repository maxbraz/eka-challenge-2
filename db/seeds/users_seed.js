const seedUsers = require('./helpers/seedUsers.js');

exports.seed = (knex, Promise) => (
  seedUsers
);
