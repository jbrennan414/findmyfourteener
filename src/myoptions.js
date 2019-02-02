import React, { Component } from 'react';
import FourteenerCard from './fourteenerCard';

const fourteeners = [
  {name:'MT. ELBERT', hikeDistance: "8.5", distanceFromDenver:"60", altitude:"14433", totalGain:"4150"},
  {name:'MT. MASSIVE', hikeDistance: "7.25", distanceFromDenver:"135", altitude:"14421", totalGain:"3950"},
  {name:'MT. HARVARD', hikeDistance: "11.50", distanceFromDenver:"147", altitude:"14420", totalGain:"4250"},
  {name:'BLANCA PEAK', hikeDistance: "11.00", distanceFromDenver:"246", altitude:"14345", totalGain:"3900"},
  {name:'LA PLATA PEAK', hikeDistance: "7.00", distanceFromDenver:"148", altitude:"14336", totalGain:"3380"},
  {name:'UNCOMPAHGRE PEAK', hikeDistance: "7.50", distanceFromDenver:"269", altitude:"14309", totalGain:"3000"},
  {name:'CRESTONE PEAK', hikeDistance: "8.00", distanceFromDenver:"176", altitude:"14294", totalGain:"4300"},
  {name:'MT. LINCOLN', hikeDistance: "4.75", distanceFromDenver:"108", altitude:"14286", totalGain:"3400"},
  {name:'GRAYS PEAK', hikeDistance: "6.50", distanceFromDenver:"63", altitude:"14270", totalGain:"3000"},
  {name:'MT. ANTERO', hikeDistance: "16.00", distanceFromDenver:"156", altitude:"14269", totalGain:"5200"},
  {name:'TORREYS PEAK', hikeDistance: "6.00", distanceFromDenver:"63", altitude:"14267", totalGain:"3000"},
  {name:'CASTLE PEAK', hikeDistance: "12.00", distanceFromDenver:"236", altitude:"14265", totalGain:"4400"},
  {name:'QUANDARY PEAK', hikeDistance: "2.00", distanceFromDenver:"99", altitude:"14265", totalGain:"2575"},
  {name:'MT. EVANS', hikeDistance: "2.00", distanceFromDenver:"60", altitude:"14264", totalGain:"1500"},
  {name:'LONGS PEAK', hikeDistance: "13.00", distanceFromDenver:"75", altitude:"14255", totalGain:"5300"},
  {name:'MT. WILSON', hikeDistance: "6.00", distanceFromDenver:"348", altitude:"14246", totalGain:"800"},
  {name:'MT. CAMERON', hikeDistance: "2.50", distanceFromDenver:"348", altitude:"14238", totalGain:"800"},

]

class Myoptions extends Component {
  render(props) {
    return(
      <div>
        {fourteeners.map((m, index) =>(
          <FourteenerCard key={index} mountain={m} index={index} />
        ))}
      </div>
    )
  }
}
export default Myoptions