import { GET_FOLLOWING } from "../constants/ActionTypes";

const initialState = {
  following: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWING:
      return {
        ...state,
        following: action.payload
      };

    default:
      return state;
  }
}
