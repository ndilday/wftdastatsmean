var express = require('express');
var app = express();
var routes = require('./app/routes');
//var db = require('./config/db');

var port = process.env.PORT || 8080;

// connect to our mongoDB
// mongoose.connect(db.url);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/api', routes);

// start web service
app.listen(port);
console.log('Server running at http://localhost:' + port);

// expose web service
exports = module.exports = app;  