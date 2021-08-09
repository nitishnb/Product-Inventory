import React from "react";
import HomeProduct from "./components/home-product.component";
import CreateProduct from "./components/create-product.component";
import EditProduct from "./components/edit-product.component";
import ProductsList from "./components/products-list.component";
import DeleteProduct from "./components/deleteproduct.component";
import Login from "./components/Login.component";
import Signup from "./components/Signup.component";
import { Route, Switch } from "react-router-dom";
import AuthorizedRoute from "./AuthorizedRoute";
import UnAuthorizedRoute from "./UnAuthorizedRoute";
import UnauthHomeProduct from "./components/unauthHome.component";

export default (cprops) =>
<Switch>

  <UnAuthorizedRoute path="/login" exact component={Login} cprops={cprops}/>
  <UnAuthorizedRoute path="/signup" exact component={Signup} cprops={cprops}/>
  <Route path="/" exact component={UnauthHomeProduct} cprops={cprops}/>

  {/* <AuthorizedRoute exact path="/" exact component={HomeProduct} cprops={cprops}/> */}
  <AuthorizedRoute exact path="/view" component={ProductsList} cprops={cprops}/>
  <AuthorizedRoute exact path="/edit/:id" component={EditProduct} cprops={cprops}/>
  <AuthorizedRoute exact path="/delete/:id" component={DeleteProduct} cprops={cprops}/>
  <AuthorizedRoute exact path="/create" component={CreateProduct} cprops={cprops}/>
 
  {/* <Route component={NotFound} /> */}
</Switch>;