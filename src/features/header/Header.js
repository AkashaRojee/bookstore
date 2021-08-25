import PersonIcon from '@material-ui/icons/Person';
import WebsiteTitle from '../../common/components/WebsiteTitle';
import Navigation from '../../common/components/Navigation';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <WebsiteTitle value="Bookstore CMS" />
    <Navigation paths={['books', 'categories']} />
    <PersonIcon />
  </div>
);

export default Header;
