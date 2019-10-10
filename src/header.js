import React, { Component } from 'react';
import './App.css';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>FIND MY <br/ >FOURTEENER</h1>
        <img src={require('./mountain.svg')} alt="Mountain outline"/>
      </div>
    );
  }
}

export default Header;
