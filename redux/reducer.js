import { createAction, handleActions } from 'redux-actions';

// Acctions
export const FIRST_ACTION = createAction('FIRST_ACTION');


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
  FIRST_ACTION: (state, action) => {
    return Object.assign({}, state, { title: action.payload });
  },
}, initialState);

// Action dispatchers
export const firstAction = (newTitle) => {
  return (dispatch) => {
    dispatch(GET_ALL_TASKS(newTitle));
  };
};
