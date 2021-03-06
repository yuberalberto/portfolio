import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content  } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <div className="demo-big-content">
        <Layout>
          <Header className='header-color' title='My Portfolio' scroll>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              <Link to="/About">About Me</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">Main Page</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/About">About Me</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
