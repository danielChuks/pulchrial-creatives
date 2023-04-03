import styles from "./index.module.scss";
import { AiOutlineSearch } from "react-icons/Ai";

export default function SearchBar() {
  return (
    <div className={styles["container"]}>
      <div className={styles['search-field']}>
        <input type="text" placeholder="Search for anything" />
      </div>

      <div className={styles["search-glass"]}>
        <AiOutlineSearch />
      </div>
    </div>
  );
}
