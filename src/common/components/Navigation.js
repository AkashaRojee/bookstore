import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ paths }) => (
  <nav>
    {paths.map((path) => (
      <Link
        to={`/${path}`}
        key={path}
      >
        {path.toUpperCase()}
      </Link>
    ))}
  </nav>
);

Navigation.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navigation;
