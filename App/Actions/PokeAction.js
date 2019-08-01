import axios from "react-native-axios";
import * as ActionTypes from "./ActionTypes";

export const getPoke = index => {
  return dispatch => {
    dispatch(getPokeRequest());
    console.log(index);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      .then(response => {
        dispatch(getPokeSuccess(response.data));
        console.log(response.data);
      })
      .catch(error => {
        dispatch(getPokeFailure(error));
        console.log(error);
      });
  };
};

export const getPokeRequest = () => ({
  type: ActionTypes.GET_POKE_REQUEST,
});

export const getPokeFailure = error => ({
  type: ActionTypes.GET_POKE_FAILURE,
  error: error,
});

export const getPokeSuccess = data => ({
  type: ActionTypes.GET_POKE_SUCCESS,
  data: data,
});
