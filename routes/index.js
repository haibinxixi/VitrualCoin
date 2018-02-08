var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  req.url = '/index.html';
  next();
});

module.exports = router;
