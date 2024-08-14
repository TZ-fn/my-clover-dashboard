import styles from "./ListFiltering.module.scss";

export default function ListFiltering() {
  return (
    <div className={styles.mainContainer}>
      <h3>Filtrowanie klientów</h3>
      <div className={styles.checkboxesContainer}>
        <label htmlFor="withChildren">
          <input id="withChildren" type="checkbox" />
          Klienci z dziećmi
        </label>
        <label htmlFor="birthday">
          <input id="birthday" type="checkbox" />
          Klienci obchodzący urodziny
        </label>
        <label htmlFor="indemnityMonth">
          <input id="indemnityMonth" type="checkbox" />
          Indemnity miesiąc
        </label>
        <label htmlFor="indemnityYear">
          <input id="indemnityYear" type="checkbox" />
          Indemnity rok
        </label>
      </div>
    </div>
  );
}
