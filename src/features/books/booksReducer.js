//action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

//initialise state
const initialState = [];

//action creators
const addBook = payload => ({
  type: ADD_BOOK,
  payload: payload
});

const removeBook = payload => ({
  type: REMOVE_BOOK,
  payload: payload
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      //...
    case REMOVE_BOOK:
      //...
    default:
      return state;
  }
};

export default booksReducer;