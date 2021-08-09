import React, { Component } from 'react';
import axios from 'axios';
import  { Link } from 'react-router-dom'


export default class EditProduct extends Component {

    constructor(props) {
        super(props);
        this.onChangeProductInventory = this.onChangeProductInventory.bind(this);
        this.onChangeProductProductname = this.onChangeProductProductname.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductColor = this.onChangeProductColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            inventory: '',
            price: '',
            productName: '',
            color: ''
        }
    }

    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://p9cr05kfmd.execute-api.us-east-1.amazonaws.com/prod/product?productid='+this.props.match.params.id)
            .then(response => {
                this.setState({
                    inventory: response.data.inventory,
                    price: response.data.price,
                    productName: response.data.productName,
                    color: response.data.color
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeProductInventory(e) {
        this.setState({
            inventory: e.target.value
        });
    }

    onChangeProductPrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeProductProductname(e) {
        this.setState({
            productName: e.target.value
        });
    }

    onChangeProductColor(e) {
        this.setState({
            color: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            productid: this.props.match.params.id,
            inventory: this.state.inventory,
            price: this.state.price,
            productName: this.state.productName,
            color: this.state.color
        };
        console.log(obj);
        axios.post('https://cors-anywhere.herokuapp.com/https://p9cr05kfmd.execute-api.us-east-1.amazonaws.com/prod/product', obj)
            .then(res =>{
                console.log(res.data);
                alert(`Productid : ${obj.productid} Edited succesfully..!`);
        });
        this.props.history.push('/')
        // return <Redirect to='/view'  />
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Product Info</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Inventory: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.inventory}
                                onChange={this.onChangeProductInventory}
                                />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangeProductPrice}
                                />
                    </div>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.productName}
                                onChange={this.onChangeProductProductname}
                                />
                    </div>
                    <div className="form-group">
                        <label>Color: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.color}
                                onChange={this.onChangeProductColor}
                                />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Product" className="btn btn-primary" />
                        &emsp;&emsp;
                        <Link to={"/delete/"+this.props.match.params.id}><input type="Delete" value="Delete Product" id="inputsm" className="btn btn-danger" /></Link>
                    </div>
                </form>
            </div>
        )
    }
}