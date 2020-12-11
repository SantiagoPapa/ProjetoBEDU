const express = require('express');
const cors = require('cors');
const passport = require('passport');

// Inicializações
const app = express();
require('./controllers/passport')

// SETINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/incidentes', require('./routes/incidentes.routes'));
app.use('/api/cardapio', require('./routes/cardapio.routes'));

module.exports = app;
