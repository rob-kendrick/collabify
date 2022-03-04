import React from "react";
import { useState, useContext } from "react";
import { mainContext } from "../../App";
import SwipeCard from "../Card/SwipeCard";

function CardList() {
  const context = useContext(mainContext);
  return (
    <div>
      {context.users.map((person) => {
        <SwipeCard>
          <div className="card">
            <h3>{person.firstName}</h3>
          </div>
        </SwipeCard>;
      })}
      <h1>CardList</h1>
    </div>
  );
}

export default CardList;
