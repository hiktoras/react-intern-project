import styles from "./CategoryList.module.css";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
const CategoryList = (props) => {
  return (
    <section className={styles.categories}>
      <CategoryListItem
        text="New"
        classButton="selectedButton"
        classCircle="selectedCircle"
        classText="selectedText"
      />
      <CategoryListItem
        text="Popular"
        classButton="unselectedButton"
        classCircle="unselectedCircle"
        classText="unselectedText"
      />
      <CategoryListItem
        text="Free"
        classButton="unselectedButton"
        classCircle="unselectedCircle"
        classText="unselectedText"
      />
      <CategoryListItem
        text="Pro"
        classButton="unselectedButton"
        classCircle="unselectedCircle"
        classText="unselectedText"
      />
    </section>
  );
};

export default CategoryList;
