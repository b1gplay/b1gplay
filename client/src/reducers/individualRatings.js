import { GET_INDIVIDUAL_RATINGS } from "../constants/ActionTypes";

const initialState = {
  individualRatings: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INDIVIDUAL_RATINGS:
      return {
        ...state,
        individualRatings: action.payload
      };

    default:
      return state;
  }
}
