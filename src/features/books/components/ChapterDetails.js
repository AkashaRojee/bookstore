import PropTypes from 'prop-types';
import styles from './ChapterDetails.module.scss';

const ChapterDetails = ({ value }) => (
  <div className={styles['chapter-details']}>
    <span className="current">CURRENT CHAPTER</span>
    <span>{value}</span>
    <button type="button">UPDATE PROGRESS</button>
  </div>
);

ChapterDetails.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ChapterDetails;
