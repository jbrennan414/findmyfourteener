import React, { Component } from 'react';
import './App.css';
import FourteenerCard from './fourteenerCard';

const Myoptions = (props) => (

  <div className="App">

    <FourteenerCard
      {...props}
    />
    
  </div>
);

export default Myoptions;
