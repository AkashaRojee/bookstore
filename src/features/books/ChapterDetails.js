import styles from './ChapterDetails.module.scss';

const ChapterDetails = () => (
  <div className={styles['chapter-details']}>
    <span>CURRENT CHAPTER</span>
    <span>Chapter 17</span>
    <button type="button">UPDATE PROGRESS</button>
  </div>
);

export default ChapterDetails;
