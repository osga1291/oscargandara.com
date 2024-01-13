import photo from './my_photo.png';
import file from './Oscar_Gandara_Resume_website.pdf';

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
import {Helmet} from 'react-helmet';
import {AiFillGithub} from "react-icons/ai";
// Usage
function App() {


  const Title = "Oscar Gandara"
  
  return (
    
    
  

    
    <div className = "main-page">

    <Helmet>
      <title>{ Title }</title>
      
    </Helmet>
      
    <Router>
    <header>
    

    <Header resume = {file} />
  
    </header>
    </Router>

   
    
    <div className ="main">
    <Main/>
    </div>
    
    

    

    <div>
      <About pic = {photo}/>
    </div>

    <div>
      <Projects />
    </div>

  

    <div>
      <Contact />
    </div>

    
    
    
   </div>
  

  );
}



export default App;