var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port =  3001;

server.use(middlewares);
server.use(router);

server.listen(port);


var indexRouter = require('./routes/index');
var krakenRouter = require('./routes/kraken');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/kraken', krakenRouter);


app.listen( 9999, function () {
  console.log('listening on port 9999!');
});


module.exports = app;
