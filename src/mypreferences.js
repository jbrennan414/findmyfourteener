import React, { Component } from 'react';
import './App.css';

class Mypreferences extends Component {
    constructor(props){
        super(props);
        this.state = { 
            hikeDistance: '40',
            distanceFromDenver:'300',
            altitude:'14439',
            totalGain:'6000',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value});

    }


  render() {

    return (
      <div className="preferences">
        <h3>WHAT CHU WANT</h3>
            <label>Hike Distance</label>
            <input
                name="hikeDistance"
                type="range"
                id="hikeDistance"
                min="0"
                max="40"
                onChange={this.handleChange}
                value={this.state.hikeDistance}
            /><br />
            <label>Distance From Denver</label>
            <input
                name="distanceFromDenver"
                type="range"
                id="distanceFromDenver"
                min="0"
                max="300"
                onChange={this.handleChange}
                value={this.state.distanceFromDenver}
            /><br />
           <label>Altitude</label>
            <input
                name="altitude"
                type="range"
                id="altitude"
                min="14000"
                max="14439"
                onChange={this.handleChange}
                value={this.state.altitude}
            /><br />
            <label>Total Gain</label>
            <input
                name="totalGain"
                type="range"
                id="totalGain"
                min="400"
                max="6000"
                onChange={this.handleChange}
                value={this.state.totalGain}
            />


      </div>
    );
  }
}

export default Mypreferences;
