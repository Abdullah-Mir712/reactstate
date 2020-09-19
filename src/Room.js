import React, { useState } from 'react';
import './App.css';

export function Room() {
  let [isLit, setLit] = useState(false);
  let [age, setAge] = useState(23);

  
  return (
    <div className={`room ${isLit? "lit" : "dark"}`}>

      Age: {age}

      <br />
      <button onClick={() => setAge(++age) } >  increase Age</button>

      <br />

      the Room is : {isLit ? 'light' : 'Dark'}

      <br />

      <button onClick={() => setLit(!isLit)}>
       Toggle light</button>

    </div>
  );
}


