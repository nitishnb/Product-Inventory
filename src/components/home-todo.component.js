import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default class HomeTodo extends Component {
    render(){
        return(
            <div align="center">
                <h3>
                    Welcome! To Serverless Web Application
                </h3>
                <br></br>
                <br></br>
                <br></br>
                <div class="btn-group btn-group-lg">
                    <Link to="/view" class="btn btn-primary">Products</Link>
                </div>&emsp;
                <div class="btn-group btn-group-lg">
                    <Link to="/create" class="btn btn-primary">Create Product</Link>
                </div>
            </div>
        )
    }
}