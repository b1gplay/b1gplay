import { GET_SUGGESTIONS } from "../constants/ActionTypes";

const initialState = {
  suggestions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload
      };

    default:
      return state;
  }
}
