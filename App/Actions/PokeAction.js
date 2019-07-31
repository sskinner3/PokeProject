import { connect } from "react-redux";

import * as Actions from "./ActionTypes";
import HomeScreen from "../Screens/HomeScreen";

const mapStateToProps = state => ({
  list: state.pokeReducer.list
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList())
});

export const getList = () => ({
  type: Actions.GET_LIST
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
