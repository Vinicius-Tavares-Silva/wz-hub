import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';

class App extends React.Component{


componentDidMount() {
  // api.getPlayerWeeklyStats('ViniZika%2311929','battle');
}

handleClick() {
  console.log('clicou');
  // api.getPlayerStats('ViniZika%2311929','battle');
  console.log(api.getMatch('11269005300838557187'));
}
  

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <button onClick={() => this.handleClick()}>Request</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );}
}

export default App;
