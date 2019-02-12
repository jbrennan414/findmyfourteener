import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Myoptions from './myoptions';
import Mypreferences from './mypreferences';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: "Default parent state"
    };
    
    this.childHandler = this.childHandler.bind(this)
  }

  childHandler(dataFromChild) {
      console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
      this.setState({
          data: dataFromChild
      },() => console.log('Updated Parent State:', this.state));
  }

  render() {

    console.log('@@@@@@@ this.state', this.state);
      return (
        <div>
          <Header />
          <Myoptions action={this.childHandler} />
        </div>
      )
  }
}

export default App;