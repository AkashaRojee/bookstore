import styles from './ChapterDetails.module.scss';

const ChapterDetails = ({ value }) => (
  <div className={styles['chapter-details']}>
    <span>CURRENT CHAPTER</span>
    <span>{value}</span>
    <button type="button">UPDATE PROGRESS</button>
  </div>
);

export default ChapterDetails;
