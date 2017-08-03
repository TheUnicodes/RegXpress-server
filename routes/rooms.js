const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res) {
  queries.getAllRooms().then(rooms => {
    res.json(rooms)
  });
});

router.get('/:id', function(req, res) {
  queries.getOneRoom(req.params.id).then(room => {
    res.json(room)
  })
});


module.exports = router;
