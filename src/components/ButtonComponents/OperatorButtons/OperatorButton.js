import React from "react";

export const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator-button" onClick={() => {
        if (props.item.char !== "="){
          props.pushNumber(props.numDisplay, props.item.value);
        } else {
          props.equal(props.numDisplay);
        };
      }}>
        {props.item.char}
      </button>
    </>
  );
};
