import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from "react-router-dom";

class Header extends Component {

  renderAuthentificationLabel = () => {
    if (this.props.isLoggedIn){
      return "Déconnexion";
    }else{
      return "Connexion"
    }
  };

  renderAuthentificationLink = () => {
    if (this.props.isLoggedIn){
      return (
          <li className="nav-item">
            <Link className="nav-link" to={"/signout"}>
              {this.renderAuthentificationLabel()}
            </Link>
          </li>
      )
    }else{
      return (
          [
            <li key={1} className="nav-item">
              <Link className="nav-link" to={"/signin"}>
                {this.renderAuthentificationLabel()}
              </Link>
            </li>,
            <li key={2} className="nav-item">
              <Link className="nav-link" to={"/signup"}>
                Inscription
              </Link>
            </li>
          ]
      )
    }
  };

  render() {
    return (
        <div>
          <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to={"/resources"} className="nav-link">Ressources</Link>
            </li>
            {this.renderAuthentificationLink()}
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
