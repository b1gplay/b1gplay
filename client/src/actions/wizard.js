import { UPDATE_FIELD } from "../constants/ActionTypes";

// UPDATE FIELD
export const updateField = (field, value) => dispatch => {
  dispatch({
    type: UPDATE_FIELD,
    field,
    value
  });
};
