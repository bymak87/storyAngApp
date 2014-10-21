var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
// var mailer       = require('express-mailer');

// ROUTES
// ==========================================================
var routes = require('./routes/index');

var app = express();


// EXPRESS-MAILER
// ==========================================================
// mailer.extend(app, {
//   from: 'no-reply@example.com',
//   host: 'smtp.gmail.com',
//   secureConnection: true,
//   port: 465, // port for secure SMTPkj
//   transportMethod: 'SMTP',
//   auth: {
//     user: process.env.STORY_GMAIL_USER,
//     pass: process.env.STORY_GMAIL_PASS
//   }
// });


// DB SETUP
// ==========================================================
// this is actually performed in model files

var Story = require('./app/models/story');

// VIEW ENGINE SETUP
// ==========================================================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace if (app.get('env') === 'development') {
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err, message: err.message });
});

module.exports = app;
