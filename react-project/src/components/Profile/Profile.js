import "./Profile.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow_icon.svg";

const Profile = (props) => {
  return (
    <div className="profileBox">
      <div className="userPhoto">
        <img src={props.photo} alt="Profile Pic"></img>
      </div>
      <div className="userInfo">
        <div className="userName">{props.userName}</div>
        <div className="userEmail">{props.email}</div>
      </div>
      <div className="userArrow">
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Profile;
