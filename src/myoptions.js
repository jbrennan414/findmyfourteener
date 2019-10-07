import React, { Component } from 'react';
import FourteenerCard from './fourteenerCard';
import fourteeners from './Mountains.json'
class Myoptions extends Component {

  render() {

    var myOptions = fourteeners.filter(fourteener => 
      Number(fourteener.hikeDistance) < this.props.data.hikeDistance && 
      Number(fourteener.distanceFromDenver) < this.props.data.distanceFromDenver &&
      Number(fourteener.altitude) < this.props.data.altitude && 
      Number(fourteener.totalGain) < this.props.data.totalGain
    );

      return (
        <div className="myOptions">
            {myOptions.map((m, index) =>(
              <FourteenerCard key={index} mountain={m} index={index} />
            ))}
        </div>
      )
  }
}

export default Myoptions;