import {ADD_RESOURCE} from "../actions/action-types";

const initialState = {
  resourceList: [0]
};

export default function ResourcesReducer(state=initialState, action){
  switch (action.type) {
    case ADD_RESOURCE :
      return {
        resourceList: [...state.resourceList, state.resourceList[state.resourceList.length - 1] + 1]
      };
    default :
      return state;
  }
}