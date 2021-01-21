import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillGithub } from 'react-icons/ai';
import 'react-icons/di';
import {Button, Card} from 'react-bootstrap';
import {IconContext} from 'react-icons';
import {SiCplusplus, SiJavascript, SiMongodb, SiMysql, SiScala, SiSpring, SiTwilio} from 'react-icons/si';
import { FaAws, FaJava, FaPython, FaReact } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
class Projects extends Component{
    
    handleClick = (project) => {

    var website = "https://github.com/osga1291/" + project;
            
    window.location.assign(website); };
   
    
    render(){
        return(
        <header className="masthead" id = "projects">
          <div className="container h-100" >
             
    
             
              <IconContext.Provider value = {{ color: 'white', size: '30px', className: "icon"
                  }}>   

                  
                <div className="card text-white bg-dark mb-3">
                    <div className = "card-body text-right">
                        <AiFillGithub type= {Button} onClick = {() => this.handleClick("BarApp")}/> 

                        <header className = "text-center">BarApp</header>
                    

                    <div className="card-body text-left">
                    <p className="card-text">What is more annoying than waiting at a bar for service meanwhile there is twenty other people 
                    shoving and screaming for service from the bartender as well? BarApp was a team project focused on giving users the conveniency
                    of staying in the dancefloor and ordering. This app was created purely on JavaScript with the backend using express and frontend using React.</p>
                    </div>
                </div>
                
                <div className= "card-footer text-center">
                <IconContext.Provider value = {{ color: 'white', size: '30px', className: "TechIcon"
                  }}>   
                
                    <ul className="list-inline">
                       <li className="list-inline-item">
                           <SiJavascript/>
                       </li>
                       <li className= "list-inline-item">
                           <SiMongodb/>
                       </li>
                       <li className= "list-inline-item" >
                           <FaReact/>
                       </li>

                    </ul>
                </IconContext.Provider>
                </div>
                    
            
                </div>
                <br>
                </br>
                
                <div className="card text-white bg-dark mb-3">
                    
                    <div className = "card-header text-right">
                        
                        <AiFillGithub type= {Button} onClick = {() => this.handleClick("Notes")}/> 
                        <header className = "text-center">Notes</header>
                
                <div className="card-body text-left">
                    <p className="card-text">Serverless application that sends messages to your loved ones at the time specified. It interacts with a database in AWS to send 
                    saved messages using Twilio. The database also contains web scraped content which can be sent along with the message. The program is run by AWS Lambda.
                    </p>
                </div>
                </div>
                
                <div className= "card-footer text-center">
                <IconContext.Provider value = {{ color: 'white', size: '30px', className: "TechIcon"
                  }}>  
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
                   </IconContext.Provider>
                </div>
                </div>
                <br>
                </br>
                
             <div className="card text-white bg-dark mb-3">
                    
                <div className = "card-header text-right">
                        
                        <AiFillGithub type= {Button} onClick = {() => this.handleClick("FinanceApp")}/> 
                        <header className = "text-center">CashApp</header>
                  
                <div className="card-body text-left">
                    <p className="card-text">An OOP project following the MVC model using Spring Boot with Java. Jpa is used to communicate with the MySQL database.
                    The app lets users see their savings, goals and expenses throught diffrent periods. The user can also see predictions and calculations which can make their goals
                    attainable. The data is shown through beautiful graphs and tables using Thymeleaf, HTML, CSS and JavaScript.  </p>
                </div>
                </div>
                
                <div className= "card-footer text-center">
                    <IconContext.Provider value = {{ color: 'white', size: '30px', className: "TechIcon"}}>  
                   <ul className="list-inline">
                       <li className="list-inline-item">
                           <FaJava/>
                       </li>
                       <li className= "list-inline-item">
                           <SiMysql/>
                       </li>
                       <li className= "list-inline-item">
                           <SiSpring/>
                       </li>

                   </ul>
                </IconContext.Provider>
                </div>
           </div>
           <br>
           </br>
       
        <div className="card-columns" style={{display: 'flex', flexDirection: 'row'}}>
            <div className="card text-white bg-dark w-100" >
                <div className="card-header text-right">
                    <AiFillGithub type= {Button} onClick = {() => this.handleClick("overflow")}/>
                    <header className = "text-center">StackOverFlow</header>
                <div className="card-body text-left">
                    <p className="card-text"> Runs with a Python file. On an error it will scrape stack overflow using the stack overflow API to
                    find questions using the information from logging and any specific tags you want. It is created to have a gui in the terminal using Python curses
                    so you dont have to leave your text editor. <i class="fa fa-indent" aria-hidden="true"></i></p>
                </div>
            </div>
            <div className= "card-footer text-center">
            <IconContext.Provider value = {{ color: 'white', size: '30px', className: "TechIcon"
                  }}>  
                   <ul className="list-inline">
                       <li className="list-inline-item">
                           <DiDjango/>
                       </li>
                       <li className="list-inline-item">
                           <FaPython/>
                       </li>

                   </ul>
                   </IconContext.Provider>
                
                </div>
            
            
            </div>
            
                
            
            <div class="card text-white bg-dark w-100">
                <div class="card-header text-right">
                  <AiFillGithub/>
                    <header className = "text-center">JavaScript Interpreter</header>
                <div className="card-body text-left">
                    <p className="card-text">Semester long project done with multiple partners. This project was done to learn semantics, syntax, language
                    design and static checking. We dive in to the meat of the JavaScript language and understand and try to reimplement all its behaviors using Scala. </p>
                </div>
`               </div>
                <div className= "card-footer text-center">
                <IconContext.Provider value = {{ color: 'white', size: '30px', className: "TechIcon"
                  }}>   
                   <ul className="list-inline">
                       <li className="list-inline-item">
                           <SiScala/>
                       </li>


                   </ul>
                </IconContext.Provider>
                </div>  
            </div>



              
                      
        </div>      
        
        </IconContext.Provider>     
        </div>    
            
        </header>
        

        )}
        }
export default Projects;