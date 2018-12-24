import { combineReducers } from "redux";
import AuthentificationReducer from './authentification'
import ActionInfoReducer from './action-info'
import ResourcesReducer from './resources'

const rootReducer = combineReducers({
  authentification : AuthentificationReducer,
  actionInfo : ActionInfoReducer,
  resources : ResourcesReducer
});

export default rootReducer;