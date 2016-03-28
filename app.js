var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');

var app = express();
var router = express.Router();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/viutifyAPI', router);

connection.init();
routes.configure(router);

var server = app.listen(8000, function() {
 console.log('Magic is happening on port ' + server.address().port);
});

