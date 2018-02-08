var express = require('express');
var router = express.Router();
var mysqlaccess = require('../common/mysqlaccess');

router.get('/shorts', function(req, res) {
  res.json({
    err_code: 0,
    err_msg: '',
    data: [1, 2, 3]
  });
});

module.exports = router;
