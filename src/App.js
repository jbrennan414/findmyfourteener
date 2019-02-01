// import React, { Component } from 'react';
// import './App.css';
// import Header from './header';

import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Myoptions from './myoptions';
import Mypreferences from './mypreferences';



const fourteeners = [
  {name:'Mt. EVANS', hikeDistance: "9", distanceFromDenver:"204", altitude:"14200", totalGain:"2319"},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Mypreferences />
        <Myoptions 
          {...fourteeners}
        />
      
      
      </div>
    )
  }
}

export default App;