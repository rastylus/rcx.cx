import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css";



function Pages() {
const [num, setNum] = useState(0);


const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const hitClick = () => {
    setNum(randomNumberInRange(0, 101));
    console.log(num);
    }
    
  
    return (
      <>
        <div className='links'>
          <Link to="/dice">dice</Link>
          <br />
          <Link to="/pages">pages</Link>
          <br />
          <Link to="/">home</Link>
        </div>
        <p>RCX</p>
        <button onClick={hitClick}>roll</button>
        <p>{num}</p>
      </>
    );
  }
  
  export default Pages