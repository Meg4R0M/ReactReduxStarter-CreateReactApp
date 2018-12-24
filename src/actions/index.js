import {
  SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT, ADD_RESOURCE
} from "./action-types";

export function setAuthentification(isLoggedIn){
  return function (dispatch){
    dispatch({
      type: SET_AUTHENTIFICATION,
      payload: isLoggedIn
    });
  }
}

export function incrementActionCount(){
  return {
    type: INCREMENT_ACTION_COUNT
  }
}

export function addResource(){
  return {
    type: ADD_RESOURCE
  }
}