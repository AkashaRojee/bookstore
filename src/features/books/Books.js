import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookRow from './components/BookRow';
import BookForm from './components/BookForm';
import styles from './Books.module.scss';

const Books = () => {
  const books = useSelector((state) => state.books);

  useEffect(
    () => {
      
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
