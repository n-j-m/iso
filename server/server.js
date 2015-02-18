'use strict';

// Install `6to5` hook
require('6to5/register');

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');

const router = require('./server.router');
const apiRouter = require('./api/router');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beerlocker');

app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: 'index'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'wookchuckschucking'
}));
app.use(passport.initialize());
app.use(passport.session());

require('./api/config').initPassport(passport);

app.use('/assets/img', express.static(path.resolve(__dirname + '/../dist/img/')));
app.use('/assets/js', express.static(path.resolve(__dirname + '/../dist/js')));
app.use('/static/js', express.static(path.resolve(__dirname + '/../dist/js')));
app.use('/assets/css', express.static(path.resolve(__dirname + '/../dist/css')));
app.use('/assets/fonts', express.static(path.resolve(__dirname + '/../dist/fonts')));

app.use('/api', apiRouter);

app.use(router);

app.listen(3000);

console.log('Application started on port 3000');
