import { allTypes } from "../actionTypes";
import axios from "axios";

export const fetchLoading = () => {
  return {
    type: allTypes.actionType.FETCH_DATA_PENDING,
  
  };
};
export const fetchSuccess = (data) => {
  return {
    type: allTypes.actionType.FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchError = (error) => {
  return {
    type: allTypes.actionType.FETCH_DATA_ERROR,
    payload: error,
  };
};

export const fetchPosts = () => {

  return async (dispatch) => {
    dispatch(fetchLoading());
    await axios
      .get("https://social-media-server.tanaypratap.repl.co/posts")
      .then((response) => {
        dispatch(fetchSuccess(response.data.posts));
      })
      .catch((err) => {
        dispatch(fetchError(err));
      });
  };
};
