import React, { Component } from 'react';
import SignIn from './components/signIn';
import "./App.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {registerUser, signinUser} from './utils/api';
import Home from './pages/Home'

const backgroundStyle = {
  backgroundImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhqwPoffXwX_-_ccqQyJ6fhjlhdGfFIamie7F4laIEi1KARFg',
  backgroundPosition: 'fixed',
  backgroundAttachment: 'fixed'
}



class App extends React.Component {
  state = {
    email: "",
    password: "",
    showLogin: true,
    backgroundStyles: {
      backgroundImage: "url('http://www.licensingcorner.com/wp-content/uploads/2018/08/fh.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh"
      
      
    }
  }

  compnentDidMount() {
    this.handleBackgroundChange();
  }


  handleInputChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    signinUser({
      email: this.state.email,
      password: this.state.password
    }).then(({data}) => {
      console.log(data)
      this.setState({
        showLogin: false
      })
    })
    .catch(err => console.log(err));
  }

  handleRegisterSubmit = (event) => {
    event.preventDefault();
    registerUser({
      email: this.state.email,
      password: this.state.password
    }).then(({data}) => {
      console.log(data)
    })
    .catch(err => console.log(err));
  }

  handleBackgroundChange = (pageName) => {
    if (pageName === "home") {
      console.log(pageName);
      this.setState({
        backgroundStyles: {
          backgroundColor: "tan"
        }
      })
    } else {
      this.setState({
        backgroundStyles: {
          backgroundImage: "url('http://www.licensingcorner.com/wp-content/uploads/2018/08/fh.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }
      })
    }
  }

  

  render() {
    return (
      <>

      
      <div style={this.state.backgroundStyles} className="">
        <Navbar bg="dark" variant="white">
    <Navbar.Brand href="#home"><i class="fas fa-home"></i>Workout Legend</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Exercises</Nav.Link>
      <Nav.Link href="#features">Exercise Equipment</Nav.Link>
      <Nav.Link href="#pricing">Exercise images</Nav.Link>
    </Nav>
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>


        {this.state.showLogin ? 
        (  
          <SignIn 
            email={this.state.email} 
            password={this.state.password} 
            handleInputChange={this.handleInputChange} 
            handleLoginSubmit={this.handleLoginSubmit} 
            handleRegisterSubmit={this.handleRegisterSubmit}/>
            ) : (
          <Home handleBackgroundChange={this.handleBackgroundChange} />
        )}
        <aside>
  
        </aside>
      </div>
      </>
    );
  }
}

export default App;
