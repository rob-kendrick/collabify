const UserModel = require("../models/UserModel"); //check model folder for schemas used below

//getAll func
async function getAllUsers(req, res) {
  try {
    const result = await UserModel.find();
    res.send(result);
    res.status(200);
  } catch (e) {
    res.status(500);
    console.log(e);
  }
}

//get user by ID
async function getUserById(req, res) {
  try {
    const id = req.params.id;

    const dbResponse = await UserModel.findById(id);
    res.send(dbResponse);
    res.status(200);
  } catch (e) {
    res.send(e);
    res.status(500);
    console.log(e);
  }
}

//the client will send a request(body) which should match the schema we created in UserModel.js
async function createUser(req, res) {
  try {
    //destructuring the props /vars we need from the client request
    const {
      email,
      password,
      firstName,
      lastName,
      age,
      bio,
      profPic,
      roles,
      genres,
    } = req.body;

    const dbResponse = await UserModel.create({
      email,
      password,
      firstName,
      lastName,
      age,
      bio,
      profPic,
      roles,
      genres,
    });
    res.send(dbResponse);
    res.status(201); //accepted into DB
  } catch (e) {
    res.send(e);
    res.status(500);
    console.log(e);
  }
}

//delete by Id
async function deleteUserById(req, res) {
  try {
    const id = req.params.id;

    const dbResponse = await UserModel.findByIdAndDelete(id);
    res.send(dbResponse);
    res.status(200);
  } catch (e) {
    res.send(e);
    res.status(500);
    console.log(e);
  }
}

module.exports = { getAllUsers, getUserById, createUser, deleteUserById };
