exports.up = function (knex) {
  return knex.schema.createTable('cats', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('color').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('cats');
};
