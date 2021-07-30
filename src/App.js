import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomeTodo from "./components/home-todo.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import DeleteProduct from "./components/deleteproduct.component";

import git from "./github.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
         <div class="p-3 mb-2 bg-light text-dark">  
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          &emsp;  <Link to="/" className="navbar-brand">Product Inventory</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/view" className="nav-link">Products</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Product</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={HomeTodo} />
          <Route path="/view" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/delete/:id" component={DeleteProduct} />
          <Route path="/create" component={CreateTodo} />
        </div>
        <div class="bottomright"><a href='https://github.com/nitishnb'><img src={git} width="30" height="30" /></a>Nitish N Banakar</div>
        </div>
      </Router>
    );
  }
}

export default App;