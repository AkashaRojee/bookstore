/* eslint-disable */

//action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

//initialise state
const initialState = [];

//action creators
export const addBook = payload => ({
  type: ADD_BOOK,
  payload: payload
});

export const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload: payload
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      //...
    default:
      return state;
  }
};

export default booksReducer;