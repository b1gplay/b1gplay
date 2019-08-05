import { GET_COMMENTS } from "../constants/ActionTypes";

const initialState = {
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload.reverse()
      };

    default:
      return state;
  }
}
