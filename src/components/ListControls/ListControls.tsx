import ListFiltering from "../ListFiltering/ListFiltering";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./ListControls.module.scss";

export default function ListControls() {
  return (
    <div className={styles.mainContainer}>
      <SearchBar />
      <ListFiltering />
    </div>
  );
}
