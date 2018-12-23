import React, { Component } from 'react'
import Header from '../containers/header'
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Ressources from "./ressources";
import RequireAuthentification from '../helpers/require-authentification'

require("../style.css");

export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/ressources" component={RequireAuthentification(Ressources)}/>
          </Switch>
        </div>
    )
  }
}