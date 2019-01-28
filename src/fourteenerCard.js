import React, { Component } from 'react';
import './App.css';

// export class FourteenerCard extends Component {
export const FourteenerCard = ( props ) => (
      console.log('11111 props', props.fourteeners),
      <div className="fourteenerCard">
        <div className="mtnTitleBar">
          <h3>{props.fourteeners[0].name}</h3>
        </div>
          <img src="https://www.denverpost.com/wp-content/uploads/2016/04/20150901__p_27a2bcf7-fcff-43c3-82c0-6dd9c2e241a2lsoriginalph.jpg?w=480"></img>
          <p>This is where a we'll include some details about the mountain</p>
          <p>Distance: {props.fourteeners[0].hikeDistance} mi </p>
          <p>Distance from Denver: {props.fourteeners[0].distanceFromDenver} mi</p>
          <p>Peak Altitude: {props.fourteeners[0].altitude} ft</p>
          <p>Total Gain: {props.fourteeners[0].totalGain} ft</p>
      </div>
)

export default FourteenerCard;
