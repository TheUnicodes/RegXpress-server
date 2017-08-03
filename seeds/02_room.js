
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE room RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('room').insert([
        {name: 'Coders', max_numplayers: 2},
        {name: 'Developers', max_numplayers: 4},
        {name: 'Hackers', max_numplayers: 3},
        {name: 'CJ\'s disciples'}
      ]);
    });
}
