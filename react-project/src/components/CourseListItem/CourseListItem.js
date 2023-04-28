import "./CourseListItem.css";
import courseJs from "../../assets/photos/coursejs.jpg";

const CourseListItem = (props) => {
  return (
    <section>
      <button className="courseContainer">
        <div className="coursePhoto">
          <img src={props.image} alt="Profile Pic"></img>
        </div>

        <div className="courseTime">{props.time}</div>
        <div className="courseTitle">{props.title}</div>
        <div className="courseText">{props.text}</div>
      </button>
    </section>
  );
};

export default CourseListItem;
