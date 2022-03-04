import React from "react";
import { useState, useContext } from "react";
import { mainContext } from "../../App";
import SwipeCard from "../Card/SwipeCard";
import TinderCard from 'react-tinder-card'
import './CardList.css'

function CardList() {
  const context = useContext(mainContext);
  
  const [tempArr, setTempArr] = useState([
    {
      email: "foo@bar.com",
      password: "password",
      firstName: "Bob",
      lastName: "Dylan",
      age: "60",
      bio: "Hi there, why dont you get stuck in the middle with me?",
      profPic: "https://www.radiojai.com/wp-content/uploads/2020/10/bobdylan.jpg",
      roles: [
          "Vocalist",
          "Guitarist"
      ],
      genres: [
          "Blues",
          "Pop"
      ],
      pics: [],
      audios: [],
      matches: [],
      rejectedBy: [],
      _id: "62224040777c7182ff232227",
      __v: 0
  },
  {
    email: "test@gmail.com",
    password: "password1",
    firstName: "Stevie",
    lastName: "Wonder",
    age: "70",
    bio: "Can you see us getting together to collab?",
    profPic: "https://www.swashvillage.org/storage/img/images_1/the-wonder-of-stevie-wonder-7-fun-facts.jpg",
    roles: [
        "Vocalist",
        "Synth / Keys"
    ],
    genres: [
        "Jazz",
        "Pop"
    ],
    pics: [],
    audios: [],
    matches: [],
    rejectedBy: [],
    _id: "622240c6777c7182ff232229",
    __v: 0
},
{
  email: "hi@hotmail.com",
  password: "password2",
  firstName: "Ellie",
  lastName: "Goulding",
  age: "35",
  bio: "Wanna make music together ?",
  profPic: "https://www.channelthon.com/wp-content/uploads/2020/10/ellie-goulding-official-youtube-channel.jpg",
  roles: [
      "Vocalist",
      "Guitarist",
      "Drummer"
  ],
  genres: [
      "Experimental",
      "Pop"
  ],
  pics: [],
  audios: [],
  matches: [],
  rejectedBy: [],
  _id: "62224189777c7182ff23222b",
  __v: 0
}
  ])
  return (
    <div>
      <h1>CardList</h1>
      <div className="card-container">
      {tempArr.map((person) => {
        return (

        <TinderCard
        className="swipe"
        key={person.firstName}
        preventSwipe={['up', 'down']}
        >
          <div 
          style={{backgroundImage: `url(${person.profPic})`}}
          className="card">
            <h3>{person.firstName}</h3>
          </div>
        </TinderCard>
        )

        // <SwipeCard>
        //   <div className="card">
        //     <h3>{person.firstName}</h3>
        //   </div>
        // </SwipeCard>;
      })}
      
      </div>
    
    </div>
  );
}

export default CardList;
