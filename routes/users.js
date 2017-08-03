var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  queries.joinRoom(req.body)
});


//login or join -> post to usertable and join with room
//delete user from user table and from room.






module.exports = router;
