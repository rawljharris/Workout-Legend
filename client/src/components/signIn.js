import React, { Component } from 'react';
import { Form, Button, Navbar } from 'react-bootstrap'




function SignIn(props) {
  return (
    
    <div className= "container">
    <div className="row col-6">
    <Form className='signIn' className="container" >

      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{
          color: "white"
        }}>Email address</Form.Label>
        <Form.Control onChange={props.handleInputChange} name="email" value={props.email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
    </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label style= {
          {color:"white"}
        }>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={props.handleInputChange} value={props.password} name="password"/>
      </Form.Group>
           <Button variant="primary" type="submit" onClick={props.handleLoginSubmit}>
        Login
  </Button>

  <Button variant="info" type="submit" onClick={props.handleRegisterSubmit}>
        Sign Up
  </Button>
    </Form>
    </div>
    </div>
  )
}

export default SignIn;