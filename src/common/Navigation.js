import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ paths }) => (
  <nav>
    {paths.map((path) => {
      const pathLowerCase = path.toLowerCase();

      return (
        <Link
          to={`/${pathLowerCase}`}
          key={pathLowerCase}
        >
          {path}
        </Link>
      );
    })}
  </nav>
);

Navigation.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navigation;
