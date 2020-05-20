const express = require('express');
const cors = require('cors');

const app = express();

// SETINGS
app.set('port', process.env.PORT || 4000); 

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/users', require('./routes/users'));
app.use('/incidents', require('./routes/incidents'));


module.exports = app;