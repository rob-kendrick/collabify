const { Router } = require('express');
const userController = require('./controllers/userController');
const cloudController = require('./controllers/cloudController');

const router = Router(); //Starting router

//Define our routes

//get all Users
router.get('/users', userController.getAllUsers);

//get 1 user with a req.param of 'id'
router.get('/users/:id', userController.getUserById);

//Create 1 User
router.post('/users', userController.createUser);

//Delete 1 user
router.delete('/users/:id', userController.deleteUserById);

//Login user
router.post('/login', userController.login);

// CLOUD STUFF

//Post a profile picture to cloundinary
router.post('/cloudapi/upload', cloudController.uploadProfilePic);

//Post a user media pic to cloudinary
router.post('/cloudapi/upload/media', cloudController.uploadMediaPic);

//Retrieve all profile picture public_ids from cloudinary
router.get('/cloudapi/upload', cloudController.getAllProfPics);

module.exports = router;
