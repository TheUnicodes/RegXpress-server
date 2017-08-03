
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('player', function(table){
    table.increments('id').primary();
    table.string('username');
    table.integer('score');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('player');
};
