import BookRow from './components/BookRow';
import BookForm from './components/BookForm';
import BookInfo from './logic/BookInfo';
import styles from './Books.module.scss';

const Books = () => (
  <div className={styles.books}>
    <div className={styles['book-rows']}>
      <BookRow
        book={new BookInfo('Action', 'The Hunger Games', 'Suzanne Collins')}
        progress={14}
        chapter="Chapter 17"
      />
      <BookRow
        book={new BookInfo('Science Fiction', 'Dune', 'Frank Herbert')}
        progress={8}
        chapter="Chapter 3: A Lesson Learned"
      />
      <BookRow
        book={new BookInfo('Economy', 'Capital in the Twenty', 'Suzanne Collins')}
        progress={0}
        chapter="Introduction"
      />
    </div>
    <BookForm />
  </div>
);

export default Books;
