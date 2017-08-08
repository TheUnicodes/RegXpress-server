
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE answer RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('answer').insert([
        {content: '(luka){2}', question_id: 1},
        {content: 'r{2}d{2}l{2}u{2}', question_id: 2},
        {content: '[e]+m{2}', question_id: 3},
        {content: '(leftleftleft(downx)*)*', question_id: 4},
        {content: '(fire)[]+(gas)', question_id: 5},
        {content: '[w,m,v,t]an', question_id: 6}
      ]);
    });
};
