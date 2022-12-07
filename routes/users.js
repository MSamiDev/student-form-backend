var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user');
});

module.exports = router;
