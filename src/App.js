import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';

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
      <main className="main">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            HOME
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Profile
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Cotact
          </Tab>
        </Tabs>
      </main>
      <fotter className="footer">
        <img src={logo} className="footer-logo" alt="logo" />
        <p className="footer-description">React News by RemoteWorkChannel</p>
      </fotter>
    </div>
  );
}

export default App;
