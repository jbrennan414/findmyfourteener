import React, { Component } from 'react';
import FourteenerCard from './fourteenerCard';
import fourteeners from './Mountains.json'
class Myoptions extends Component {

  render() {

    const { data } = this.props;

    const myOptions = fourteeners.filter(fourteener =>
      Number(fourteener.hikeDistance) <= data.hikeDistance &&
      Number(fourteener.distanceFromDenver) <= data.distanceFromDenver &&
      Number(fourteener.altitude) <= data.altitude &&
      Number(fourteener.totalGain) <= data.totalGain
    );

    const className = data.expanded ? "expanded" : "collapsed";
    return (
      <div className="myOptions">
        {myOptions.map((m, index) => (
          <FourteenerCard key={index} mountain={m} index={index} className={className} />
        ))}
      </div>
    )
  }
}

export default Myoptions;