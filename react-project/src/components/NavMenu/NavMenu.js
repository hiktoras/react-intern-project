import { TiHomeOutline, TiBookmark, TiUserOutline } from "react-icons/ti";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className="menuBox">
      <div className="home">
        <span>
          <TiHomeOutline />
        </span>
        <b> Home</b>
      </div>
      <div className="courses">
        <span>
          <TiBookmark />
        </span>
        <b> My Courses</b>
      </div>
      <div className="profile">
        <span>
          <TiUserOutline />
        </span>
        <b> Profile</b>
      </div>
    </div>
  );
};

export default NavMenu;
