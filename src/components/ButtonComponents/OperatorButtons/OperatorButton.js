import React from "react";

export const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator-button">{props.item.char}</button>
    </>
  );
};
