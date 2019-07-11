import { GET_FOLLOWERS } from "../constants/ActionTypes";

const initialState = {
  followers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload
      };

    default:
      return state;
  }
}
