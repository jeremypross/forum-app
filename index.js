// declare express
const express = require('express');
const app     = express();

// require morgan
const logger  = require('morgan');
app.use(logger('dev'));

// config EJS
app.set('view engine', 'ejs');

// config path
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// config body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.listen(process.env.PORT || 3000);

// connect to resources.js
app.use(require('./resources'));
