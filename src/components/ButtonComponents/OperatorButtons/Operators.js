import React, {useState} from "react";
import { operators } from "../../../data";
//import any components needed
import { OperatorButton } from "./OperatorButton";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opertorState] = useState(operators);
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {opertorState.map((operators, index) => (
         <OperatorButton key = {index} operators = {operators}/>
       ))}
    </div>
  );
};

export default Operators;