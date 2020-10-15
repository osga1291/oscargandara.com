import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {FiTerminal} from 'react-icons/fi'
class Header extends Component{
    constructor(props){
    super(props);

    }

    
    render(){
         
 
       
        return(
            <Navbar bg = "dark" variant = "dark" fixed="top">
                <Navbar.Brand href = "/">
                    <FiTerminal color = "white" size = "30px"/>
                </Navbar.Brand>
                
                <Nav className="ml-auto ">
                
                <div className = "nav-item"> 
                     
                        
                <Link
                    id = "aboutLink"
                    activeClass=""
                    to = "main"
                    spy= {true}
                    smooth = {true}
                    offset = {0}
                    duration = {400}> Home </Link>

                


                <Link
                    id = "homeLink"
                    activeClass=""
                    to = "about"
                    spy= {true}
                    smooth = {true}
                    offset = {0}
                    duration = {400}> About </Link>


                <Link
                    id = "homeLink"
                    activeClass=""
                    to = "projects"
                    spy= {true}
                    smooth = {true}
                    offset = {-70}
                    duration = {400}> Projects </Link>

                <Link
                    id = "homeLink"
                    activeClass=""
                    to = "contact"
                    spy= {true}
                    smooth = {true}
                    offset = {0}
                    duration = {400}> Contact </Link>    
                
                <Route>
                    <a href={this.props.resume} target="_blank" rel="noopener noreferrer" download>
                        <button type="button" className="btn btn-outline-light">
                            Resume
                            </button>
                        
                    </a>
                </Route>
                            
            
    
                                
                </div>
                </Nav>
            </Navbar>
);
    }
}
export default Header;