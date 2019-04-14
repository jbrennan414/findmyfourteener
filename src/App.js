import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Myoptions from './myoptions';
import Mypreferences from './mypreferences';
import ReactGA from 'react-ga';


class App extends Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      hikeDistance: '17',
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
    ReactGA.pageview('/homepage');
    ReactGA.initialize('UA-138338052-1'); // Here we should use our GA id



    return (
      <div>
        <Header />
        <Mypreferences handlerFromParent={this.handleData} /> 
        <Myoptions data={this.state} />
      </div>
    );
  }
}

export default App;