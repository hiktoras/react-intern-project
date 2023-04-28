import "./App.css";
import Profile from "./components/Profile/Profile";
import NavMenu from "./components/NavMenu/NavMenu";
import AuthButton from "./components/AuthButton/AuthButton";
import Notifications from "./components/Notifications/Notifications";
import MainTitle from "./components/MainTitle/MainTitle";
import CategoryList from "./components/CategoryList/CategoryList";
import CourseList from "./components/CourseList/CourseList";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="column1">
          <Profile
            userName="John Smith"
            email="johnsmith@gmail.com"
            photo="/profile.png"
          />
          <NavMenu />
          <AuthButton text="Log Out" />
        </div>

        <div className="column2">
          <MainTitle />
          <CategoryList />
          <CourseList />
        </div>

        <div className="column3">
          <Notifications />
        </div>
      </div>
    </div>
  );
}

export default App;
