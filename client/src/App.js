//React Stuff
import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//CSS
import "./App.less";
//Components
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import ChatList from "./components/ChatList/ChatList";

//Creating Context
export const mainContext = React.createContext(null);

function App() {
  const [users, setUsers] = useState([]); //will be arr of user objs

  return (
    <div className="App">
      <mainContext.Provider value={{ users, setUsers }}>
        <Router>
          <Routes>
            {/* Chat-page Route */}
            <Route
              path="/chat"
              element={
                <>
                  <Header backButton="/" />
                  <ChatList />
                </>
              }
            />
            {/* Home '/' Route */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <CardList />
                </>
              }
            />
          </Routes>
        </Router>
      </mainContext.Provider>
      {/* <Header /> */}
      {/* Components */}
      {/* Header */}
      {/* Tinder Cards */}
      {/* Match / Reject / Reverse Buttons */}
    </div>
  );
}

export default App;
