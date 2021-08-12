import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./Routes";
import { Auth } from "aws-amplify";

import logout from "./logout.png";
import git from "./github.png";

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isAuthenticated: false
      }
  }
  userHasAuthenticated = (value) => {
    this.setState({ isAuthenticated: value });
  }

  handleLogout = async event => {
      await Auth.signOut();
      this.userHasAuthenticated(false);
  }

  async componentDidMount() {
      try {
        await Auth.currentSession();
        this.userHasAuthenticated(true);
        console.log(this.props.history);
        this.props.history.push("/view");
      }
      catch(e) {
        console.log("Error", e);
      }
  }
  render() {
    return (
      <Router>
        <div className="container">
         <div class="p-3 mb-2 bg-light text-dark">  
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          &emsp;  <Link to="/" className="navbar-brand">Product Inventory</Link>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
              {this.state.isAuthenticated ? 
                <Fragment>
                  <li className="navbar-item">
                    <Link to="/view" className="nav-link">Products</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Product</Link>
                  </li>
                  &emsp;
                  <li className="nav-item">
                    <Link onClick={this.handleLogout}><img src={logout} width="30" height="30" title="Logout"/></Link>
                  </li>
                </Fragment> : 
                <Fragment>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link">Signup</Link>
                  </li>
                </Fragment>
              } 
              </ul>
            </div>
          </nav>
          <br/>
          <Routes userHasAuthenticated={this.userHasAuthenticated} isAuthenticated = {this.state.isAuthenticated}/>
        </div>
        <div class="bottomright"><a href='https://github.com/nitishnb'><img src={git} width="30" height="30" /></a>Nitish N Banakar</div>
        </div>
      </Router>
    );
  }
}

export default App;