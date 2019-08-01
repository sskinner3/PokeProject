import * as Actions from "../Actions/ActionTypes";

const DexReducer = (
  state = { fetching: false, error: null, data: null },
  action
) => {
  switch (action.type) {
    case Actions.GET_LIST_REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case Actions.GET_LIST_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        data: action.data,
      });
    case Actions.GET_LIST_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default DexReducer;
