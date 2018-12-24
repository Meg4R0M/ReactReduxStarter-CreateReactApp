import React, { Component } from 'react';
import { addResource } from '../actions'
import { connect } from "react-redux";
import {
  getResourceList,
  getContainsOneResourceList,
  getPrimeNumberResourceList,
  specialNumber
} from "../selectors/resources"

class Resources extends Component {

  renderResources = (resourceList) => {
    return resourceList.map((r, index) => <li key={index}>{r}</li>)
  };

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => this.props.addResource()} className="btn btn-raised btn-primary">
                Ajouter un nombre
              </button>
            </div>
            <div className="col">
              Entiers
              <ul>{this.renderResources(this.props.resourceList)}</ul>
            </div>
            <div className="col">
              Contiennent "1"
              <ul>{this.renderResources(this.props.containsOneResourceList)}</ul>
            </div>
            <div className="col">
              Entiers premiers
              <ul>{this.renderResources(this.props.primeResourceList)}</ul>
            </div>
            <div className="col">
              Entiers premiers contenant "1"
              <ul>{this.renderResources(this.props.specialNumber)}</ul>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  resourceList: getResourceList(state),
  containsOneResourceList: getContainsOneResourceList(state),
  primeResourceList: getPrimeNumberResourceList(state),
  specialNumber: specialNumber(state)
});

const mapDispatchToProps = {
  addResource
};

export default connect(mapStateToProps,mapDispatchToProps)(Resources);