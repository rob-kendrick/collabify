const baseURL = 'http://localhost:4000';

//Create user in DB
export const createUser = (usr) => {
  return fetch(`${baseURL}/users`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(usr),
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error Creating user:', error));
};

//Login user
export const loginUser = (usr) => {
  return fetch(`${baseURL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usr),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

//Logout user
export const logout = () => {
  return fetch(`${baseURL}/logout`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
