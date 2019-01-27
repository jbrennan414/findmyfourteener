import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FourteenerCard from './fourteenerCard';

class Myoptions extends Component {
  render() {
    return (
      <div className="App">

        <FourteenerCard />
        <FourteenerCard />
        <FourteenerCard />
        
      </div>
    );
  }
}

export default Myoptions;
