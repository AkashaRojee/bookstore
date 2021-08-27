import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from './booksReducer';
import BookRow from './components/BookRow';
import BookForm from './components/BookForm';
import styles from './Books.module.scss';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(
    () => {
      dispatch(getBooks());
    },
    [],
  );

  return (
    <div className={styles.books}>
      <div className={styles['book-rows']}>
        { books.map((book) => (
          <BookRow
            key={book.item_id}
            book={book}
            progress={0}
            chapter="(Not started yet)"
          />
        ))}
      </div>
      <BookForm />
    </div>
  );
};

export default Books;
