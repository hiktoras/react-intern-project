import styles from "./NotificationItem.module.css";
import { ReactComponent as AchievementIcon } from "../../assets/achievement_icon.svg";
import { ReactComponent as PurchaseIcon } from "../../assets/purchase_icon.svg";
import { ReactComponent as MessagesIcon } from "../../assets/messages_icon.svg";
import { ReactComponent as CoursesIcon } from "../../assets/newcourses_icon.svg";

function Icon(title) {
  switch (title) {
    case "New Achievement":
      return <AchievementIcon />;
    case "Complete Purchase":
      return <PurchaseIcon />;
    case "Unread Messages":
      return <MessagesIcon />;
    default:
      return <CoursesIcon />;
  }
}
function FrameClassname(title) {
  switch (title) {
    case "New Achievement":
      return styles.achievementFrame;
    case "Complete Purchase":
      return styles.purchaseFrame;
    case "Unread Messages":
      return styles.messagesFrame;
    default:
      return styles.coursesFrame;
  }
}
const NotificationItem = (props) => {
  return (
    <div className={styles.notifContainer}>
      <div className={FrameClassname(props.title)}>
        <div className={styles.notifIcon}>{Icon(props.title)}</div>
      </div>
      <div className={styles.notifContent}>
        <div className={styles.notifTitle}>{props.title}</div>
        <div className={styles.notifText}>
          <p>{props.text}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
