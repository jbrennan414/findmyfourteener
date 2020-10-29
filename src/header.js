import React, { Component } from 'react';
import './App.css';
import MountainLogo from './mountain.svg';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>FIND MY <br/ >FOURTEENER</h1>
        <img src={MountainLogo} alt="Mountain outline"/>
      </div>
    );
  }
}

export default Header;
