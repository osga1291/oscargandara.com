import React, { Component } from 'react';
import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer.component';
class About extends Component{
  constructor(props){
    super(props);
  }

    render(){
        return (
          
          <header className="masthead" id = "about">
          <div className="container h-100">
            
              <div className="row h-100 align-items-center">
              <Container>
                <Row >
                <Col md={{ span: 0, offset :0}}>
                <img src={this.props.pic} class="img-thumbnail" alt="Me" width ="200" height = "200"/>
                </Col>
                <Col md={{ span: 0, offset :0}}>
                <div className = "myPara">
                  
                  <p>About Me</p>
                  <br></br>
                  
                <p>
                
              
                I am Oscar 
              
          
                I know a thing or two about programming.
                </p>
            
              </div> 
              
              
              
      
              </Col>
        
              
              </Row>
              </Container>
              
              </div>
              </div>
              
            
            </header>
      
     
    
    )};


}
export default About;