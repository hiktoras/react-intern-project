import styles from "./Notifications.module.css";
import NotificationItem from "../NotificationItem/NotificationItem";

const Notifications = () => {
  return (
    <div>
      <p className={styles.notificationsTitle}>Notifications</p>
      <NotificationItem
        title="New Courses"
        text="We have released 10 new courses just for you."
        date="Now"
      />
      <NotificationItem
        title="New Achievement"
        text="You have just received 1 new badge for all your work."
        date="7 days ago"
      />
      <NotificationItem
        title="Complete Purchase"
        text="Please complete your purchase now to get a 50% discount."
        date="7 days ago"
      />
      <NotificationItem
        title="Unread Messages"
        text="You have 3 unread messages in your mail box."
        date="16 days ago"
      />
    </div>
  );
};

export default Notifications;
