import styles from "./PaginationControl.module.scss";

export default function PaginationControl() {
  return (
    <div className={styles.container}>
      <button className={styles.paginationBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" />
        </svg>
      </button>
      <button className={styles.paginationBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" />
        </svg>
      </button>
    </div>
  );
}
