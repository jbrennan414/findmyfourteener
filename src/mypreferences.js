import React, { Component } from 'react';
import './App.css';
class Mypreferences extends Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.state = {
        inputField: '',
        hikeDistance: '40',
        distanceFromDenver:'300',
        altitude:'14439',
        totalGain:'6000',
      };
    }
    
    submitHandler(evt) {
      evt.preventDefault();
      // pass the input field value to the event handler passed
      // as a prop by the parent (App)
      this.props.handlerFromParent(this.state.inputField);
      
      this.setState({
        inputField: '',
        hikeDistance:'',
      });
    }
    
    handleChange(event) {

      const target = event.target;
      const name = target.name;
      const value = target.value;

      console.log("111111111111", name, value)

      this.setState({
        [name]: value
      });

      this.props.handlerFromParent(this.state[name]);
    }

    render() {
      return (
        <div className="preferences">
          <label>Hike Distance</label>
          <input
            name="hikeDistance"
            type="range"
            id="hikeDistance"
            min="0"
            max="40"
            onChange={this.handleChange}
            value={this.state.hikeDistance}
          />
          <br />
          <label>Distance From Denver</label>
          <input
            name="distanceFromDenver"
            type="range"
            id="distanceFromDenver"
            min="0"
            max="300"
            onChange={this.handleChange}
            value={this.state.distanceFromDenver}
          />
          <br />
          <label>Altitude</label>
          <input
            name="altitude"
            type="range"
            id="altitude"
            min="14000"
            max="14439"
            onChange={this.handleChange}
            value={this.state.altitude}
          />
          <br />
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
          <h5>Visible in child:<br />{this.state.inputField}</h5>
        </div>
      );
    }
  }
  
  export default Mypreferences;