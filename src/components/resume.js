import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src='./Images/uclogo.png' 
                alt="avatar"
                style={{height: '200px',width: '500px' }}
  
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Edrylle Jann T. Ramos</h2>
            <h4 style={{color: 'grey'}}>Bachelor of Information Technology major in Web Development</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>If there a wheel there's a way</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Villa Santiago Aglipay, Quirino</p>
            <h5>Phone</h5>
            <p>0995 4211 023</p>
            <h5>Email</h5>
            <p>mr.edrylleramos@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Educational Achievement </h2>


            <Education
              startYear="November 7 - 10, 2019"
              schoolName="Zoohackathon Philippines (3rd Place) Global Competition"
              schoolDescription=" Coding to End Wildlife Trafficking"
              place="Luxent Hotel, Timog Ave. Quezon City"/>
              
            <Education
              startYear={"November 19 - 20, 2019"}
              schoolName="DOST (Regional Invention Contest and Exhibit)"
              place="Bontoc Mountain Province"
              />
            
            <Education
            startYear="February 1, 2020"
            endYear="March 28, 2020"
            schoolName="Fullstack Bootcamp"
            place="04 Escoda St., Quezon Hill Rd. 1, Cor. Naguilian Rd., Baguio City"
            />
            
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Educational Attainmanet</h2>
              <h3>Tertiary</h3>
            <Education
             schoolName="University of the Cordilleras"
              course="Bachelor of Information Technology major in Web Development"
              place="Gov. Pack Rd., Baguio City"
              startYear="September 29, 2020"
              />
              <h3>Secondary</h3>
              <Education
               schoolName="Aglipay High School"
               place="Progreso Aglipay, Quirino"
               startYear="April 2015"
                />

            <h3>Primary</h3>
            <Education
            schoolName="Villa Santiago Elementary School"
            schoolDescription="Villa Santiago Aglipay, Quirino"
            startYear="March 2011"
            course="Salutatorian"

            />
              <hr style={{borderTop: '3px solid #e22947'}} />



              <h2>Skills</h2>
              <Skills
                skill="Knowledgable in Online Learning using Edmodo, Google Classrom, Trello, Schoology"
                
                />
                <Skills
                  skill="Knowledgable in HTML/CSS, JAVASCRIPT, LARAVEL, VUEJS, PHP, REACT JS, REACT NATIVE, RUBY ON RAILS"
                  
                  />
                  <Skills
                    skill="Knowledgable in MySQL Database"
                   
                    />
                    <Skills
                      skill="Knowledgable in Version Control Using Git"
                      
                      />
                    <Skills
                      skill="Knowledgable in Mobile Application Development on Andoid and IOS using React Native"
                      
                      />
                    <Skills
                      skill="Knowledgable in Video and Image Editing using Photoshop and Filmora"
                      
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;