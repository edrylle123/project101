import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        // <div className="projects-grid">
        //   Project 1
        //   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
        //     <CardText>
        //       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        //     </CardText>
        //     <CardActions border>
        //       <Button colored>GitHub</Button>
        //       <Button colored>CodePen</Button>
        //       <Button colored>Live Demo</Button>
        //     </CardActions>
        //     <CardMenu style={{color: '#fff'}}>
        //       <IconButton name="share" />
        //     </CardMenu>
        //   </Card>

        //   {/* Project 2 */}
        //   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
        //     <CardText>
        //       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        //     </CardText>
        //     <CardActions border>
        //       <Button colored>GitHub</Button>
        //       <Button colored>CodePen</Button>
        //       <Button colored>Live Demo</Button>
        //     </CardActions>
        //     <CardMenu style={{color: '#fff'}}>
        //       <IconButton name="share" />
        //     </CardMenu>
        //   </Card>

        //   {/* Project 3 */}
        //   <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
        //     <CardText>
        //       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        //     </CardText>
        //     <CardActions border>
        //       <Button colored>GitHub</Button>
        //       <Button colored>CodePen</Button>
        //       <Button colored>Live Demo</Button>
        //     </CardActions>
        //     <CardMenu style={{color: '#fff'}}>
        //       <IconButton name="share" />
        //     </CardMenu>
        //   </Card>
        // </div>
        <div className="projects-grid">
          <h1>
            GitHub
          </h1>
          <a href="www.github.com/edrylle123"> Github Repository</a>
          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2Fwoobmo_github-logo-png-cat-transparent-png%2F&psig=AOvVaw2tGmsl96tQyqwIWLdvB4kx&ust=1599011947596000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDCnO3txusCFQAAAAAdAAAAABAD)' }} >React Project #1</CardTitle>
              <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}

        </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Devpost</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Github</Tab>
          <Tab>Devpost</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;