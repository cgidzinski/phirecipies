// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8082;
var morgan = require('morgan');
// configuration ===============================================================
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// routes ======================================================================
require('./routes/root.js')(app);
require('./routes/404.js')(app);
// launch ======================================================================
app.listen(port);
console.log('Server Started On Port: ' + port);

