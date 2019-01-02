import React, { Component } from 'react'
import Header from '../containers/header'
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Resources from "../containers/resources";
import RequireAuthentification from '../helpers/require-authentification'
import TodoApp from "./todo-app";
import Signin from '../components/signin'
import Signout from '../components/signout'
import Signup from '../components/signup'
import Errors from "./errors";

require("../style.css");

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Errors/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/resources" component={RequireAuthentification(Resources)}/>
          <Route exact path="/todo" component={TodoApp}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signout" component={Signout}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </div>
    )
  }
}