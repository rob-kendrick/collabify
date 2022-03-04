import React from "react";
import { useContext } from "react";
import { mainContext } from "../../App";

function SwipeCard() {
  const context = useContext(mainContext);
  return (
    <div>
      SwipeCard
      <div></div>
    </div>
  );
}

export default SwipeCard;
