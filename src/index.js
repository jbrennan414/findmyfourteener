import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

ReactDOM.render(<App />, document.getElementById('root'));

function initializeReactGA() {
    console.log("Initializing Google Analytics")
    ReactGA.initialize('UA-138338052-1');
    ReactGA.pageview('/homepage');
}

initializeReactGA();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
