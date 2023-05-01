import styles from "./CourseListItem.module.css";

const CourseListItem = (props) => {
  return (
    <section>
      <button className={styles.courseContainer}>
        <div className={styles.coursePhoto}>
          <img src={props.image} alt="Profile Pic"></img>
        </div>

        <div className={styles.courseTime}>{props.time}</div>
        <div className={styles.courseTitle}>{props.title}</div>
        <div className={styles.courseText}>{props.text}</div>
      </button>
    </section>
  );
};

export default CourseListItem;
