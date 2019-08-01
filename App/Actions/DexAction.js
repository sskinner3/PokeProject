import axios from "react-native-axios";
import * as ActionTypes from "./ActionTypes";

export const getList = () => {
  return dispatch => {
    dispatch(getListRequest());
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then(response => {
        dispatch(getListSuccess(response.data.results));
      })
      .catch(error => {
        dispatch(getListFailure(error));
      });
  };
};

export const getListRequest = () => ({
  type: ActionTypes.GET_LIST_REQUEST,
});

export const getListFailure = error => ({
  type: ActionTypes.GET_LIST_FAILURE,
  error: error,
});

export const getListSuccess = data => ({
  type: ActionTypes.GET_LIST_SUCCESS,
  data: data,
});
