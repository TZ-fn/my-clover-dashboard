import { useState } from "react";
import styles from "./ListFiltering.module.scss";

export default function ListFiltering() {
  const [areCheckboxesVisible, setAreCheckboxesVisible] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <h3>
        Filtrowanie klientów{" "}
        <button className={styles.toggleCheckboxesBtn} onClick={() => setAreCheckboxesVisible(!areCheckboxesVisible)}>
          {areCheckboxesVisible ? "▲" : "▼"}
        </button>
      </h3>

      {areCheckboxesVisible && (
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
      )}
    </div>
  );
}
