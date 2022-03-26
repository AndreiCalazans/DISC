import * as redux from "redux";

import { questionIndexReducer, resultsReducer } from "../reducers/reducers";

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    index: questionIndexReducer,
    results: resultsReducer
  });

  var store = redux.createStore(
    reducer,
    initialState,
    redux.compose(
      // redux.applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
  return store;
};
