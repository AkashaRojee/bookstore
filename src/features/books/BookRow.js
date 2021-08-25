import BookDetails from './BookDetails';
import ProgressDetails from './ProgressDetails';

const BookRow = () => (
  <div className="book-row">
    <BookDetails />
    <ProgressDetails value="14" />
  </div>
);

export default BookRow;
