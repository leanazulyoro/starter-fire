import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import charmander from './assets/charmander.gif';

const Charmander = () => (
  <>
    <h1>Charmander #004</h1>
    <img src={charmander} />
  </>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Charmander />
      </div>
    );
  }
}

export default App;
