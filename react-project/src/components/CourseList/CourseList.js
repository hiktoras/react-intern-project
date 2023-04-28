import "./CourseList.css";
import CourseListItem from "../CourseListItem/CourseListItem";
import courseJs from "../../assets/photos/coursejs.jpg";
import coursePp from "../../assets/photos/powerp.jpg";
import courseDs from "../../assets/photos/courseds.jpg";
import courseDd from "../../assets/photos/coursedd.jpg";
const CourseList = (props) => {
  return (
    <section className="coursesBox">
      <CourseListItem
        photo="assest/photos/coursejs.png"
        time="-3 h 15 min"
        title="JavaScript"
        text="Advanced web applications."
        image={courseJs}
      />
      <CourseListItem
        time="-5 h 30 min"
        title="Powerpoint"
        text="Enhance your presentaion skills."
        image={coursePp}
      />
      <CourseListItem
        time="-12 h 25 min"
        title="Data Science"
        text="Analyze the data like a pro."
        image={courseDs}
      />
      <CourseListItem
        time="-2 h 45 min"
        title="Digital Design"
        text="Learn the basics of the design."
        image={courseDd}
      />
    </section>
  );
};

export default CourseList;
