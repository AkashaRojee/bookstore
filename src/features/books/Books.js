import BookRow from './BookRow';
import BookInfo from './BookInfo';
import BookForm from './BookForm';
import styles from './Books.module.scss';

const Books = () => (
  <div className={styles.books}>
    <BookRow
      book={new BookInfo('Action', 'The Hunger Games', 'Suzanne Collins')}
      progress="14"
      chapter="Chapter 17"
    />
    <BookRow
      book={new BookInfo('Science Fiction', 'Dune', 'Frank Herbert')}
      progress="8"
      chapter="Chapter 3: A Lesson Learned"
    />
    <BookRow
      book={new BookInfo('Economy', 'Capital in the Twenty', 'Suzanne Collins')}
      progress="0"
      chapter="Introduction"
    />
    <BookForm />
  </div>
);

export default Books;
