import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Grid, Cell } from 'react-mdl';

function App() {
  

  return (
    
    <div className= "header-color" >

      <Layout>
          <Header className="header-color" title="Maria Rosario C. Meneses" scroll>
          <input type="text" placeholder="Search.."></input>
              <Navigation className='txt'>
                  <a href="/" >Home</a>
              </Navigation>
                    <img
                    src='./Images/logo.png'
                    alt="avatar"
                    className="avatar-img"
                    height="20%" 
                    />
              
              
          </Header>
          
          
          <Drawer title="Title">
              <Navigation>
                  <a href="/sorry">Empowerment technology</a>
                  <a href="word">10 uncommonly used filipino words</a>
                  <a href="/sorry">Performance task</a>
                  <a href="/sorry">Filipino words</a>
                  <a href="/sorry">Blog</a>
                  <a href="/sorry">Video</a>
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

export default App;
