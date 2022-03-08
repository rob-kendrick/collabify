import React from 'react';
import { useState, useContext } from 'react';
import { mainContext } from '../../App';
import TinderCard from 'react-tinder-card';
import './CardList.css';
import SwipeButtons from '../SwipeButtons/SwipeButtons';

function CardList() {
  const context = useContext(mainContext);

  //Mock Data => This will be retrieved from DB
  //NOTE: some properties on this mock data are also subject to change.
  const [tempArr, setTempArr] = useState([
    {
      email: 'foo@bar.com',
      password: 'password',
      firstName: 'Bob',
      lastName: 'Dylan',
      age: '60',
      bio: 'Hi there, why dont you get stuck in the middle with me?',
      profPic:
        'https://www.radiojai.com/wp-content/uploads/2020/10/bobdylan.jpg',
      roles: ['Vocalist', 'Guitarist'],
      genres: ['Blues', 'Pop'],
      pics: [],
      audios: [],
      matches: [],
      rejectedBy: [],
      _id: '62224040777c7182ff232227',
      __v: 0,
    },
    {
      email: 'test@gmail.com',
      password: 'password1',
      firstName: 'Stevie',
      lastName: 'Wonder',
      age: '70',
      bio: 'Can you see us getting together to collab?',
      profPic:
        'https://www.swashvillage.org/storage/img/images_1/the-wonder-of-stevie-wonder-7-fun-facts.jpg',
      roles: ['Vocalist', 'Synth / Keys'],
      genres: ['Jazz', 'Pop'],
      pics: [],
      audios: [],
      matches: [],
      rejectedBy: [],
      _id: '622240c6777c7182ff232229',
      __v: 0,
    },
    {
      _id: { $oid: '62279fb8fc847419b6c5dfde' },
      email: 'something@gmail.com',
      password: '$2b$10$AbFDy3LUSA/lixQHAG4Y5e3s8oYdWBMYqLNAIQtOjRaqOwp4uOkVK',
      firstName: 'Rick',
      lastName: 'Ross',
      bday: '1988-03-03T00:00:00.000Z',
      profPic:
        'https://ccdiscovery.b-cdn.net/wp-content/uploads/2020/10/rick-ross-2048x1361.jpg',
      roles: [],
      genres: ['Hip-Hop', 'Pop', 'Experimental'],
      workWithGenres: ['Hip-Hop', 'Punk'],
      workWithRoles: ['Vocalist', 'Producer', 'Guitarist', 'Saxophone'],
      pics: [],
      audios: [],
      matches: [],
      likes: [],
      dislikes: [],
      __v: 0,
    },
    {
      _id: { $oid: '6227a16f53eabaf1bce7c4b8' },
      email: 'hi@hotmail.de',
      password: '$2b$10$vhPNwBOb7vwNCB3gklfDzeygMXzig0GyKML263MVcC1MeTvhSpJfS',
      firstName: 'Avril',
      lastName: 'Lavigne',
      bday: '1992-01-01T00:00:00.000Z',
      profPic:
        'https://img.welt.de/img/kultur/musik/mobile101881681/3912503957-ci102l-w1024/bs-07-14-DW-Kultur-Monte-Carlo-jpg.jpg',
      roles: [],
      genres: ['Hip-Hop', 'Punk', 'Rock'],
      workWithGenres: ['Funk', 'Rock', 'Punk'],
      workWithRoles: ['Producer', 'Vocalist', 'Bassist'],
      pics: [],
      audios: [],
      matches: [],
      likes: [],
      dislikes: [],
      __v: 0,
    },
    {
      _id: { $oid: '6227a0ccfee1e4ec11594a1d' },
      email: 'hi@hotmail.com',
      password: '$2b$10$3x9bUzU7jd2AQzR2jUlGNOf45LFckZtk8AH09Nf5644boL8Max6C6',
      firstName: 'ASAP',
      lastName: 'Rocky',
      bday: '1989-01-01T00:00:00.000Z',
      profPic:
        'https://www.vermoegenmagazin.de/wp-content/uploads/2020/06/ASAP-Rocky-Einkommen.jpg',
      roles: [],
      genres: ['Hip-Hop', 'Rock', 'Funk', 'Experimental'],
      workWithGenres: ['Hip-Hop', 'Pop', 'RnB', 'Blues'],
      workWithRoles: [
        'Producer',
        'Drummer',
        'Percussionist',
        'Bassist',
        'Synth / Keys',
      ],
      pics: [],
      audios: [],
      matches: [],
      likes: [],
      dislikes: [],
      __v: 0,
    },
    {
      _id: { $oid: '6227a55353eabaf1bce7c4c0' },
      email: 'lil@pump.com',
      password: '$2b$10$EezR/JeXbsQldIcowN3p0eeor1AR7zFgG/7xuhNdCzTstCZ2YO/T.',
      firstName: 'Lil',
      lastName: 'Pump',
      bday: '1119-01-01T00:00:00.000Z',
      profPic:
        'https://townsquare.media/site/625/files/2018/01/Lil-Pump-Wants-a-15-Million-Deal.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89',
      roles: [],
      genres: ['Hip-Hop'],
      workWithGenres: ['Metal'],
      workWithRoles: ['Saxophone'],
      pics: [],
      audios: [],
      matches: [],
      likes: [],
      dislikes: [],
      __v: 0,
    },
  ]);
  return (
    <div>
      <div className="card-container">
        {tempArr.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.firstName}
              preventSwipe={['up', 'down']}
            >
              <div
                style={{ backgroundImage: `url(${person.profPic})` }}
                className="card"
              >
                <h3>{person.firstName}</h3>
              </div>
            </TinderCard>
          );
        })}
        <SwipeButtons />
      </div>
    </div>
  );
}

export default CardList;
