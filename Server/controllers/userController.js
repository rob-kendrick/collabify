const UserModel = require('../models/UserModel'); //check model folder for schemas used below
const bcrypt = require('bcrypt');

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
  //destructuring the props /vars we need from the client request
  const {
    firstName,
    lastName,
    bday,
    email,
    password,
    genres,
    workWithGenres,
    workWithRoles,
    //These will be blank. The user will set them later.
    audios,
    profilePic,
    pics,
    likes,
    dislikes,
    matches,
  } = req.body;
  //  CHECKING IF USER EXISTS
  const user = await UserModel.findOne({ email: email });
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  //If user doesnt exist:
  try {
    if (password === '') throw new Error('Password blank');
    const hash = await bcrypt.hash(password, 10);

    const dbResponse = await UserModel.create({
      ...req.body,
      password: hash,
    });
    const user = await dbResponse.save();
    req.session.uid = user._id;
    res.status(201).send(user); //accepted into DB
  } catch (e) {
    res.send(e);
    res.status(500);
    console.log(e);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (validatedPass) {
      req.session.uid = user._id.toString();
    }
    if (!validatedPass) throw new Error();
    res.status(200).send({ email: user.email, id: user._id.toString() });
  } catch (err) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
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

module.exports = {
  login,
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
};
