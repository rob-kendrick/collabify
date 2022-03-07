require('dotenv').config();

const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'rkendrick',
  api_key: '448862893568394',
  api_secret: 'zMykwzeimtIc5I6chmRPHRpIXDI',
});

module.exports = { cloudinary };
