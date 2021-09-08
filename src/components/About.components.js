import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {IconContext} from 'react-icons';
import {VscDebugStart} from 'react-icons/vsc';
class About extends Component{
  constructor(props){
    super(props);
  }

    render(){
        return (
          
          <div className = "about">
          <div className="container h-100" >
            
              <div className="row h-100 align-items-center">
              <Container>
                <Row >
                <Col md={{ span: 0, offset :0}}>
                <img src={this.props.pic} className="img-thumbnail" alt="Me" width ="200" height = "200"/>
               
                <div> 
                  <br>
                  </br>
        <p style= {{color:'black',fontFamily:'Courier New, Courier, monospace',fontSize: "medium" }} > Technologies I Love: </p>

                  

                  
                  <ul className = "list-inline" style= {{color:'black',fontFamily:'Courier New, Courier, monospace',fontSize: "medium" }}>
                  <li className = "list-inline-item">
                    <VscDebugStart></VscDebugStart>
                    Python
                    </li>
                  <li className = "list-inline-item">
                  <VscDebugStart></VscDebugStart>
                    Java
                    </li>
                  <li className = "list-inline-item">
                  <VscDebugStart></VscDebugStart>
                    C++
                    </li>
                    <li className = "list-inline-item">
                    <VscDebugStart></VscDebugStart>
                    JavaScript
                    </li>
                  <li className = "list-inline-item">
                  <VscDebugStart></VscDebugStart>
                    Django/Spring/Express/React
                  </li>
                  <li className = "list-inline-item">
                  <VscDebugStart></VscDebugStart>
                    SQL/MongoDB/Databases
                  </li>
                  <li className = "list-inline-item">
                  <VscDebugStart></VscDebugStart>
                    Linux
                  </li>
                  </ul>
                 


                  
                </div>
                </Col>
                
                <Col md={{ span: 0, offset :0}}>
                <div className = "Container">

                <div className = "myPara">
                  
                  <p>About Me</p>
                  <br></br>
                  
                <p >
                
                

                
                Growing up in an immigrant family, I saw my family struggle, improve, then finally thrive. During this time I have been taught 
                three things that I will always carry with me into my proffessional career. First, the importance of hard work (I know its pretty self explanatory)
                but it's important for me to make the programs not only run but work harder to make clean and redable code. Second, would be to have a passion for advancement
                This has fueled my thirst for knowledge throughout my life. I always want to know diffrent technologies, work in diffrent areas of computer
                science and improve myself in areas I do know, never settling for the bare minimum. Lastly, was to always respect and put people first. 
                Respecting the people I work with, valuing them and their input is at the core of who I am in a work environment. And remembering who I am doing my 
                work for is my drive. Why else do we do the work we do in computer science if it's not for the advancement of human kind? 
                <br>
                </br>
                On a lighter note I love physics, mathematics, and knowing how the world works. I also do not like talking about myself on the internet so that is it.

      
          

                </p>
            
              </div> 
              
              
              
              </div>
              </Col>
        
              
              </Row>
              </Container>
              
              </div>
              </div>
              
            
            </div>
      
     
    
    )};


}
export default About;