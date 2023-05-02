import styles from "./NavMenu.module.css";
import NavMenuItem from "../NavMenuItem/NavMenuItem";

const navData = [
  {
    title: "Home",
    classText: "selectedNav",
  },
  {
    title: "Profile",
    classText: "unselectedNav",
  },
  {
    title: "My Courses",
    classText: "unselectedNav",
  },
];
const NavMenu = () => {
  return (
    <ul className={styles.menuBox}>
      {navData.map((nData) => (
        <li>
          <NavMenuItem {...nData} />
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
