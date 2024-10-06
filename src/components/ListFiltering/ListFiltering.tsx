import { ChangeEvent, useContext, useState } from "react";
import ListFilteringContext from "../../context/ListFilteringContext";
import styles from "./ListFiltering.module.scss";

export default function ListFiltering() {
  const [areCheckboxesVisible, setAreCheckboxesVisible] = useState(false);
  const { listFiltering, setListFiltering } = useContext(ListFilteringContext);

  function updateListFiltering(fieldToUpdate: keyof typeof listFiltering.settings) {
    setListFiltering!({
      ...listFiltering,
      settings: {
        ...listFiltering.settings,
        currentPage: 1,
        [fieldToUpdate]: !listFiltering.settings[fieldToUpdate],
      },
    });
  }

  function handleInputs(e: ChangeEvent<HTMLInputElement>) {
    updateListFiltering(e.target.id as keyof typeof listFiltering.settings);
  }

  return (
    <div className={styles.mainContainer}>
      <p className={styles.listFilteringHeader} onClick={() => setAreCheckboxesVisible(!areCheckboxesVisible)}>
        Filtrowanie klientów
        <button className={styles.toggleCheckboxesBtn}>{areCheckboxesVisible ? "▲" : "▼"}</button>
      </p>

      <div className={areCheckboxesVisible ? styles.checkboxesContainer : styles.checkboxesContainerHidden}>
        <label htmlFor="clientsBirthDay">
          <input onChange={(e) => handleInputs(e)} id="clientsBirthDay" type="checkbox" />
          Klienci obchodzący dziś urodziny
        </label>
        <label htmlFor="clientsChildren">
          <input onChange={(e) => handleInputs(e)} id="clientsChildren" type="checkbox" />
          Klienci z dziećmi
        </label>
        <label htmlFor="indemnityMonth">
          <input onChange={(e) => handleInputs(e)} id="indemnityMonth" type="checkbox" />
          Indemnity miesiąc
        </label>
        <label htmlFor="indemnityYear">
          <input onChange={(e) => handleInputs(e)} id="indemnityYear" type="checkbox" />
          Indemnity rok
        </label>
      </div>
    </div>
  );
}
