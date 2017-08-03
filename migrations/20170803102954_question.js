
exports.up = function(knex, Promise) {
  return knex.schema.createTable('question', function(table){
    table.increments('id').primary();
    table.text('content')
    table.string('difficulty')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('question')
};
