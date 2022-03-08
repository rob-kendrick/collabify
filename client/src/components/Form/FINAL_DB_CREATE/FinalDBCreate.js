import React from 'react';
//Context
import { useContext } from 'react';
import { formContext } from '../Create_Acc_Parent/ParentForm';
//CSS
import './FinalDBCreate.css';
//Services
import { createUser } from '../../../services/backEndService';

function FinalDBCreate() {
  const context = useContext(formContext);

  function createAcc() {
    console.log('creating account...');
    //Body to be posted to backend
    const body = {
      //These will have data
      firstName: context.userObj.firstName,
      lastName: context.userObj.lastName,
      bday: context.userObj.bday,
      email: context.userObj.email,
      password: context.userObj.password,
      genres: context.userObj.genres,
      workWithGenres: context.userObj.workWithGenres,
      workWithRoles: context.userObj.workWithRoles,
      //These will be blank. The user will set them later.
      audios: context.userObj.audios,
      profilePic: context.userObj.profilePic,
      pics: context.userObj.pics,
      likes: context.userObj.likes,
      dislikes: context.userObj.dislikes,
      matches: context.userObj.matches,
    };
    //Sending body to backend
    createUser(body);
  }

  return (
    <div className="db-creater">
      <h2>All done for now!</h2>
      <h3> Click the button below to register your account!</h3>
      <button className="register-btn" onClick={createAcc}>
        Register
      </button>
    </div>
  );
}

export default FinalDBCreate;
