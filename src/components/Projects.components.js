import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillGithub } from 'react-icons/ai';
import 'react-icons/di';
import {Button, Card} from 'react-bootstrap';
import {IconContext} from 'react-icons';
import {SiCplusplus, SiJavascript, SiMongodb, SiScala, SiSpring, SiTwilio} from 'react-icons/si';
import { FaAws, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
class Projects extends Component{
    
    handleClick = (project) => {

    var website = "https://github.com/osga1291/" + project;
            
    window.location.assign(website); };
   
    
    render(){
        return(
        <header className="masthead" id = "projects">
          <div className="container h-100">
             
    
             
              <IconContext.Provider value = {{ color: 'white', size: '30px', className: "icon"
                  }}>   

                  
                <div className="card text-white bg-dark mb-3">
                    <div className = "card-body text-right">
                        <AiFillGithub type= {Button} onClick = {() => this.handleClick("BarApp")}/> 
                        <header className = "text-center">BarApp</header>
                    

                    <div className="card-body text-left">
                    <p className="card-text">Some text inside the second card</p>
                    </div>
                </div>
                <div className= "card-footer text-center">
                    <ul className="list-inline">
                       <li className="list-inline-item">
                           <SiJavascript color = 'white' size = '30px'/>
                       </li>
                       <li className= "list-inline-item">
                           <SiMongodb color = 'white' size = '30px'/>
                       </li>
                       <li className= "list-inline-item" >
                           <FaReact/>
                       </li>

                    </ul>
                </div>
                    
            
                </div>
                <br>
                </br>
                
                <div className="card text-white bg-dark mb-3">
                    
                    <div className = "card-header text-right">
                        
                        <AiFillGithub type= {Button} onClick = {() => this.handleClick("Notes")}/> 
                        <header className = "text-center">Notes</header>
                
                <div className="card-body text-left">
                    <p className="card-text">Some text inside the second card</p>
                </div>
                </div>
                
                <div className= "card-footer text-center">
                   <ul className="list-inline">
                       <li className="list-inline-item">
                           <FaPython/>
                       </li>
                       <li className= "list-inline-item">
                           <FaAws/>
                       </li>
                       <li className= "list-inline-item">
                           <SiTwilio/>
                       </li>

                   </ul>
                </div>
                </div>
                <br>
                </br>
                
             <div className="card text-white bg-dark mb-3">
                    
                <div className = "card-header text-right">
                        
                        <AiFillGithub type= {Button} onClick = {() => this.handleClick("FinanceApp")}/> 
                        <header className = "text-center">CashApp</header>
                  
                <div className="card-body text-left">
                    <p className="card-text">Some text inside the second card</p>
                </div>
                </div>
                
                <div className= "card-footer text-center">
                   <ul className="list-inline">
                       <li className="list-inline-item">
                           <FaJava/>
                       </li>
                       <li className= "list-inline-item">
                           <FaReact/>
                       </li>
                       <li className= "list-inline-item">
                           <SiSpring/>
                       </li>

                   </ul>
                
                </div>
           </div>
           <br>
           </br>
       
        <div className="card-columns">
            <div className="card text-white bg-dark w-100">
                <div className="card-header text-right">
                    <AiFillGithub type= {Button} onClick = {() => this.handleClick("MyWebsite")}/>
                    <header className = "text-center">Swap</header>
                <div className="card-body text-left">
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <div className= "card-footer text-center">
                   <ul className="list-inline">
                       <li className="list-inline-item">
                           <DiDjango/>
                       </li>
                       <li className="list-inline-item">
                           <FaPython/>
                       </li>

                   </ul>
                
                </div>
            
            
            </div>
            
                
            
            <div class="card text-white bg-dark w-100">
                <div class="card-header text-right">
                  <AiFillGithub/>
                    <header className = "text-center">Binary Search Trees</header>
                <div className="card-body text-left">
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
`               </div>
                <div className= "card-footer text-center">
                   <ul className="list-inline">
                       <li className="list-inline-item">
                           <SiCplusplus/>
                       </li>


                   </ul>
                
                </div>  
            </div>

                <div class="card text-white bg-dark w-100">
                <div class="card-header text-right">
                  <AiFillGithub/>
                  <header className = "text-center">JavaScript Compiler</header>
                <div className="card-body text-left">
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content llllllllllllllllllllhgjfkjhfgkjgfkfjhfkhjfhfjfh.</p>
                  
                </div>
                </div>

                <div className= "card-footer text-center">
                   <ul className="list-inline">
                       <li className="list-inline-item">
                           <SiScala/>
                       </li>


                   </ul>
                
                </div>  
            
            </div>

              
                      
        </div>      
        </IconContext.Provider>
                
        </div>    
            
        </header>

        )}
        }
export default Projects;