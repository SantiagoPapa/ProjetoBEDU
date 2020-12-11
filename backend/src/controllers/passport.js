const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/Usuario');

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'senha'
		},
		async (email, senha, done) => {
			// Comprovando usuário
			const usuario = await User.findOne(email);
			if (!usuario) {
				return done(null, false, { message: 'Usuário não encontrado' });
			} else {
				// Comprovando senha
				const match = await user.matchPassword(senha);
				if (match) {
					return done(null, usuario);
				} else {
					return done(null, false, { message: 'Email ou senha incorretos' });
				}
			}
		}
	)
);

// Guardar sessão do usuário
passport.serializeUser((usuario, done) => {
	done(null, usuario.id);
});

// Verifica se o usuário tem o acesso permitido
passport.deserializeUser((id, done) => {
	User.findById(id, (err, usuario) => {
		done(err, usuario);
	});
});
