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
  {name:'MT. SHAVANO', hikeDistance: "7.50", distanceFromDenver:"208", altitude:"14229", totalGain:"4000"},
  {name:'MT. PRINCETON', hikeDistance: "6.50", distanceFromDenver:"208", altitude:"14197", totalGain:"3200"},
  {name:'MT. BELFORD', hikeDistance: "8.00", distanceFromDenver:"144", altitude:"14197", totalGain:"4500"},
  {name:'CRESTONE NEEDLE', hikeDistance: "8.00", distanceFromDenver:"144", altitude:"14197", totalGain:"4300"},
  {name:'MT. YALE', hikeDistance: "9.50", distanceFromDenver:"169", altitude:"14196", totalGain:"4300"},
  {name:'MT. BROSS', hikeDistance: "3.50", distanceFromDenver:"108", altitude:"14172", totalGain:"2250"},
  {name:'KIT CARSON PEAK', hikeDistance: "9.50", distanceFromDenver:"220", altitude:"14165", totalGain:"2850"},
  {name:'EL DIENTE PEAK', hikeDistance: "5.00", distanceFromDenver:"352", altitude:"14159", totalGain:"3200"},
  {name:'MAROON PEAK', hikeDistance: "8.00", distanceFromDenver:"229", altitude:"14156", totalGain:"4556"},
  {name:'TABEGUACHE PEAK', hikeDistance: "7.50", distanceFromDenver:"209", altitude:"14155", totalGain:"4600"},
  {name:'MT. OXFORD', hikeDistance: "11.50", distanceFromDenver:"143", altitude:"14153", totalGain:"5800"},
  {name:'MT. SNEFFELS', hikeDistance: "6.50", distanceFromDenver:"342", altitude:"14150", totalGain:"2900"},
  {name:'MT. DEMOCRAT', hikeDistance: "2.50", distanceFromDenver:"112", altitude:"14148", totalGain:"2150"},
  {name:'CAPITOL PEAK', hikeDistance: "17.00", distanceFromDenver:"230", altitude:"14130", totalGain:"5300"},
  {name:'PIKES PEAK', hikeDistance: "14.00", distanceFromDenver:"230", altitude:"14110", totalGain:"4300"},
  {name:'SNOWMASS MOUNTAIN', hikeDistance: "9.00", distanceFromDenver:"231", altitude:"14092", totalGain:"4500"},
  {name:'WINDOM PEAK', hikeDistance: "12.00", distanceFromDenver:"77", altitude:"14087", totalGain:"2800"},
  {name:'MT. EOLUS', hikeDistance: "17.00", distanceFromDenver:"355", altitude:"14083", totalGain:"6100"},
  {name:'CHALLENGER POINT', hikeDistance: "12.50", distanceFromDenver:"220", altitude:"14081", totalGain:"5400"},
  {name:'MT. COLUMBIA', hikeDistance: "11.50", distanceFromDenver:"149", altitude:"14073", totalGain:"4250"},
  {name:'MISSOURI MOUNTAIN', hikeDistance: "10.50", distanceFromDenver:"157", altitude:"14067", totalGain:"4500"},
  {name:'HUMBOLDT PEAK', hikeDistance: "8.00", distanceFromDenver:"180", altitude:"14064", totalGain:"4300"},
  {name:'MT. BIERSTADT', hikeDistance: "5.00", distanceFromDenver:"64", altitude:"14060", totalGain:"3000"},
  {name:'CONUNDRUM PEAK', hikeDistance: "12.00", distanceFromDenver:"236", altitude:"14060", totalGain:"4400"},
  {name:'SUNLIGHT PEAK', hikeDistance: "17.00", distanceFromDenver:"335", altitude:"14059", totalGain:"6000"},
  {name:'HANDIES PEAK', hikeDistance: "5.00", distanceFromDenver:"281", altitude:"14048", totalGain:"2800"},
  {name:'CULEBRA PEAK', hikeDistance: "5.00", distanceFromDenver:"258", altitude:"14047", totalGain:"2700"},
  {name:'MT. LINDSEY', hikeDistance: "8.25", distanceFromDenver:"222", altitude:"14042", totalGain:"3500"},
  {name:'ELINGWOOD POINT', hikeDistance: "11.60", distanceFromDenver:"269", altitude:"14042", totalGain:"5500"},
  {name:'NORTH EOLUS', hikeDistance: "12.00", distanceFromDenver:"355", altitude:"14039", totalGain:"2800"},
  {name:'LITTLE BEAR PEAK', hikeDistance: "14.00", distanceFromDenver:"220", altitude:"14037", totalGain:"6200"},
  {name:'MT. SHERMAN', hikeDistance: "4.50", distanceFromDenver:"123", altitude:"14036", totalGain:"2150"},
  {name:'REDCLOUD PEAK', hikeDistance: "7.00", distanceFromDenver:"281", altitude:"14034", totalGain:"4600"},
  {name:'PYRAMID PEAK', hikeDistance: "8.25", distanceFromDenver:"229", altitude:"14018", totalGain:"4500"},
  {name:'MT. WILSON', hikeDistance: "12.00", distanceFromDenver:"352", altitude:"14017", totalGain:"4900"},
  {name:'WETTERHORN PEAK', hikeDistance: "6.50", distanceFromDenver:"352", altitude:"14015", totalGain:"3300"},
  {name:'SAN LUIS PEAK', hikeDistance: "11.25", distanceFromDenver:"275", altitude:"14014", totalGain:"3400"},
  {name:'NORTH MAROON PEAK', hikeDistance: "9.25", distanceFromDenver:"229", altitude:"14014", totalGain:"4500"},
  {name:'MT. OF THE HOLY CROSS', hikeDistance: "12.00", distanceFromDenver:"111", altitude:"14005", totalGain:"5600"},
  {name:'HURON PEAK', hikeDistance: "6.50", distanceFromDenver:"152", altitude:"14003", totalGain:"3500"},
  {name:'SUNSHINE PEAK', hikeDistance: "7.00", distanceFromDenver:"275", altitude:"14001", totalGain:"4600"},
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