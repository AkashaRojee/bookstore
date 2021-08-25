import PropTypes from 'prop-types';
import BookDetails from './BookDetails';
import ProgressDetails from './ProgressDetails';
import ChapterDetails from './ChapterDetails';
import styles from './BookRow.module.scss';

const BookRow = ({ book, progress, chapter }) => (
  <div className={styles['book-row']}>
    <BookDetails data={book} />
    <ProgressDetails value={progress} />
    <ChapterDetails value={chapter} />
  </div>
);

BookRow.propTypes = {
  book: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  progress: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default BookRow;
