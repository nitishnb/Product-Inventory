import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import edit from "../edit.png"
import dlt from "../delete1.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = props => (
    <tr>
        <td>{props.prod.productid}</td>
        <td>{props.prod.productName}</td>
        <td>{props.prod.color}</td>
        <td>{props.prod.price}</td>
        <td>{props.prod.inventory}</td>
        <td align="center">
            <Link to={"/edit/"+props.prod.productid}><img src={edit} width="30" height="30" title="Edit"/></Link>
        </td>
        <td>
            <Link to={"/delete/"+props.prod.productid}><img src={dlt} width="30" height="30" title="Delete"/></Link>
        </td>
    </tr>
)

export default class UnauthHomeProduct extends Component {

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

    prodList() {
        return this.state.products.map(function(currentProduct, i){
            return <Product prod={currentProduct} key={i} />;
        })
    }


    render(){
        return(
            <div align="center">
                <h3>
                    Welcome! To Serverless Web Application
                </h3>
                <br></br>
                <br></br>
                <div class="btn-group btn-group-lg">
                    <Link to="/view" class="btn btn-primary">Edit Products</Link>
                </div>&emsp;
                <div class="btn-group btn-group-lg">
                    <Link to="/create" class="btn btn-primary">Create Product</Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
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
                            { this.prodList() }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}