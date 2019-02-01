import React from 'react';
import './App.css';

export const FourteenerCard = ( props ) => {

  return (
    <div className="fourteenerCard">
      <div className="mtnTitleBar">
        <h3>{props.mountain.name}</h3>
      </div>
      <img src="https://www.denverpost.com/wp-content/uploads/2016/04/20150901__p_27a2bcf7-fcff-43c3-82c0-6dd9c2e241a2lsoriginalph.jpg?w=480"></img>
      <p>Distance: {props.mountain.hikeDistance} mi </p>
      <p>Distance from Denver: {props.mountain.distanceFromDenver} mi</p>
      <p>Peak Altitude: {props.mountain.altitude} ft</p>
      <p>Total Gain: {props.mountain.totalGain} ft</p>
    </div>
  )
}

export default FourteenerCard;