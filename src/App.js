import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Myoptions from './myoptions';
import Mypreferences from './mypreferences';

class App extends Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      hikeDistance: '18',
      distanceFromDenver: '400',
      altitude: '14440',
      totalGain: '6300',
      expanded: true,
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
    const { expanded } = this.state;
    return (
      <div>
        <Header />
        <Mypreferences handlerFromParent={this.handleData} expanded={expanded} />
        <Myoptions data={this.state} />
      </div>
    );
  }
}

export default App;