import {
  GET_PHOTO_GALLERY_SUCCESS,
  GET_PHOTO_GALLERY_FAIL
} from "../constants/ActionTypes";

import API from "../utils/APIUtils";

// Return Photo Gallery
export const getPhotoGallery = () => (dispatch, getState) => {
  const owner = getState().profile.id;
  API.get("posts", {
    params: {
      owner
    }
  })
    .then(res => {
      dispatch({
        type: GET_PHOTO_GALLERY_SUCCESS,
        payload: res.data
      });
    })
    .catch(error =>
      dispatch({
        type: GET_PHOTO_GALLERY_FAIL,
        payload: error
      })
    );
};
