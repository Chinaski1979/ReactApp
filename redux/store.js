import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';
import navReducer from './navReducer';

const rootReducer = createStore(
  combineReducers({
    appState: appReducer,
    //nav: navReducer,
  }), /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  ),
);

export default rootReducer;
