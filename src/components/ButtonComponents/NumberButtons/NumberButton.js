import React from "react";

export const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="number-button" onClick={() => {
        if (isNaN(props.number) === true){
          props.period();          
        } else if (props.numDisplay === 0 || props.held.length > 0){
          props.change(props.number);
        } else {props.digit(props.number)};
      }}>
        {props.number}
      </button>
    </>
  );
};
