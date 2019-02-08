import React, { Component } from 'react';
import './App.css';
import Header from './components/navigation/Header/Header';
import JobList from './components/JobList/JobList';
import Login from './components/Login/Login'
import Axios from 'axios';

class App extends Component {

  state = {
    loggerUser: JSON.parse(window.localStorage.getItem('user')) || null
  }

  loginHandler = (paramEmail, paramPass) => {
    Axios.post('/login', { 'email': paramEmail, 'password': paramPass}).then(response => {
      window.localStorage.setItem('user', JSON.stringify(response.data.user));
      window.localStorage.setItem('token', JSON.stringify(response.data.token));

      this.setState({loggerUser: response.data.user});
      console.log(this.state);
    }).catch(error => {console.error(error)});
  }

  render() {
    if (this.state.loggerUser) {
      return (
        <div className="App">
          <Header/>
          <JobList/>
        </div>
      );
    }
    return (<div className="App">
              <Login login={ this.loginHandler }></Login>
            </div>
    );
  }
}

export default App;
