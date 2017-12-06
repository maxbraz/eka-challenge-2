exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTableIfNotExists('profiles', (table) => {
      table.increments('id').unsigned().primary();
      table.string('username', 100).nullable();
      table.string('password', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('firstName', 100).nullable();
      table.string('lastName', 100).nullable();
      table.string('phoneNumber', 100).nullable();
      table.string('street', 100).nullable();
      table.string('city', 100).nullable();
      table.string('state', 100).nullable();
      table.string('zip', 100).nullable();
    })
  ])
);

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('profiles'),
  ])
);

