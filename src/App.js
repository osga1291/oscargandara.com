import photo from './my_photo.png';
import file from './InternResume.pdf'
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.component";
import Contact from "./components/Contact.components"
import Header from "./components/Header.component";
import Main from "./components/Main.component";
import About from "./components/About.components"
import './App.css';
import Projects from "./components/Projects.components"
import React ,{ useState, useEffect } from 'react';
import {AiFillGithub} from "react-icons/ai";
// Usage
function App() {

  
  

  return (
    
    
 
    
    
    <div className = "main-page">
    <Router>
    <header>
    

    <Header resume = {file} />
    
   

       
    
  
  


    
    </header>
    </Router>
    
  
   <main>
      <Main/>
      
     
    </main>
    
    

    

    <div>
      <About pic = {photo}/>
    </div>

    <div>
      <Projects />
    </div>

    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br></br>
    <br></br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>

    <div>
      <Contact />
    </div>

    
    
    
   </div>
   

  );
}



export default App;