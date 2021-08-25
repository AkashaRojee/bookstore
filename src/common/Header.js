import WebsiteTitle from './WebsiteTitle';
import Navigation from './Navigation';

const Header = () => (
  <div className="header">
    <WebsiteTitle value="Bookstore CMS" />
    <Navigation paths={['books', 'categories']} />
  </div>
);

export default Header;
