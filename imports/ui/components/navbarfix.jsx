import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class Navbarfix extends Component {

  constructor(props) {
    super(props);
    this.state= { logout : false };
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  signup() {
    browserHistory.push('/signup');
  }
  login() {
    browserHistory.push('/login');
  }
  logout(e) {
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/');
}

  render() {

    const cu = Meteor.user();
    console.log(cu);
    const loggedIn = (cu !== null);
    console.log(loggedIn, 'loggedin');
      return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand align-middle" href="#">The Bible App</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">

              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>

              <li><Link to={'/upload'}>Upload Files</Link></li>

            </ul>
            <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#" onClick={this.signup}>Signup</a>
                  </li>
                  <li>
                    <a href="#" onClick={this.logout}>  Logout</a>
                  </li>
                  <li>
                    <a href="#" onClick={this.login}>  Login</a>
                  </li>

            </ul>
          </div>{/*/.nav-collapse */}
        </div>
      </nav>
        </div>
        )
  }

}
export default Navbarfix;
