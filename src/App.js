import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 className="header-title">React News</h1>
          <p className="header-description">Powered by NewsApi</p>
        </div>
      </header>
      <main className="main"></main>
      <fotter className="footer">
        <img src={logo} className="footer-logo" alt="logo" />
        <p className="footer-description">React News by RemoteWorkChannel</p>
      </fotter>
    </div>
  );
}

export default App;
