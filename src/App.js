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
          {name:'Mt. EVANS', hikeDistance: "9", distanceFromDenver:"204", altitude:"14200", totalGain:"2319"},
        ],
      };
  }

  render() {
    var filteredMountains = this.state.fourteeners;

    return (
        <div>
          <Header />
          <Mypreferences />
          <Myoptions 
            {...this.state}
          />
        </div>
    );
  }
}

export default App;
