import PropTypes from 'prop-types';
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

SplitPane.propTypes = {
  layout: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  first: PropTypes.elementType.isRequired,
  second: PropTypes.elementType.isRequired,
};

export default SplitPane;
