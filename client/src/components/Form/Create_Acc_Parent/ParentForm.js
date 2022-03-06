import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import FormBasicInfo from '../1_Form_Basic_Info/FormBasicInfo';
import FormBandRoles from '../2_Form_Band_Roles/FormBandRoles';
import FormGenres from '../3_Form_Genres/FormGenres';
import WorkWith_Instruments from '../4_Form_Work_With_Instruments/WorkWith_Instruments';
import FormWorkWithGenres from '../5_Form_Work_With_Genres/FormWorkWithGenres';
import FormUserProfile from '../6_Form_UsrProf_Media/FormUserProfile';
import './ParentForm.css';

//Creating Context
export const formContext = React.createContext(null);

//Defining Header
function Header() {
  return (
    <div>
      <h4>Welcome to Account Creation, press next to continue!</h4>
    </div>
  );
}

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
    genres: [],
    bio: '',
    pics: [],
    audios: [],
    likes: [],
    dislikes: [],
    matches: [],
  });

  //State for managing form pages
  const [page, setPage] = useState(1);

  function goNextPage() {
    setPage((page) => page + 1);
  }

  function goPrevPage() {
    setPage((page) => page - 1);
  }

  return (
    <formContext.Provider value={{ userObj, setUserObj, page, setPage }}>
      <div className="main-form-container">
        {/* Progress bar goes here */}
        <div className="progress-tracker">
          <h3 className="page-tracker">Page{page} / 7</h3>
          <progress className="progress-bar" max="7" value={page} />
        </div>

        {/* Content Goes Here */}
        <div className="content">
          {/* {page === 1 && <Header />} */}
          {page === 1 && <FormBasicInfo />}
          {page === 2 && <FormBandRoles />}
          {page === 3 && <FormGenres />}
          {page === 4 && <WorkWith_Instruments />}
          {page === 5 && <FormWorkWithGenres />}
          {page === 6 && <FormUserProfile />}
          {page === 7 && <Onboarding7 />}

          {/* Render Prev Button if page > 1 */}
          {/* {page > 1 &&  <button onClick={goPrevPage}>Prev</button>}
          {/* Next Button */}
          {/* {page < 7 &&  <button onClick={goNextPage}>Next</button>} */}
          {/* Submit Button */}
          {/* {page === 7 && <button>Submit</button>}  */}
        </div>
      </div>
    </formContext.Provider>
  );
}

function Onboarding1() {
  return <div>I am page 1</div>;
}

function Onboarding2() {
  return <div>I am page 2</div>;
}

function Onboarding3() {
  return <div>I am page 3</div>;
}

function Onboarding4() {
  return <div>I am page 4</div>;
}
function Onboarding5() {
  return <div>I am page 5</div>;
}
function Onboarding6() {
  return <div>I am page 6</div>;
}
function Onboarding7() {
  return <div>I am page 7</div>;
}

export { Header, ParentForm };
