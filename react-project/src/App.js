import "./App.css";
import Profile from "./components/Profile/Profile";
import NavMenu from "./components/NavMenu/NavMenu";
import AuthButton from "./components/AuthButton/AuthButton";
import Notifications from "./components/Notifications/Notifications";
import MainTitle from "./components/MainTitle/MainTitle";
import CategoryList from "./components/CategoryList/CategoryList";
import CourseList from "./components/CourseList/CourseList";

function App() {
  return (
    <main className="main">
      <aside className="column1">
        <header>
          <Profile
            userName="John Smith"
            email="johnsmith@gmail.com"
            photo="/profile.png"
          />
        </header>
        <nav>
          <NavMenu />
        </nav>
        <footer>
          <AuthButton text="Log Out" />
        </footer>
      </aside>

      <section className="column2">
        <header>
          <MainTitle />
        </header>
        <article>
          <CategoryList />
        </article>
        <article>
          <CourseList />
        </article>
      </section>

      <aside className="column3">
        <Notifications />
      </aside>
    </main>
  );
}

export default App;
