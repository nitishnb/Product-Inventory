import React, { Component } from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {

    constructor(props) {
        super(props);
        this.onChangeproductid = this.onChangeproductid.bind(this);
        this.onChangeProductInventory = this.onChangeProductInventory.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangecolor = this.onChangecolor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productid: '',
            inventory: '',
            price: '',
            productName: '',
            color: ''
        }
    }

    onChangeproductid(e) {
        this.setState({
            productid: e.target.value
        });
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

    onChangeProductName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    onChangecolor(e) {
        this.setState({
            color: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Product Name: ${this.state.productName}`);
        console.log(`Inventory: ${this.state.inventory}`);
        console.log(`Price: ${this.state.price}`);
        console.log(`Color: ${this.state.color}`);
     
        const product = {
            productid: this.state.productid,
            inventory: this.state.inventory,
            price: this.state.price,
            productName: this.state.productName,
            color: this.state.color
        };

        axios.post('https://cors-anywhere.herokuapp.com/https://p9cr05kfmd.execute-api.us-east-1.amazonaws.com/prod/product', product)
            .then(res =>{ 
                console.log(res.data)
                alert(`Product ${product.productName} Submitted succesfully..!`);
            });

        this.setState({
            productid: '',
            inventory: '',
            price: '',
            productName: '',
            color: ''
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Product ID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.productid}
                                onChange={this.onChangeproductid}
                                />
                    </div>
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
                        <input  type="text"
                                className="form-control"
                                value={this.state.productName}
                                onChange={this.onChangeProductName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Color: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.color}
                                onChange={this.onChangecolor}
                                />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}