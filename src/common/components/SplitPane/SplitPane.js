import styles from './SplitPane.module.scss';

const SplitPane = ({ layout, first, second }) => (
  <div className={`${layout.componentStyles.pane} ${styles[layout.pane]}`}>
    <div className={`${layout.componentStyles.first} ${styles[layout.first]}`}>
      {first}
    </div>
    <div className={`${layout.componentStyles.second} ${styles[layout.second]}`}>
      {second}
    </div>
  </div>
);

export default SplitPane;
