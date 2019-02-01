import React, { Component } from 'react';
import './App.css';

class Mypreferences extends Component {
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
            /><br />
            <label>Distance From Denver</label>
            <input
                name="distanceFromDenver"
                type="range"
                id="distanceFromDenver"
                min="0"
                max="300"
            /><br />
           <label>Altitude</label>
            <input
                name="altitude"
                type="range"
                id="altitude"
                min="14000"
                max="14439"
            /><br />
            <label>Total Gain</label>
            <input
                name="totalGain"
                type="range"
                id="totalGain"
                min="400"
                max="3000"
            />


      </div>
    );
  }
}

export default Mypreferences;
