import React, { Component } from 'react';
import './App.css';
import FourteenerCard from './fourteenerCard';

export class Myoptions extends Component {

constructor (props) {
  super(props);
  this.state = {
    
  }
}

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
