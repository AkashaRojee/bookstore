import styles from './ChapterDetails.module.scss';

const ChapterDetails = ({ number }) => (
  <div className={styles['chapter-details']}>
    <span>CURRENT CHAPTER</span>
    <span>
      Chapter
      {' '}
      {number}
    </span>
    <button type="button">UPDATE PROGRESS</button>
  </div>
);

export default ChapterDetails;
