import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Myoptions from './myoptions';
import Mypreferences from './mypreferences';


class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Mypreferences />
          <Myoptions />
        </div>
    );
  }
}

export default App;
