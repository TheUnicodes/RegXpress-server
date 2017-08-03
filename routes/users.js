var express = require('express');
var router = express.Router();
const queries = require('../db/queries')

router.post('/', function(req, res) {
  queries.joinRoom(req.body)
  .then(function(){
    res.json({
    message: "Joining room..."})
  })
});

router.delete('/:id', function(req, res){
  queries.leaveRoom(req.params.id)
  .then(function(){
    res.json({
      message: "Leaving room..."
    })
  })
})
//login or join -> post to usertable and join with room
//delete user from user table and from room.






module.exports = router;
