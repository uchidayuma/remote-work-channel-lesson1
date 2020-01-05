import React,{Component} from 'react';

import Header from './Header';
import Footer from './Footer';
import TabComponent from './TabComponent';

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
        <Header />
        <main className="main">
          <TabComponent newsCards={newsCards} tabClick={this.tabClick}/>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
