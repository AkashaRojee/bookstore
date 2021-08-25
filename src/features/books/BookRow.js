import BookDetails from './BookDetails';
import ProgressDetails from './ProgressDetails';
import ChapterDetails from './ChapterDetails';
import styles from './BookRow.module.scss';

const BookRow = ({ book, progress, chapter }) => (
  <div className={styles['book-row']}>
    <BookDetails data={book} />
    <ProgressDetails value={progress} />
    <ChapterDetails number={chapter} />
  </div>
);

export default BookRow;
