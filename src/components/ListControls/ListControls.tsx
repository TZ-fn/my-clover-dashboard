import ListFiltering from "../ListFiltering/ListFiltering";
import PaginationControl from "../PaginationControl/PaginationControl";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./ListControls.module.scss";

export default function ListControls() {
  return (
    <div className={styles.mainContainer}>
      <SearchBar />
      <ListFiltering />
      <PaginationControl />
    </div>
  );
}
