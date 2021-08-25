import styles from './ProgressCircle.module.scss';

const ProgressCircle = ({ value }) => (
  <div className={styles.circle} style={{ '--p': value }} />
);
export default ProgressCircle;
