 const usersController = {};

 const User = require('../models/Users');

 usersController.getAllUsers = async (req, res) => {
   const users = await User.find();
   res.json(users);
 } 

 usersController.getUser = (req, res) => res.json({message: 'Get this User'});
 
 usersController.createUser = (req, res) => res.send({message: 'Created User'});
 
 usersController.updateUser = (req, res) => res.send({message: 'Update this User'});
 
 usersController.deleteUser = (req, res) => res.send({message: 'Delete User'});

 module.exports = usersController;