import "./NotificationItem.css";
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
      return "notifIconFrame achievementFrame";
    case "Complete Purchase":
      return "notifIconFrame purchaseFrame";
    case "Unread Messages":
      return "notifIconFrame messagesFrame";
    default:
      return "notifIconFrame coursesFrame";
  }
}
const NotificationItem = (props) => {
  return (
    <div className="notifContainer">
      <div className={FrameClassname(props.title)}>
        <div className="notifIcon">{Icon(props.title)}</div>
      </div>
      <div className="notifContent">
        <div className="notifTitle">{props.title}</div>
        <div className="notifText">
          <p>{props.text}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
