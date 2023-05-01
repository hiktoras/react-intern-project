import styles from "./NavMenu.module.css";
import NavMenuItem from "../NavMenuItem/NavMenuItem";

const NavMenu = () => {
  return (
    <ul className={styles.menuBox}>
      <li>
        <NavMenuItem title="Home" classText="selectedNav" />
      </li>
      <li>
        <NavMenuItem title="Profile" classText="unselectedNav" />
      </li>
      <li>
        <NavMenuItem title="My Courses" classText="unselectedNav" />
      </li>
    </ul>
  );
};

export default NavMenu;
