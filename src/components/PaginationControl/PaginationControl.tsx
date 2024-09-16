import { useContext } from "react";
import ListFilteringContext from "../../context/ListFilteringContext";
import styles from "./PaginationControl.module.scss";

export default function PaginationControl() {
  const { listFiltering, setListFiltering } = useContext(ListFilteringContext);

  function changeCurrentPage(direction: 1 | -1) {
    setListFiltering!({ ...listFiltering, currentPage: listFiltering.currentPage + direction });
  }

  return (
    <div className={styles.container}>
      <button
        disabled={listFiltering.currentPage === 1}
        className={styles.paginationBtn}
        onClick={() => changeCurrentPage(-1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" />
        </svg>
      </button>
      <p>
        Strona: {listFiltering.currentPage} z {listFiltering.numberOfPages}
      </p>
      <button
        disabled={listFiltering.currentPage === listFiltering.numberOfPages}
        className={styles.paginationBtn}
        onClick={() => changeCurrentPage(1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
        </svg>
      </button>
    </div>
  );
}
