var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Prestoo Magico!');
});

app.listen(process.env.PORT || 5050);

module.exports = app;
