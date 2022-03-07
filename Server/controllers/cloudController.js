const UserModel = require('../models/UserModel');

async function uploadProfilePic(req, res) {
  try {
    console.log('cloud controller firing!');
    console.log('req body >>>', req.body);
    const file = req.body.imgData; //base64 File string
    console.log(file);
    res.send(file);
  } catch (err) {
    console.log(' : : : ERROR UPLOADING PROFILE PIC ! : : :', err);
  }
}

module.exports = { uploadProfilePic };
