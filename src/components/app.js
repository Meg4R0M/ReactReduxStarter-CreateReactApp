import React, { Component } from 'react'
import Header from '../containers/header'

require("../style.css");

export default class App extends Component {
  render() {
    return (
        <div>
          <Header/>
        </div>
    )
  }
}