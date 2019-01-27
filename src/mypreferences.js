import React, { Component } from 'react';
import './App.css';

class Mypreferences extends Component {
  render() {
    return (
      <div className="preferences">
        <h5>Filter</h5>
            {/* hike distance */}
            <label
                for="hikeDistance"
            >Hike Distance</label>
            <input
                name="hikeDistance"
                type="range"
                id="hikeDistance"
                min="0"
                max="40"
            /><br />
            <label
                for="distanceFromDenver"
            >Distance From Denver</label>
            <input
                name="distanceFromDenver"
                type="range"
                id="distanceFromDenver"
                min="0"
                max="300"
            /><br />
           <label
                for="altitude"
            >Altitude</label>
            <input
                name="altitude"
                type="range"
                id="altitude"
                min="14000"
                max="14439"
            /><br />
            <label
                for="Total Gain"
            >Total Gain</label>
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
