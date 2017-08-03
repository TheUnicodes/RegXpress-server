
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE question RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('question').insert([
      {content: 'There is a room...', difficulty: 'easy'},
      {content: 'In the movie the Matrix...', difficulty: 'medium'},
      {content: 'Deep in the ocean...', difficulty: 'hard'}
      ]);
    });
};
