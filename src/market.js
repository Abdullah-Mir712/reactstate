
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './Room';

export function Market({cityName,cityName2}) {
  return (
    <div >
      <h1>
          This market is in {cityName}
      </h1>
      <h1>
          This market is in {cityName2}
      </h1>
    </div>
  );
}


