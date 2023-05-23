import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './Header.module.css';

const Header = ({ userName }) => {
  return (
    <div className={classes.section1}>
      <h2>MYTODO</h2>
      <section className={classes.section2}>
        <p>{userName ? userName : '반가워요!'}</p>
        <FontAwesomeIcon icon={faBars} className={classes.icon} />
      </section>
    </div>
  );
};

export default Header;
