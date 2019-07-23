import { GET_PROFILE_SUCCESS, EDIT_FIELD } from "../constants/ActionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return action.payload;
    case EDIT_FIELD:
      return {
        ...state,
        [action.field]: action.value
      };

    default:
      return state;
  }
}
