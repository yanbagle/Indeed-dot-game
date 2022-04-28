import React, { useState, useEffect } from 'react';
import {Dot} from './dot';
import './game.css';

function Game() {
  
  const [start, setStart] = useState(true);
  const [dotArray, setDotArray] = useState([]);
  
  useEffect(() => {
    if (start) {
      setInterval(() => {  
        setDotArray([...dotArray, dotArray.length]);
        //console.log(dotArray);
        console.log('adding');
      }, 3000);
    
      setInterval(() => {
        console.log('deleting');
        //setDotArray([...dotArray.slice(1)]);
        console.log(dotArray);
        // if (dotArray.length) {
        //   setDotArray(dotArray.slice(1));
        //   //console.log('5 seconds');
        //   //console.log(dotArray);
        // }
      }, 7000);
    }
    setStart(false);
  }, []);
  
  return (
    <div className="game">
      {dotArray.map((dot, idx) => {
        return <Dot key={idx} />
      })}
    </div>
  );
  
}

export {Game};