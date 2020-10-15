import React, {Component} from 'react';
import Typical from 'react-typical';
import { Link, animateScroll as scroll } from "react-scroll";
import About from './About.components';
import Header from './Header.component';
import Footer from './Footer.component';
import 'react-icons/ti';
import "bootstrap/dist/css/bootstrap.min.css";
import { TiArrowDown } from 'react-icons/ti';

class Main extends Component{
   
    render(){
        return(
            
            <header className="masthead" id = "main">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                <div className="col-12 text-center inside">
                    <div className = "text1">
                        
                        <header>
                            <p>Hi , I am Oscar Gandara and </p>
                        </header>
                    
                    <Typical
                        
                        steps={['I am a',1, 'I am a software developer', 2500, 'I am a web developer',2500]}
                        loop={Infinity}
                        wrapper="p"
                      />
                    </div>
                   <p className = "Intro">
                       I am  a programmer based in Denver, CO. I love bulding amazing and creative programs. My passion is learning new technologies and languages.qqqqqqqqqqqqqqqqqqqqqqqqq 
                       
                   </p>
                
                    <div className= "arrow">
                        <p>Learn More</p>
                        <Link
                            id = "aboutLink"
                            activeClass=""
                            to = "about"
                            spy= {true}
                            smooth = {true}
                            offset = {0}
                            duration = {400}> 
                        <TiArrowDown size="50px"/>
                        
                        </Link>
                        
                    
                   </div>
                
                   <footer className = 'fixed-bottom'>
                    <Footer/>
                    </footer>     
                
                </div>
              
                
              
                </div>
                

               
                
            </div>
            
            
           
            </header>
        
    )}
}

export default Main;
