import styles from "./CourseList.module.css";
import CourseListItem from "../CourseListItem/CourseListItem";
import courseJs from "../../assets/photos/coursejs.jpg";
import coursePp from "../../assets/photos/powerp.jpg";
import courseDs from "../../assets/photos/courseds.jpg";
import courseDd from "../../assets/photos/coursedd.jpg";

const courseData = [
  {
    photo: "assest/photos/coursejs.png",
    time: "-3 h 15 min",
    title: "JavaScript",
    text: "Advanced web applications.",
    image: courseJs,
  },
  {
    time: "-5 h 30 min",
    title: "Powerpoint",
    text: "Enhance your presentaion.",
    image: coursePp,
  },
  {
    time: "-12 h 25 min",
    title: "Data Science",
    text: "Analyze the data like a pro.",
    image: courseDs,
  },
  {
    time: "-2 h 45 min",
    title: "Digital Design",
    text: "Learn the basics of the design.",
    image: courseDd,
  },
];

const CourseList = (props) => {
  return (
    <section className={styles.coursesBox}>
      {courseData.map((cData) => (
        <CourseListItem {...cData} />
      ))}
    </section>
  );
};

export default CourseList;
