var express = require('express');
var config = require('./config/index');
var indexRoute = require('./routes/index');
var apisRoute = require('./routes/apis');

var port = process.env.PROT || config.build.port;
var app = express();

app.use(indexRoute);
app.use('/api', apisRoute);
app.use(express.static('./dist'));

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
});
