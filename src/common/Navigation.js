// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationBar = ({ paths }) => (
  <nav>
    {paths.map((path) => (
      <span key={path}>{ path }</span>
    ))}
  </nav>
);

NavigationBar.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavigationBar;
