import styles from "./NavMenuItem.module.css";
import { ReactComponent as HomeIcon } from "../../assets/home_icon.svg";
import { ReactComponent as MyCoursesIcon } from "../../assets/mycourses_icon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/profile_icon.svg";

const NavMenuItem = (props) => {
  function Icon(title) {
    switch (title) {
      case "My Courses":
        return <MyCoursesIcon />;
      case "Profile":
        return <ProfileIcon />;
      default:
        return <HomeIcon />;
    }
  }

  return (
    <div className={styles[props.classText]}>
      <div>{Icon(props.title)}</div>
      <div className={styles.navMenuText}>{props.title}</div>
    </div>
  );
};

export default NavMenuItem;
