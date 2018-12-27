import { combineReducers } from "redux";
import AuthentificationReducer from './authentification'
import ActionInfoReducer from './action-info'
import ResourcesReducer from './resources'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  form : form,
  authentification : AuthentificationReducer,
  actionInfo : ActionInfoReducer,
  resources : ResourcesReducer
});

export default rootReducer;