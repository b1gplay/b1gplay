import { GET_POSTS, ADD_POST, DELETE_POST } from "../constants/ActionTypes";
import { createMessage, returnErrors } from "./messages";
import { getPhotoGallery } from "./photoGallery";

import API from "../utils/APIUtils";

// GET POSTS
export const getPosts = () => dispatch => {
  API.get("posts/")
    .then(res => {
      dispatch(createMessage({ getPosts: "Posts retrieved" }));
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE POST
export const deletePost = id => dispatch => {
  API.delete(`posts/${id}`)
    .then(res => {
      dispatch(createMessage({ deletePost: "Post Deleted" }));
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD POSTS
export const addPost = ({ message, photo, owner }) => dispatch => {
  // Define header for multimedia upload
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };

  // Handle image uploads
  const body = new FormData();
  body.append("message", message);
  body.append("photo", photo);
  body.append("owner", owner);

  // Add a Post to api
  API.post("posts/", body, config)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
      dispatch(getPhotoGallery());
    })
    .catch(err => console.log(err));
};
