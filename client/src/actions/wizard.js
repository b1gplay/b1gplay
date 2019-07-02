import { UPDATE_FIELD } from "../constants/ActionTypes";

// UPDATE FIELD
export const updateField = (field, value) => dispatch => {
  console.log(field, value);
  dispatch({
    type: UPDATE_FIELD,
    field,
    value
  });
};
