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
            
            <div class="row top top-buffer">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                <div className="col-12 text-center inside">
                    <div className = "text1">
                        
                        <header>
                            <p className = "start">Hi , I am Oscar Gandara and </p>
                        </header>
                    
                    <Typical className = "switch"
                        
                        steps={['I am a',1, 'I am a problem solver',2500, 'I am a persistent learner', 2500, 'I am a software developer', 2500, ]}
                        loop={Infinity}
                        wrapper="p"
                      />
                    </div>
                   <p className = "Intro">
                       I am  a programmer based in Denver, CO. I love bulding amazing and creative programs.
                       
                   </p>
                
                    <div className= "arrow">
                        <p>Learn More</p>
                        <Link
                            id = "aboutLink"
                            activeClass=""
                            to = "about"
                            spy= {true}
                            smooth = {true}
                            offset = {-70}
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
            
          </div>
            
        
    )}
}

export default Main;
