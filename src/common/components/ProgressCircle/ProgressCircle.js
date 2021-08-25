import styles from './ProgressCircle.module.scss';

const ProgressCircle = ({ value }) => {
  document.documentElement.style.setProperty('--p', value);

  return (
    <div className={styles.circle} />
  );
};

export default ProgressCircle;
