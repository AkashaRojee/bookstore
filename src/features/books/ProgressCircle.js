import styles from './ProgressCircle.module.scss';

const ProgressCircle = ({ value }) => {
  document.documentElement.style.setProperty('--p', value);

  return (
    <div className={styles['circle-border']}>
      <div className={styles.circle} />
    </div>
  );
};

export default ProgressCircle;
