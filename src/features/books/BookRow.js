import BookDetails from './BookDetails';
import ProgressDetails from './ProgressDetails';
import styles from './BookRow.module.scss';

const BookRow = () => (
  <div className={styles['book-row']}>
    <BookDetails />
    <ProgressDetails value="14" />
  </div>
);

export default BookRow;
