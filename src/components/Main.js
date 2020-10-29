import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './landingpage';
import word from './word';
import sorry from './sorry'



const Main = () => (
  <BrowserRouter>
  
  <Switch>
    <Route exact path="/" component={LandingPage} />

    <Route path="/word" component={word} />
    <Route path="/sorry" component={sorry} />


  </Switch>
  </BrowserRouter>
)

export default Main;