import PropTypes from 'prop-types';

const WebsiteTitle = ({ value }) => (
  <h1>{value}</h1>
);

WebsiteTitle.propTypes = {
  value: PropTypes.string.isRequired,
};

export default WebsiteTitle;
