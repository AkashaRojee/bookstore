/* eslint-disable */
import API from "../../common/utils/API";
import BookInfo from "./logic/BookInfo";

const api = new API();

const initialState = [];

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const getBooks = () => async (dispatch) => {
  const apiBooks = await api.get();
  Object.entries(apiBooks).forEach(([id, book]) => {
    dispatch(addBook(new BookInfo(book[0].category, book[0].title, 'N/A', id)));
  });
};

export const postBook = (payload) => async (dispatch) => {
  await api.post(payload); 
  dispatch(addBook(payload));
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
