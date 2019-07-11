import { GET_PROFILE_SUCCESS } from "../constants/ActionTypes";

const initialState = {
  profile: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
}
