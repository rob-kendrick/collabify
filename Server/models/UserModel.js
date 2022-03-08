'use strict';
const mongoose = require('./');
const Schema = mongoose.Schema;

//User Schema
const userSchema = new Schema({
  //Basic Info + profile pic
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bday: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  profilePic: {
    type: String,
  },

  //Band / Music Info
  roles: {
    type: [String],
    enum: [
      'Producer',
      'Vocalist',
      'Drummer',
      'Percussionist',
      'Guitarist',
      'Bassist',
      'Synth / Keys',
      'Saxophone',
    ],
  },
  genres: {
    type: [String],
    enum: [
      'Hip-Hop',
      'Pop',
      'RnB',
      'Blues',
      'Soul',
      'Jazz',
      'Funk',
      'Rock',
      'Punk',
      'House / Techno',
      'Metal',
      'Experimental',
    ],
  },

  workWithGenres: {
    type: [String],
  },

  workWithRoles: {
    type: [String],
  },

  //User Media
  pics: {
    type: [String],
  },
  audios: {
    type: [String],
  },

  //Matches and Rejections => arrays of userIDs
  matches: {
    type: [String],
  },
  likes: {
    type: [String],
  },
  dislikes: {
    type: [String],
  },
});

//Creates Document 'Users' in our DB.
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
