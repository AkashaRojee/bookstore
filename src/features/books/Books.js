import BookRow from './BookRow';
import BookInfo from './BookInfo';

const Books = () => (
  <div className="books">
    <BookRow
      book={new BookInfo('Action', 'The Hunger Games', 'Suzanne Collins')}
      progress="14"
      chapter="17"
    />
  </div>
);

export default Books;
