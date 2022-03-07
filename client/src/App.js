//React Stuff
import React, { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//CSS
import './App.less';
//Components
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import ChatList from './components/ChatList/ChatList';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import { ParentForm } from './components/Form/Create_Acc_Parent/ParentForm';

//Creating Context
export const mainContext = React.createContext(null);

//TODO:
//  Create Login / Register page, linking to home route or account creation
//  integrate express sessions for session authentication
//  -Finish account creation form. Create update state functions on submit
//  -Acc. creation form: Create api service for cloudinary user images and audios
//  -Acc creation form: create api service for posting user to DB
//  Chat List: Make chats function properly. Create idividual chat screen with websockets
//  Profile info : Create detailed profile info comps (matched + unmatched) for displaying user profiles
//  MATCH: create Match functionality!

function App() {
  const [users, setUsers] = useState([]); //will be arr of user objs

  return (
    <div className="App">
      <mainContext.Provider value={{ users, setUsers }}>
        <Router>
          <Routes>
            {/* Chat with particular user */}
            <Route
              path="/chat/:person"
              element={
                <>
                  <Header backButton="/chat" />
                  <h1>INDIVIDUAL CHAT!</h1>
                </>
              }
            />
            {/* Chat-list Route */}
            <Route
              path="/chat"
              element={
                <>
                  {/* TODO: FIX BACK BUTTON */}
                  <Header backButton="/" />
                  <ChatList />
                </>
              }
            />
            {/* Route for account creation => TODO: Link this */}
            <Route path="/signup" element={<ParentForm />}></Route>
            {/* Home '/' Route */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <CardList />
                  <SwipeButtons />
                </>
              }
            />
          </Routes>
        </Router>
      </mainContext.Provider>
    </div>
  );
}

export default App;
