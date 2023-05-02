import styles from "./MainTitle.module.css";

const MainTitle = () => {
  return (
    <article className={styles.mainText}>
      <p className={styles.hello}>Hello,</p>
      <p className={styles.john}>John Smith 👋</p>
      <p className={styles.coursesTitle}>Courses 😉</p>
    </article>
  );
};

export default MainTitle;
