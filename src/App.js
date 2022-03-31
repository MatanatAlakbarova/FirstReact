import logo from './logo.svg';
import './App.css';
import {Paragraph} from './Paragraph';
import Button from "./Button";
import React from 'react';

function  App() {
 const[state,setState]=React.useState(true);
 const[total,setTotal]=React.useState(1);
  return (
    <>
    <div className="App">
      <p>{state?"Salam P320":"Sagol P320"}</p>
      <button onClick={()=>setState(!state)}>Change</button>
     <div>
      <button onClick={()=>setTotal(total-1)}>-</button>
      <button>{total}</button>
      <button onClick={()=> setTotal(total+1)}>+</button>
     </div>
    </div>
    </>
  );
}

export default App;
