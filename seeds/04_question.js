
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE question RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('question').insert([
      {content: 'Gandalf can\'t start his day without saying \'luka\' exactly two times.  Please write a regular expression to build this pattern.', difficulty: 'easy'},
      {content: 'Some paineter wants to mimic Picasso\'s square painting style... He can draw a squre by using directions (left, right, up, down), but with one length value, or else it won\'t be a square. Please write a regular expression to build this pattern.  Note: Start from the top-left. Every time he draws toward a direction the pen will be moving 1cm.  Suppose that: left = l, right = r, up = u, down = d. length of each side = 2cm', difficulty: 'medium'},
      {content: 'Rocky Balboa should start his day by eating at least one egg, then drinks exactly 2 cups of milk.  Please write a regular expression to build this pattern.  Suppose that:  egg = e, milk = m', difficulty: 'hard'},
      {content: 'A game developer wants to create a cheat-code in his console game, to create infinite coins. He is thinking of doing so by typing the following buttons repeatedly: left, left, left (down and x). Note that (down and x) are optional and if used will make the coin value multiplied by 4.  Please write a regular expression to build this pattern. Note: this cheat is optional, as not everyone has access to it.'},
      {content: 'There should be at least a one space distance between fire and gas. Please write a regular expression to build this pattern.'},
      {content: 'The wizard Zoola can fool his folk by saying wan, or man, or van, or tan, or man.  Please write a regular expression to build this pattern.'}
      ]);
    });
};
