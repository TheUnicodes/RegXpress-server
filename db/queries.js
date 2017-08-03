const knex = require('./knex')

module.exports = {
  joinRoom: function(user){
    return knex('player').insert(user)
  },

  getAllRooms: function(){
    return knex('room');
  },

  getOneRoom: function(id){
    return knex('room').where('id', id).first();
  },

  getQuestions: function(){
    return knex('question')
    .join('answer', 'question_id', 'question.id')
    .select('question.content as question', 'answer.content as answer')
  }
}
