const express = require('express');
const path = require('path');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(require('./middleware/logger'));
app.use(require('./middleware/body-parser'));
app.use(require('./middleware/urlencoded'));
app.use(require('./middleware/cookie-parser'));
app.use(require('./middleware/sass'));
app.use(require('./middleware/cors'));

// Application Routes
app.use('/', require('./routes/index'));
app.use('/static', require('./routes/static'));

// catch 404 and forward to error handler
app.use(require('./routes/error').errorCatcher);

// error handler
app.use(require('./routes/error').errorHandler);

module.exports = app;
