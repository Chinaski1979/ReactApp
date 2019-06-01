import { combineReducers } from 'redux';
import appReducer from './appReducer';
// import navReducer from './navReducer';

export default combineReducers({
  appState: appReducer,
  //nav: navReducer,
});
