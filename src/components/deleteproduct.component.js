import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

export default class DeleteProduct extends Component {

    constructor(props) {
        super(props);
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

    onSubmit(e) {
        if(window.confirm("Are you sure to Delete Permanently?")){
            e.preventDefault();
            console.log(this.props.match.params.id);
            axios.delete('https://cors-anywhere.herokuapp.com/https://p9cr05kfmd.execute-api.us-east-1.amazonaws.com/prod/product?productid='+this.props.match.params.id)
                .then(res =>{
                    console.log(res.data);
                    alert(`Productid : ${this.props.match.params.id} Deleted succesfully..!`);
            });
            this.props.history.push('/')
        } else {
            alert("Deletion Failed")
        }
    }


    render() {
        return (
            <div>
                <h3 align="center">Are you sure to Delete?</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Product ID   : </label> {this.props.match.params.id}
                    </div>
                    <div className="form-group"> 
                        <label>Inventory    : </label> {this.state.inventory}
                    </div>
                    <div className="form-group">
                        <label>Price        : </label>  {this.state.price}
                    </div>
                    <div className="form-group">
                        <label>Product Name : </label>  {this.state.productName}
                    </div>
                    <div className="form-group">
                        <label>Color        : </label>  {this.state.color}
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Delete Product" className="btn btn-danger" />
                    </div>
                </form>
            </div>
        )
    }
}