import API from '../../common/utils/API';
import BookInfo from './logic/BookInfo';

const api = new API();

const initialState = [];

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = () => async (dispatch) => {
  const apiBooks = await api.get();
  Object.entries(apiBooks).forEach(([id, book]) => {
    dispatch(addBook(new BookInfo(book[0].category, book[0].title, 'N/A', id)));
  });
};

export const postBook = (payload) => async (dispatch) => {
  const apiPayload = JSON.parse(JSON.stringify(payload));
  // API needs an item_id field, which is against ESLint's camelCase rule
  await api.post(Object.assign(apiPayload, { item_id: payload.id }));
  dispatch(addBook(payload));
};

export const deleteBook = (payload) => async (dispatch) => {
  await api.delete(payload);
  dispatch(removeBook(payload));
};

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
