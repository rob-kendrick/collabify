const UserModel = require('../models/UserModel');
const cloudinaryconfig = require('../utils/cloudinary');
// const cloudinary = require('cloudinary').v2;

const { cloudinary } = require('../utils/cloudinary');

async function uploadProfilePic(req, res) {
  try {
    console.log('Profile pic controller firing!');

    const fileStr = req.body.imgData; //base64 File string
    //Uploading the image below
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'ege9jsbo',
    });
    //this console log will show us the object for the pic we uploaded
    console.log(uploadedResponse);
    res.json({ msg: 'yay uploaded file' });
  } catch (err) {
    console.log(' : : : ERROR UPLOADING PROFILE PIC ! : : :', err);
  }
}

async function uploadMediaPic(req, res) {
  try {
    console.log('User Media controller firing');

    const fileStr = req.body.imgData;

    //Uploading image below
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'UserMedia',
    });
    console.log('UPLOADED MEDIA PIC', uploadedResponse);
    res.json({ msg: 'uploaded user media pic' });
  } catch (err) {
    console.log(' : : : ERROR UPLOADING USER MEDIA PIC : : : ', err);
  }
}

//Function for getting all prof. pics public_id properties and sorting them
async function getAllProfPics(req, res) {
  try {
    console.log('getAllProfPics firing!');
    //Searching the profilePics folder in my cloudinary account
    const { resources } = await cloudinary.search
      .expression('folder:FindMyBand/ProfilePics')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    console.log(resources, 'resources');
    const publicIds = resources.map((file) => {
      return file.public_id;
    });

    res.send(publicIds);
  } catch (err) {
    console.log(
      ' : : : ERROR retrieving prof pic ids from cloudinary : : : ',
      err
    );
  }
}

module.exports = { uploadProfilePic, uploadMediaPic, getAllProfPics };
