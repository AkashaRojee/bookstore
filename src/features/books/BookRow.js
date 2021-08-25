import BookDetails from './BookDetails';
import ProgressDetails from './ProgressDetails';
import ChapterDetails from './ChapterDetails';
import styles from './BookRow.module.scss';

const BookRow = () => (
  <div className={styles['book-row']}>
    <BookDetails />
    <ProgressDetails value="14" />
    <ChapterDetails />
  </div>
);

export default BookRow;
