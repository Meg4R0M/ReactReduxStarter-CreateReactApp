import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from "react-router-dom";

class Header extends Component {

  onClickAuthentification = () => {
    this.props.setAuthentification(!this.props.isLoggedIn)
  };

  renderAuthentificationLabel = () => {
    if (this.props.isLoggedIn){
      return "Déconnexion";
    }else{
      return "Connexion"
    }
  };

  render() {
    return (
        <div>
          <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/ressources" className="nav-link">Ressources</Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={this.onClickAuthentification}>{this.renderAuthentificationLabel()}</a>
            </li>
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn : state.authentification.isLoggedIn
  };
};

export default connect(
    mapStateToProps, actions
)(Header);
export { Header }
