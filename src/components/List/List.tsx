import { useContext } from "react";
import ClientsDataContext from "../../context/ClientsDataContext.js";
import formatCurrency from "../../utilities/formatCurrency.js";
import ChildrenData from "./ChildrenData/ChildrenData.js";
import ListFilteringContext from "../../context/ListFilteringContext.js";
import { ListFilteringSettings } from "../../types/ListFiltering.js";
import { Client } from "../../types/Client.js";
import formatDoB from "../../utilities/formatDoB.js";
import styles from "./List.module.scss";
import checkForBirthday from "../../utilities/checkForBirthday.js";

export default function List() {
  const { clientsData } = useContext(ClientsDataContext);
  const { listFiltering } = useContext(ListFilteringContext);

  function filterClients(clients: Client[], filteringSettings: ListFilteringSettings) {
    return clients.filter((client) => {
      if (filteringSettings.searchQuery.length > 0) {
        return (
          client.firstName.toLocaleLowerCase().includes(filteringSettings.searchQuery) ||
          client.lastName.toLocaleLowerCase().includes(filteringSettings.searchQuery)
        );
      }
      if (filteringSettings.clientsBirthDay) {
        return checkForBirthday(new Date(formatDoB(client.dob)).toDateString(), new Date(Date.now()).toDateString());
      }
      if (filteringSettings.clientsChildren) {
        return client.children.length > 0;
      }
      return clients;
    });
  }

  return (
    <div className={styles.listContainer}>
      {!clientsData && <p className={styles.noData}>Brak danych klientów...</p>}
      {clientsData && (
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th className={styles.tableHeadCell}>Imię i Nazwisko</th>
              <th className={styles.tableHeadCell}>Data urodzenia</th>
              <th className={styles.tableHeadCell}>Telefon</th>
              <th className={styles.tableHeadCell}>Adres</th>
              <th className={styles.tableHeadCell}>Email</th>
              <th className={styles.tableHeadCell}>Produkty</th>
              <th className={styles.tableHeadCell}>Provider</th>
              <th className={styles.tableHeadCell}>Term</th>
              <th className={styles.tableHeadCell}>Suma Ubezpieczenia</th>
              <th className={styles.tableHeadCell}>Indemnity</th>
              <th className={styles.tableHeadCell}>Broker</th>
              <th className={styles.tableHeadCell}>Dzieci</th>
            </tr>
          </thead>
          <tbody>
            {filterClients(clientsData, listFiltering).map((client, i) => {
              if (i < listFiltering.currentPage * 12)
                return (
                  <tr key={`${client.firstName}${client.lastName}`}>
                    <td>
                      {client.firstName} {client.lastName}
                    </td>
                    <td>{client.dob}</td>
                    <td>{client.phone}</td>
                    <td>
                      {client.address.rest}, {client.address.city}
                    </td>
                    <td>{client.email}</td>
                    <td>{client.products}</td>
                    <td>{client.providers}</td>
                    <td>
                      {client.term.startDate} - {client.term.endDate}
                    </td>
                    <td>{formatCurrency(Number(client.insuranceSum))}</td>
                    <td>{client.indemnityTime}</td>
                    <td>{client.broker}</td>
                    {client.children && <ChildrenData children={client.children} />}
                  </tr>
                );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
