
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('room', function(table){
    table.increments('id').primary();
    table.string('name');
    table.integer('max_numplayers');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableifExists('room');
};
