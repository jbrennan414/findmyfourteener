import React, { Component } from 'react';
import './App.css';
import Header from './header';
// import Myoptions from './myoptions';
import Mypreferences from './mypreferences';

class App extends Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      hikeDistance: '40',
      distanceFromDenver:'300',
      altitude:'14439',
      totalGain:'6000',
    };
  }
  
  handleData(data) {
    var preferenceKey = Object.keys(data)[0];
    var preferenceValue = Object.values(data)[0];

    this.setState({
      [preferenceKey]: preferenceValue
    });
  }
  
  render() {
    return (
      <div>
        <Header />
        <Mypreferences handlerFromParent={this.handleData} /> 
        <h5>Hike Distance:<br />{this.state.hikeDistance}</h5>
        <h5>Distance from Denver:<br />{this.state.distanceFromDenver}</h5>
        <h5>Altitude:<br />{this.state.altitude}</h5>
        <h5>Total Gain:<br />{this.state.totalGain}</h5>
        <h5></h5>
      </div>
    );
  }
}

export default App;