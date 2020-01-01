import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';

import { fetch } from './Api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }
  
  async componentDidMount(){
    const news = await fetch()
    this.setState({'news': news})
  }
  
  tabClick = async (eventKey) =>{
    const news = await fetch(eventKey)
    this.setState({'news': news})
  }
  
  render(){
    const newsCards = this.state.news.map((val, index) =>
      <Col xs="12" sm="6" md="4" lg="3" key={index} >
        <a href={val.url} target='blank'>
          <Card className=''>
            <Card.Img className='card-image' variant="top" src={val.urlToImage} />
            <Card.Body>
              <Card.Title className='card-title'>{val.title}</Card.Title>
              <Card.Text className='card-text'>{val.description}</Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Col>
    )
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
          <Tabs defaultActiveKey="home" onSelect={this.tabClick} id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <Row>
                {newsCards}
              </Row>
            </Tab>
            <Tab eventKey="business" title="ビジネス">
              <Row>
                {newsCards}
              </Row>
            </Tab>
            <Tab eventKey="entertainment" title="エンタメ">
              <Row>
                {newsCards}
              </Row>
            </Tab>
          </Tabs>
        </main>
        <footer className="footer">
          <img src={logo} className="footer-logo" alt="logo" />
          <p className="footer-description">React News by RemoteWorkChannel</p>
        </footer>
      </div>
    );
  }
}
export default App;
