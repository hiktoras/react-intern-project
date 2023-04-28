import "./NavMenu.css";
import NavMenuItem from "../NavMenuItem/NavMenuItem";

const NavMenu = () => {
  return (
    <div className="menuBox">
      <NavMenuItem title="Home" classText="selectedNav" />
      <NavMenuItem title="My Courses" classText="unselectedNav" />
      <NavMenuItem title="Profile" classText="unselectedNav" />
    </div>
  );
};

export default NavMenu;
