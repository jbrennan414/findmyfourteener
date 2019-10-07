import React from 'react';
import './App.css';

export const FourteenerCard = ({ mountain }) => {
  const { name, imageUrl, hikeDistance, distanceFromDenver, altitude, totalGain, range, rank } = mountain;
  return (
    <div className="fourteenerCard">
      <div className="mtnTitleBar">
        <h3>{name}</h3>
      </div>
      <img style={styles.img} src={imageUrl} alt={`${name} image`}></img>
      <p>Distance: {hikeDistance} mi </p>
      <p>Distance from Denver: {distanceFromDenver} mi</p>
      <p>Peak Altitude: {altitude} ft</p>
      <p>Total Gain: {totalGain} ft</p>
      <p>Range: {range}</p>
      <p>Rank: {rank}</p>
    </div>
  )
}

const styles = {
  img: {
    maxHeight: '187.5px',
    maxWidth: '280px'
  }
}

export default FourteenerCard;