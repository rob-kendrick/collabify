import React, { useEffect } from 'react';
import { useState } from 'react';
//Importing Form Components / pages
import FormBasicInfo from '../1_Form_Basic_Info/FormBasicInfo';
import FormBandRoles from '../2_Form_Band_Roles/FormBandRoles';
import FormGenres from '../3_Form_Genres/FormGenres';
import WorkWith_Instruments from '../4_Form_Work_With_Instruments/WorkWith_Instruments';
import FormWorkWithGenres from '../5_Form_Work_With_Genres/FormWorkWithGenres';
import FormUserProfile from '../6_Form_UsrProf_Media/FormUserProfile';
import FinalDBCreate from '../FINAL_DB_CREATE/FinalDBCreate';
//CSS
import './ParentForm.css';

//Creating Context
export const formContext = React.createContext(null);

//Creating Parent form container
function ParentForm() {
  //Creating Parent states
  const [userObj, setUserObj] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    bday: '',
    roles: [],
    workWithRoles: [],
    genres: [],
    workWithGenres: [],
    bio: '',
    profilePic: '',
    pics: [],
    audios: [],
    likes: [],
    dislikes: [],
    matches: [],
  });

  useEffect(() => {
    //This console logs every time we update userObj
    console.log('userObj updated ! (ParentForm)', userObj);
  }, [userObj]);

  //State for managing form pages
  const [page, setPage] = useState(1);

  return (
    <formContext.Provider value={{ userObj, setUserObj, page, setPage }}>
      <div className="main-form-container">
        {/* Progress bar goes here */}
        <div className="progress-tracker">
          <h3 className="page-tracker">Page{page} / 6</h3>
          <progress className="progress-bar" max="6" value={page} />
        </div>

        {/* Condtionally rendered form content */}
        <div className="content">
          {page === 1 && <FormBasicInfo />}
          {page === 2 && <FormBandRoles />}
          {page === 3 && <FormGenres />}
          {page === 4 && <WorkWith_Instruments />}
          {page === 5 && <FormWorkWithGenres />}
          {page === 6 && <FinalDBCreate />}

          {/* TODO: make functionality for retrieving user images from cloud
            AFTER user has created their account in DB. This will allow me to link
            a user _ID (from mongoDB) to the pictures the user uploads. This is why FormUserProfile 
            is commented out below. */}
          {/* {page === 6 && <FormUserProfile />} */}
        </div>
      </div>
    </formContext.Provider>
  );
}

export { ParentForm };
