import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, NavbarBrand, Container, Button } from 'react-bootstrap'
import { render } from "react-dom";
import "react-icons/im";
import  'react-icons/ai';
import 'react-icons/vsc';
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom';
import {IconContext} from "react-icons";
import { VscGithub } from 'react-icons/vsc';
import 'react-icons/ai'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

class Footer extends Component{
    constructor(props){
        super(props);
        
    }

    handleClick = (website) => {
        
            
        window.location.assign(website); };


    

    
    
    
    render(){


        return(
            
            <footer className = "myFooter">
                  <ul className = "list-inline">
                    <Router>
                  <IconContext.Provider value = {{ color: 'white', size: '30px', className: "icon",
                  }}>
                      <li className = "list-inline-item">
                      <AiOutlineMail type = {Button} onClick = {() => this.handleClick('mailto:ogandara99@gmail.com')} />
                        
                        </li>
                    
                        <li className = "list-inline-item">
                        
                            <VscGithub type = {Button}  onClick ={() => this.handleClick('https://github.com/osga1291')}/>
                        </li>
                    
                      <li className = "list-inline-item"> 
    
                      <AiFillLinkedin type = {Button} onClick = {() => this.handleClick('https://www.linkedin.com/in/oscarmiguelgandara/')}/>
                      
                      </li>
                    
                    </IconContext.Provider>
                    </Router>
                  </ul>

                  
              </footer>
              
           

              
              
           
    )
};
       
      
}   

        

export default Footer;
