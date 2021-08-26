import PropTypes from 'prop-types';
import styles from './ProgressCircle.module.css';

const ProgressCircle = ({ value }) => (
  <div className={styles.circle} style={{ '--p': value }} />
);

ProgressCircle.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ProgressCircle;
