import React, { useState } from "react";

//import any components needed
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setButtonNumbers] = useState(numbers);
  return (
    <div className="numbers-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map(number => <NumberButton key={number} text={numbers}/>)}
    </div>
  );
};
export default Numbers;