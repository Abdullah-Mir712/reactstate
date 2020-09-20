import React, { useState } from 'react';
import './App.css';

export function Room() {
  let [isLit, setLit] = useState(true);
  //let [age, setAge] = useState(23);

  
  return (
    <div className={`room ${isLit? "lit" : "dark"}`}>

      The Room is : {isLit ? 'light' : 'Dark'}

      <br />

      <button onClick={() => setLit(true)} className="margin" >
       light on</button>

       <button onClick={()=> setLit(false)}> light off</button>

    </div>
  );
}


