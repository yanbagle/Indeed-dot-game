import React, { useState } from 'react';
import './dot.css';

function Dot() {
  const margin = Math.floor(Math.random() * 300) + 'px';
  return (
    <div 
      style={{ marginLeft: margin }} 
      className="dot">
    </div>
  );
}

export {Dot};