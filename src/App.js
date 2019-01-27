import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Myoptions from './myoptions';
import Mypreferences from './mypreferences';


export class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        fourteeners: [
          {name:'Mt. Evans', hikeDistance: "9", distanceFromDenver:"204", altitude:"14200", totalGain:"2319"},
          {name:'Longs Peak', hikeDistance:"12", distanceFromDenver:"49", altitude:"14300", totalGain:"2194"},
          {name:'Mt. Lincoln', hikeDistance: "2", distanceFromDenver:"90", altitude:"14311", totalGain:"1800"}
        ]
      }
  }


  render() {
    return (
        <div>
          <Header />
          <Mypreferences />
          <Myoptions />
        </div>
    );
  }
}

export default App;
