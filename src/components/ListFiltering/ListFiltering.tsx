import { ChangeEvent, useContext, useState } from "react";
import ListFilteringContext from "../../context/ListFilteringContext";
import styles from "./ListFiltering.module.scss";

export default function ListFiltering() {
  const [areCheckboxesVisible, setAreCheckboxesVisible] = useState(false);
  const { listFiltering, setListFiltering } = useContext(ListFilteringContext);

  function handleInputs(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "birthday") {
      setListFiltering!({
        ...listFiltering,
        settings: {
          ...listFiltering.settings,
          clientsBirthDay: !listFiltering.settings.clientsBirthDay,
        },
      });
    }
    if (e.target.id === "withChildren") {
      setListFiltering!({
        ...listFiltering,
        settings: {
          ...listFiltering.settings,
          clientsChildren: !listFiltering.settings.clientsChildren,
        },
      });
    }
  }

  return (
    <div className={styles.mainContainer}>
      <p className={styles.listFilteringHeader} onClick={() => setAreCheckboxesVisible(!areCheckboxesVisible)}>
        Filtrowanie klientów
        <button className={styles.toggleCheckboxesBtn}>{areCheckboxesVisible ? "▲" : "▼"}</button>
      </p>

      <div className={areCheckboxesVisible ? styles.checkboxesContainer : styles.checkboxesContainerHidden}>
        <label htmlFor="birthday">
          <input onChange={(e) => handleInputs(e)} id="birthday" type="checkbox" />
          Klienci obchodzący dziś urodziny
        </label>
        <label htmlFor="withChildren">
          <input onChange={(e) => handleInputs(e)} id="withChildren" type="checkbox" />
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
