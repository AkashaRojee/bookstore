import PersonIcon from '@material-ui/icons/Person';
import WebsiteTitle from './WebsiteTitle';
import Navigation from './Navigation';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <WebsiteTitle value="Bookstore CMS" />
    <Navigation paths={['Books', 'Categories']} />
    <PersonIcon />
  </div>
);

export default Header;
