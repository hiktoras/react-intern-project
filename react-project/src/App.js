import "./App.css";
import { TiHomeOutline, TiBookmark, TiUserOutline } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import Profile from "./components/Profile/Profile";
import NavMenu from "./components/NavMenu/NavMenu";
function App() {
  return (
    <div>
      <Profile />
      <NavMenu />
    </div>
  );
}

export default App;
