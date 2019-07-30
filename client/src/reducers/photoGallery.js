import { GET_PHOTO_GALLERY_SUCCESS } from "../constants/ActionTypes";

const initialState = {
  photos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_GALLERY_SUCCESS:
      return {
        ...state,
        photos: action.payload.reverse()
      };

    default:
      return state;
  }
}
