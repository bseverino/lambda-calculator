import React, {useState} from "react";
import "./App.css";
import {Numbers} from "./components/ButtonComponents/NumberButtons/Numbers";
import {Operators} from "./components/ButtonComponents/OperatorButtons/Operators";
import {Specials} from "./components/ButtonComponents/SpecialButtons/Specials";
import {Display} from "./components/DisplayComponents/Display";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

let heldNumbers = [];

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [numDisplay, setNumDisplay] = useState(0);
  
  console.log(heldNumbers);

  const changeNumber = change => {
    setNumDisplay(change);
  };
  const addPeriod = () => {
    setNumDisplay(numDisplay + ".");
  };
  const addDigit = digit => {
    setNumDisplay(numDisplay + `${digit}`)
  };

  const pushNumber = (num, operation) => {
    let integer = Number(num);
    heldNumbers.push(integer);
    heldNumbers.push(operation);
  };

  const equal = (num) => {
    let integer = Number(num);
    heldNumbers.push(integer);
    if (heldNumbers[1] === "+"){
      setNumDisplay(heldNumbers[0] + heldNumbers[2]);
    } else if (heldNumbers[1] === "-"){
      setNumDisplay(heldNumbers[0] - heldNumbers[2]);
    } else if (heldNumbers[1] === "*"){
      setNumDisplay(heldNumbers[0] * heldNumbers[2]);
    } else if (heldNumbers[1] === "/"){
      setNumDisplay(heldNumbers[0] / heldNumbers[2]);
    };
  };

  const clearNumbers = () => {
    heldNumbers = [];
  };

  const clear = () => {
    setNumDisplay(0);
    clearNumbers();
  };

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display number={numDisplay} />
        <div className="buttons">
          <div className="left-side">
            <Specials clear={clear} />
            <Numbers numDisplay={numDisplay} held={heldNumbers} change={changeNumber} period={addPeriod} digit={addDigit} />
          </div>
          <Operators numDisplay={numDisplay} pushNumber={pushNumber} equal={equal} />          
        </div>
      </div>
    </div>
  );
}

export default App;
