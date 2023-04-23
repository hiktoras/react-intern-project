import { IoIosArrowForward, IoIosPerson } from "react-icons/io";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profileBox">
      <div className="userPhoto">
        {" "}
        <IoIosPerson size={60} />
      </div>
      <div className="userInfo">
        <div className="userName">John Smith</div>
        <div className="userEmail">johnsmith@gmail.com</div>
      </div>
      <div className="userArrow">
        <IoIosArrowForward size={20} />
      </div>
    </div>
  );
};

export default Profile;
