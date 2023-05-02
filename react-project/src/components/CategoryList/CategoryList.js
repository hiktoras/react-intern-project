import styles from "./CategoryList.module.css";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

const categoryData = [
  {
    text: "New",
    classButton: "selectedButton",
    classCircle: "selectedCircle",
    classText: "selectedText",
  },
  {
    text: "Popular",
    classButton: "unselectedButton",
    classCircle: "unselectedCircle",
    classText: "unselectedText",
  },
  {
    text: "Free",
    classButton: "unselectedButton",
    classCircle: "unselectedCircle",
    classText: "unselectedText",
  },
  {
    text: "Pro",
    classButton: "unselectedButton",
    classCircle: "unselectedCircle",
    classText: "unselectedText",
  },
];

const CategoryList = (props) => {
  return (
    <section className={styles.categories}>
      {categoryData.map((cData) => (
        <CategoryListItem {...cData} />
      ))}
    </section>
  );
};

export default CategoryList;
