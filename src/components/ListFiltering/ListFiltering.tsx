import { useContext, useEffect, useState } from "react";
import ClientsDataContext from "../../context/ClientsDataContext";
import { Client } from "../../types/Client";
import styles from "./ListFiltering.module.scss";

export default function ListFiltering() {
  const [areCheckboxesVisible, setAreCheckboxesVisible] = useState(false);
  const { clientsData, setClientsData } = useContext(ClientsDataContext);
  const [filteredClientsData, setFilteredClientsData] = useState<Client[] | null>(null);

  useEffect(() => {
    setFilteredClientsData(clientsData);
  }, [clientsData]);

  function handleInputs(e) {
    console.log(e.target.id);
  }

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
            <input onChange={(e) => handleInputs(e)} id="withChildren" type="checkbox" />
            Klienci z dziećmi
          </label>
          <label htmlFor="birthday">
            <input onChange={(e) => handleInputs(e)} id="birthday" type="checkbox" />
            Klienci obchodzący dziś urodziny
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
      )}
    </div>
  );
}
