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
      fromChild: '',
      inputField: '',
      hikeDistance: '40',
      distanceFromDenver:'300',
      altitude:'14439',
      totalGain:'6000',
    };
  }
  
  handleData(data) {
    console.log('heres the handleData -->', data);

    this.setState({
      fromChild: data,
      inputField: data,
      hikeDistance: data,
      distanceFromDenver: data,
      altitude: data,
      totalGain: data,
    });
  }
  
  render() {
    return (
      <div>
        <Header />
        <Mypreferences handlerFromParent={this.handleData} /> 
        <h5>Received by parent:<br />{this.state.fromChild}</h5>
      </div>
    );
  }
}

export default App;