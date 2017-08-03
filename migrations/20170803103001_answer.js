
exports.up = function(knex, Promise) {
  return knex.schema.createTable('answer', function(table){
    table.increments('id').primary();
    table.text('content');
    table.integer('question_id').references('question.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('answer')
};
