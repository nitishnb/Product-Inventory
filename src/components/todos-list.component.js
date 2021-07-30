import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import edit from "../edit.png"
import dlt from "../delete1.png";

const Todo = props => (
    <tr>
        <td>{props.todo.productid}</td>
        <td>{props.todo.productName}</td>
        <td>{props.todo.color}</td>
        <td>{props.todo.price}</td>
        <td>{props.todo.inventory}</td>
        <td align="center">
            <Link to={"/edit/"+props.todo.productid}><img src={edit} width="30" height="30" title="Edit"/></Link>
        </td>
        <td>
            <Link to={"/delete/"+props.todo.productid}><img src={dlt} width="30" height="30" title="Delete"/></Link>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://p9cr05kfmd.execute-api.us-east-1.amazonaws.com/prod/products')
            .then(response => {
                console.log(response.data.products);
                return this.setState({ products: response.data.products });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.products.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3 align="center">Products List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th>Inventory</th>
                            <th colSpan="2"><center>Action</center></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}