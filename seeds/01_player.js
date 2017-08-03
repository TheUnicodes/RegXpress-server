
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE player RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('player').insert([
        {username: 'matt', score: 500},
        {username: 'sean', score: 1000},
        {username: 'fahad', score: 999}
      ]);
    });
};
