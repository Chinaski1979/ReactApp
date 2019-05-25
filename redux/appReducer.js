import { createAction, handleActions } from 'redux-actions';

// Acctions
export const CHANGE_APP_TITLE = createAction('CHANGE_APP_TITLE');


export const initialState = {
  title: 'This is title',
  categories: [
    {title: 'Section 1'},
    {title: 'Section 2'},
    {title: 'Section 3'},
    {title: 'Section 4'},
    {title: 'Section 5'},
  ],
};

// Reducer
export default handleActions({
  CHANGE_APP_TITLE: (state, action) => {
    return Object.assign({}, state, { title: action.payload });
  },
}, initialState);

// Action dispatchers
export const changeAppTitle = (newTitle) => {
  return (dispatch) => {
    dispatch(CHANGE_APP_TITLE(newTitle));
  };
};
