const knex = require('./knex')

module.exports = {
  joinRoom: function(info){
    let user = info.username
    return knex('player').insert({username: user}, 'id')
    .then(function(result){
      return knex('player_room').insert({player_id: result[0], room_id: info.room_id})
    })
  },

  leaveRoom: function(id){
    return knex('player_room').where('player_id', id).del()
    .then(function(){
      return knex('player').where('id', id).del()
    })
  },

  getAllRooms: function(){
    return knex('room');
  },

  getOneRoom: function(id){
    return knex('room').where('id', id).first();
  },

  createRoom: function(room){
    return knex('room').insert(room).returning('*');
  },

  getQuestions: function(){
    return knex('question')
    .join('answer', 'question_id', 'question.id')
    .select('question.content as question', 'answer.content as answer')
  }
}
