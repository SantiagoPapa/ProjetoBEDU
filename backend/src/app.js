const express = require('express');
const cors = require('cors');

const app = express();

// SETINGS
app.set('port', process.env.PORT || 4000); 

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/incidentes', require('./routes/incidentes'));
app.use('/api/cardapio', require('./routes/cardapio'));

module.exports = app;