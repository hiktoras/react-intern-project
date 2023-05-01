import { ReactComponent as CategoryIconNew } from "../../assets/newcategory_icon.svg";
import { ReactComponent as CategoryIconPopular } from "../../assets/popularcategory_icon.svg";
import { ReactComponent as CategoryIconFree } from "../../assets/freecategory_icon.svg";
import { ReactComponent as CategoryIconPro } from "../../assets/procategory_icon.svg";
import styles from "./CategoryListItem.module.css";

function Icon(text) {
  switch (text) {
    case "Popular":
      return <CategoryIconPopular />;
    case "Free":
      return <CategoryIconFree />;
    case "Pro":
      return <CategoryIconPro />;
    default:
      return <CategoryIconNew />;
  }
}

const CategoryListItem = (props) => {
  return (
    <button className={styles[props.classButton]}>
      <span className={styles[props.classCircle]}>
        <div className={styles.categoryIcon}>{Icon(props.text)}</div>
      </span>
      <span className={styles[props.classText]}>{props.text}</span>
    </button>
  );
};

export default CategoryListItem;
