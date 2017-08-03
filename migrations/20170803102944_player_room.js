
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_room', function(table){
    table.increments('id').primary();
    table.integer('player_id').references('player.id').unsigned().onDelete('cascade')
    table.integer('room_id').references('room.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('player_room')
};
