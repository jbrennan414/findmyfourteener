import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Myoptions from './myoptions';


class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Myoptions />
        </div>
    );
  }
}

export default App;
