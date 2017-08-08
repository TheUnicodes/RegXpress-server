
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE question RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('question').insert([
      {content: 'Gandalf can\'t start his day without saying \'luka\' exactly two times.  Please write a regular expression to build this pattern.', difficulty: 'easy'},
      {content: 'Some painter wants to mimic Picasso\'s square painting style... He can draw a square by using directions (left, right, up, down), but with one length value, or else it won\'t be a square. Please write a regular expression to build this pattern.  Note: Start from the top-left. Every time he draws toward a direction the pen will be moving 1cm.  Suppose that: left = l, right = r, up = u, down = d. length of each side = 2cm', difficulty: 'medium'},
      {content: 'Rocky Balboa should start his day by eating at least one egg, then drinks exactly 2 cups of milk.  Please write a regular expression to build this pattern.  Suppose that:  egg = e, milk = m', difficulty: 'hard'},
      {content: 'A game developer wants to create a cheat-code in his console game, to create infinite coins. He is thinking of doing so by typing the following buttons repeatedly: left, left, left (down and x). Note that (down and x) are optional and if used will make the coin\'s value multiplied by 4.  Please write a regular expression to build this pattern. Note: this cheat is optional, as not everyone has access to it.'},
      {content: 'There should be at least a one space distance between fire and gas. Please write a regular expression to build this pattern.'},
      {content: 'The wizard Zoola can fool his folk by saying wan, or man, or van, or tan.  Please write a regular expression to build this pattern.'},
      {content: 'A story should begin with \'Once upon a time\' then a space, then an infinite amount of text, but at least one character. Note: there can be more than once space between each word anywhere in the story. Please write a regular expression to build this pattern.'},
      {content: 'In a programming language called YUMMI, in order to create an integer you have to type \'var\', followed by the varaible name, then \':\', then \'integer\', then \'=\', then the value of the variable which can be 1 to 5 digits in length. The expression needs to terminate with a ;. Note: There needs to be at least one space between var and the varaible name, there can be between 0 and infinte space between the varaible name and the colon, the colon and \'integer\', \'integer\' and \'=\', \'=\' and the value, and the value and the semicolon. Example: var v:integer = 12345'}
      ]);
    });
};
