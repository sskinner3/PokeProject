import * as Actions from "../Actions/ActionTypes";

const PokeReducer = (
  state = { fetching: false, error: null, poke: null },
  action
) => {
  switch (action.type) {
    case Actions.GET_POKE_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case Actions.GET_POKE_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        poke: action.data,
      });
    case Actions.GET_POKE_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default PokeReducer;
