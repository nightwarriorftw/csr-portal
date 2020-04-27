import React from 'react';
import './App.css';

import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      displayed_form:'',
      loggedIn: localStorage.getItem('token') ? true: false,
      username: ''
    };
  }

  componentDidMount(){
    if(this.state.loggedIn){
      // Change to axios
      fetch('http://localhost:8000/api/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
      .then(json=>{
        this.setState({username: json.username})
      });
    }
  }

  handleLogin=(e, data)=>{
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json=>{
      localStorage.setItem('token', json.token);
      this.setState({
        loggedIn: true,
        displayed_form:'',
        username: json.user.username
      });
    });
  };

  handleSignup=(e, data)=>{
    e.preventDefault();
    fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(json=>{
      localStorage.setItem('token', json.token);
      this.setState({
        loggedIn: true,
        displayed_form: '',
        username: json.user.username
      });
    });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({
      loggedIn: false,
      username:''
    })
  }

  display_form = (form) => {
    this.setState({
      displayed_form: form
    })
  }

  render(){
    let form;
    switch(this.state.displayed_form){
      case 'login':
        form = <LoginForm handleLogin={this.handleLogin} />
        break;
      
      case 'signup':
        form = <SignupForm handleSignup={this.handleSignup} />
        break;

      default:
        form = null;
    }

    return (
      <div className="App">
        <Nav 
          loggedIn={this.state.loggedIn}
          display_form={this.display_form}
          handleLogout={this.handleLogout}
        />
        {form}
        <h3>
          {this.state.loggedIn 
            ? `Hello ${this.state.username}` 
            : `Please LogIn Again`}
        </h3>    
      </div>
    );
  }
}

export default App;
