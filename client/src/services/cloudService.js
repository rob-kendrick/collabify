//This is the file for Cloudinary API service functions

//Function for uploading 1 profile picture to cloudinary
//Target directory => FindMyBand/ProfilePics
async function uploadImage(imgBase64) {
  console.log(imgBase64);
  try {
    console.log('cloudService uploadImage firing!');
    return await fetch('http://localhost:4000/cloudapi/upload', {
      method: 'POST',
      body: JSON.stringify({ imgData: imgBase64 }),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log('Error uploading file Usr Profile : : : ', err);
  }
}

//Similar function for uploading to different cloudinary folder
async function uploadUsrMedia(imgBase64) {
  console.log(imgBase64);
  try {
    console.log('UploadusrMedia firing!');
    return await fetch('http://localhost:4000/cloudapi/upload/media', {
      method: 'POST',
      body: JSON.stringify({ imgData: imgBase64 }),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log('Error uploading file Usr media : : : ', err);
  }
}

module.exports = { uploadImage, uploadUsrMedia };
