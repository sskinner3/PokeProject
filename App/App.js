/**
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./Reducers/index";
import AppContainer from "./AppNavigation";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
