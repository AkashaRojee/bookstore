import styles from './SplitPane.module.scss';

const SplitPane = ({ layout, first, second }) => (
  <div className={`${styles.SplitPane} ${styles[layout.pane]}`}>
    <div className={styles[layout.first]}>
      {first}
    </div>
    <div className={styles[layout.second]}>
      {second}
    </div>
  </div>
);

export default SplitPane;