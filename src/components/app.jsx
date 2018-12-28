import React, { Component } from 'react'
import Header from '../containers/header'
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Ressources from "../containers/ressources";
import RequireAuthentification from '../helpers/require-authentification'
import TodoApp from "./todo-app";
import Signin from '../components/signin'
import Signout from '../components/signout'

require("../style.css");

export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/ressources" component={RequireAuthentification(Ressources)}/>
            <Route exact path="/todo" component={TodoApp}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signout" component={Signout}/>
          </Switch>
        </div>
    )
  }
}