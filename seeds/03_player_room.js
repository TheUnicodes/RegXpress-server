
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE player_room RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('player_room').insert([
        {player_id: 1, room_id: 1},
        {player_id: 2, room_id: 1},
        {player_id: 3, room_id: 2}
      ]);
    });
};
