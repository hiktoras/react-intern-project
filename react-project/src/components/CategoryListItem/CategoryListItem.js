import "./CategoryListItem.css";
import { ReactComponent as CategoryIconNew } from "../../assets/newcategory_icon.svg";
import { ReactComponent as CategoryIconPopular } from "../../assets/popularcategory_icon.svg";
import { ReactComponent as CategoryIconFree } from "../../assets/freecategory_icon.svg";
import { ReactComponent as CategoryIconPro } from "../../assets/procategory_icon.svg";

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
    <section>
      <button className={props.classButton}>
        <div className="categoryIcon">{Icon(props.text)}</div>
        <div className={props.classCircle}></div>
        <div className={props.classText}>{props.text}</div>
      </button>
    </section>
  );
};

export default CategoryListItem;
