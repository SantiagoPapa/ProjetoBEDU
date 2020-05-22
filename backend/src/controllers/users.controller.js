const usersController = {};

const User = require('../models/Users');

// |GET FOR FIND ALL USERS| \\
usersController.getAllUsers = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

// |GET FOR FIND USER BY ID| \\
usersController.getUser = async (req, res) => {
	const user = await User.findOne({ _id: req.params.id });
	res.json(user);
};

// |POST FOR CREATE NEW USER| \\
usersController.createUser = async (req, res) => {
	const { username, name, lastname } = req.body;
	const newUser = new User({
		username,
		name,
		lastname
	});
	await newUser.save();
	res.send({ message: 'Created User' });
};

// |PUT FOR UPDATE USER| \\
usersController.updateUser = async (req, res) => {
	await User.updateOne({ _id: req.params.id }, req.body);
	res.send({ message: 'Update this User' });
};

// |DELETE FOR DELETE USER| \\
usersController.deleteUser = async (req, res) => {
	await User.deleteOne({ _id: req.params.id });
	res.send({ message: `Delete User` });
};

module.exports = usersController;
