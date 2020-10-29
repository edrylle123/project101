import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%'}}>
        <Grid className="landing-grid">
        
          <Cell col={6}>
            <div style={{paddingTop:'100px'}}>
              <div className="banner-text">
              <h1>
                Loading...
              </h1>
            </div>
            </div>
            
            <div className="banner-text">
              <h1>
               Loading...
              </h1>
            </div>

            <div className="banner-text">
              <h1>
                Loading...
              </h1>
            </div>

            <div className="banner-text">
              <h1>
                Loading...
              </h1>
            </div>
            
          </Cell>
          <Cell col={6}>
            <div style={{paddingTop:'100px'}}>
            <div className="banner-text">
              <h1>
              <a href='word'>10 uncommonly use Filipino Word</a>
              </h1>
            </div>
            </div>
           
            <div className="banner-text">
              <h1>
                Loading...
              </h1>
            </div>
            <div className="banner-text">
              <h1>
                Loading...
              </h1>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;