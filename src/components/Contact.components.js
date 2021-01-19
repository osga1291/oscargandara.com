import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            message:''
        };
        this.myEmailChangeHandler = this.myEmailChangeHandler.bind(this);
        this.myMessageChangeHandler = this.myMessageChangeHandler.bind(this);
        this.myNameChangeHandler = this.myNameChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
        
    }

    mySubmitHandler = (event) => {

        
        event.preventDefault();
        
        var emailjs = require('emailjs-com');
        emailjs.init("user_ZFK5GmGFK8dvkToEdTpAW");
        var params = {
            from_name: this.state.name + '(' + this.state.email + ')',
            to_name: 'ogandara99@gmail.com',
            subject: 'Website Email',
            message: this.state.message
        };
        
        emailjs.send('default_service','template_qt0p03b',params)
            .then(res => {
                console.log(res.json())
            })
            .catch(err => console.error("Failed."));
            this.setState({
                email: '',
                name : '',
                message: ''
            })
        
        this.setState({
            name: '',
            email: '',
            message: ''
        });
        
        alert("A email has been sent. I will get back to you as soon as possible.");
        
        

        }
    myNameChangeHandler = (event) => {
        
        this.setState({name: event.target.value})
    }
    myEmailChangeHandler = (event) =>{
        this.setState({ email: event.target.value});
    }
    myMessageChangeHandler = (event) =>{
        this.setState({ message: event.target.value})
    }
    render(){
        return (
        

        <header className="masthead" id = "contact">
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
       
          <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center inside">
                <h5 className= 'text-left' style= {{color:'white',fontFamily:'Courier New, Courier, monospace',fontSize: "medium" }}> Thanks for going through my website and learning a little about me. If you want to say hi
                you can just send me an email. I am currently looking for new and exciting opportunities. </h5>
                <Form className= 'text-center text-white' onSubmit={this.mySubmitHandler} >
                    <Form.Group controlId= 'myForm' >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type = 'name'  placeholder='Bob Person'onChange ={this.myNameChangeHandler}  />
                    </Form.Group>
                    <Form.Group controlId= 'myForm2'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = 'email' placeholder='name@example.com' onChange = {this.myEmailChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId= 'myForm3'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as = 'textarea' row='3' onChange = {this.myMessageChangeHandler}/>
                    </Form.Group>
                    <Button variant = 'primary' type = 'submit'>
                        Send Email
                    </Button>
                    
                </Form>
                
            </div>
            </div>
            </div>
        
        </header>
        
        
            )}

}
export default Contact;