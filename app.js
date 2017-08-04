const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const users = require('./routes/users');
const rooms = require('./routes/rooms');
const questions = require('./routes/questions');
const sockets = require('./sockets');
const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);

sockets(io);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use('/users', users);
app.use('/rooms', rooms);
app.use('/questions', questions)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || res.statusCode || 500);
  res.json({message: err.message, error:req.app.get('env') === 'development' ? err : {} });
});

module.exports = {
  app,
  server
}
