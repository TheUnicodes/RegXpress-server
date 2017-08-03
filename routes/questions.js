var express = require('express');
var router = express.Router();
const queries = require('../db/queries')

/* GET users listing. */
router.get('/', function(req, res) {
  queries.getQuestions().then(questions => {
    res.json(questions)
  })
});



module.exports = router;
