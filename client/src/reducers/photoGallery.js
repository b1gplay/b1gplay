import {
  GET_PHOTO_GALLERY_SUCCESS,
  GET_PHOTO_SUCCESS
} from "../constants/ActionTypes";

const initialState = {
  photos: [],
  liveGallery: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_GALLERY_SUCCESS:
      return {
        ...state,
        photos: action.payload.reverse()
      };
    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        liveGallery: state.photos.filter(photo => photo.id === action.payload)
      };

    default:
      return state;
  }
}
