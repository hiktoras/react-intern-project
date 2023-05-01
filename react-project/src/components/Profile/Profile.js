import styles from "./Profile.module.css";
import { ReactComponent as ArrowIcon } from "../../assets/arrow_icon.svg";

const Profile = (props) => {
  return (
    <div className={styles.profileBox}>
      <img
        className={styles.userPhoto}
        src={props.photo}
        alt="Profile Pic"
      ></img>
      <article className={styles.userInfo}>
        <p className={styles.userName}>{props.userName}</p>
        <p className={styles.userEmail}>{props.email}</p>
      </article>
      <div className={styles.userArrow}>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Profile;
