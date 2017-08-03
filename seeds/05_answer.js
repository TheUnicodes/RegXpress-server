
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE answer RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('answer').insert([
        {content: 'regex', question_id: 1},
        {content: 'REGEX!!!!!', question_id: 2},
        {content: 'xtreme', question_id: 3}
      ]);
    });
};
