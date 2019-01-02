import { combineReducers } from "redux";
import AuthentificationReducer from './authentification'
import ActionInfoReducer from './action-info'
import ResourcesReducer from './resources'
import { reducer as form } from 'redux-form'
import ErrorsReducer from './errors'

const rootReducer = combineReducers({
  form : form,
  authentification : AuthentificationReducer,
  actionInfo : ActionInfoReducer,
  resources : ResourcesReducer,
  errors: ErrorsReducer
});

export default rootReducer;