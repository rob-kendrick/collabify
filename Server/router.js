const { Router } = require('express');
const userController = require('./controllers/userController')

const router = Router(); //Starting router

//Define our routes

//get all Users
router.get('/users', userController.getAllUsers)

//get 1 user with a req.param of 'id'
router.get('/users/:id', userController.getUserById)

//Create 1 User
router.post('/users', userController.createUser)

//Delete 1 user
router.delete('/users/:id', userController.deleteUserById)



module.exports = router;