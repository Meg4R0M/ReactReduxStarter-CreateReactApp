import {ADD_RESOURCE, PARSE_MESSAGE} from "../actions/action-types";

const initialState = {
  resourceList: [0],
  message : ""
};

export default function ResourcesReducer(state=initialState, action){
  switch (action.type) {
    case ADD_RESOURCE :
      return {
        resourceList: [...state.resourceList, state.resourceList[state.resourceList.length - 1] + 1]
      };
    case PARSE_MESSAGE :
      return {
        ...state,
        message : action.payload
      };
    default :
      return state;
  }
}