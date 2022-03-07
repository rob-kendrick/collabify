import React from 'react';
import { useContext } from 'react';
import { formContext } from '../Create_Acc_Parent/ParentForm';
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios';

function FormUserProfile() {
  const context = useContext(formContext);

  const [previewSource, setPreviewSource] = useState();

  function goPrevPage() {
    context.setPage((page) => page - 1);
  }

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

  //api service func
  function uploadImage(imgBase64) {
    console.log(imgBase64);
    try {
      console.log('try catch firing!');
      return fetch('http://localhost:4000/cloudapi/upload', {
        method: 'POST',
        body: JSON.stringify({ imgData: imgBase64 }),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.log('Error uploading file Usr Profile : : : ', err);
    }
  }

  function handleFileSubmit(event) {
    console.log('handleSubmitFile firing !');
    event.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  }

  function handleInputChange(files) {
    console.log('handleInputChange firing !');
    const file = files[0];
    console.log(file, 'FILE !');
    previewFile(file);

    const formData = new FormData();
    formData.append('file', files[0]); //selecting 1st file in fileList
    formData.append('upload_preset', 'ege9jsbo'); //cloudinary preset

    //   Axios.post(
    //     'https://api.cloudinary.com/v1_1_rkendrick/image/upload',
    //     formData
    //   ).then((response) => console.log('respownse!', response));
    // } catch (err) {
    //   console.log(' : : : Error uploading profPic to cloudinary : : :', err);
    // }
  }

  //Function for previewing selected file
  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
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
        <input type="file" name="other-prof-pics"></input>
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
