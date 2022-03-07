import React from 'react';
import { useContext } from 'react';
import { formContext } from '../Create_Acc_Parent/ParentForm';
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

const cloudController = require('../../../services/cloudService');

function FormUserProfile() {
  const context = useContext(formContext);
  const [mediaFileInputState, setMediaFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [mediaPreviewSrc, setMediaPreviewSrc] = useState();

  //Go prev page function
  function goPrevPage() {
    context.setPage((page) => page - 1);
  }

  //Handle form submit
  function handleSubmit(event) {
    try {
      event.preventDefault();
      //Go to next page
      context.setPage((page) => page + 1);
    } catch (err) {
      console.log(
        ' : : : error submitting user profile info to state : : : ',
        err
      );
    }
  }
  //controller function for uploading user media
  async function uploadUsrMedia(imgBase64) {
    console.log(imgBase64);
    try {
      console.log('UploadusrMedia firing!');
      setMediaFileInputState('');
      return await fetch('http://localhost:4000/cloudapi/upload/media', {
        method: 'POST',
        body: JSON.stringify({ imgData: imgBase64 }),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.log('Error uploading file Usr media : : : ', err);
    }
  }

  //Function for handling profile picture upload
  function handleFileSubmit(event) {
    console.log('handleSubmitFile firing !');
    event.preventDefault();
    if (!previewSource) return;
    cloudController.uploadImage(previewSource);
  }

  //Func for uploading usr-media picture
  function submitUserMedia(event) {
    console.log('submitUserMedia firing!');
    event.preventDefault();
    if (!mediaPreviewSrc) return;
    uploadUsrMedia(mediaPreviewSrc); //////////////////////
  }

  //Func for handling user selecting profile pic
  function handleInputChange(files) {
    console.log('handleInputChange firing !');
    const file = files[0];
    console.log(file, 'FILE !');
    previewFile(file);
  }

  //func for handling user selecting usr-media file
  function handleMediaInput(files) {
    console.log('handleMediaInput firing!');
    const mediaFile = files[0];
    console.log(mediaFile, 'MEDIA FILE !');
    previewMediaFile(mediaFile);
    setMediaFileInputState(files);
  }

  //Function for previewing profile pic
  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  }

  //Function for previewing usr-media pictures
  function previewMediaFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setMediaPreviewSrc(reader.result);
    };
  }

  return (
    <div>
      <h3 className="top-text">Now lets make your profile!</h3>
      <p className="sub-top">Show your skills off to the world !</p>
      <form className="profile-form" onSubmit={handleSubmit}>
        {' '}
        <h4>Choose One main Profile picture</h4>
        <input
          type="file"
          name="main-prof-pic"
          onChange={(e) => {
            handleInputChange(e.target.files);
          }}
        ></input>
        <button
          type="button"
          className="submit-file-btn"
          onClick={handleFileSubmit}
        >
          Submit file
        </button>
        <h4>Add more user pictures</h4>
        <input
          type="file"
          name="media-file-1"
          onChange={(e) => {
            handleMediaInput(e.target.files);
          }}
        ></input>
        <button
          type="button"
          className="submit-file-btn"
          onClick={submitUserMedia}
          value={mediaFileInputState}
        >
          Submit Media file
        </button>
        <h4>and write a short bio</h4>
        <input type="text" name="bio"></input>
      </form>

      {/* PREVIEW YOUR SELECTED FILE */}
      {previewSource && (
        <img
          src={previewSource}
          alt="your chosen image"
          style={{ height: '300px' }}
        />
      )}

      <div className="footer">
        <button className="footer-btn" onClick={goPrevPage}>
          Prev
        </button>
        <button className="footer-btn" type="submit">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default FormUserProfile;
