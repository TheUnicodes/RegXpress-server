
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE room RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('room').insert([
        {name: 'Denver Developers', max_numplayers: 2},
        {name: 'Colorado Coders', max_numplayers: 4},
        {name: 'Galvanize Alumni', max_numplayers: 3},
        {name: 'Pittsburgh Programmers', max_numplayers: 2},
        {name: 'Hoboken Hackers', max_numplayers: 10},
        {name: 'Silicon Valley Slammers', max_numplayers: 8}
      ]);
    });
}
