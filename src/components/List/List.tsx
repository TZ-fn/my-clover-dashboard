import { useContext, useEffect, useState } from "react";
import ClientsDataContext from "../../context/ClientsDataContext.js";
import formatCurrency from "../../utilities/formatCurrency.js";
import ChildrenData from "./ChildrenData/ChildrenData.js";
import ListFilteringContext from "../../context/ListFilteringContext.js";
import { ListFilteringSettings } from "../../types/ListFiltering.js";
import { Client } from "../../types/Client.js";
import formatDoB from "../../utilities/formatDoB.js";
import styles from "./List.module.scss";
import checkForBirthday from "../../utilities/checkForBirthday.js";
import { NUMBER_OF_CLIENTS_PER_PAGE } from "../../assets/constants.js";

export default function List() {
  const { clientsData } = useContext(ClientsDataContext);
  const [filteredClients, setFilteredClients] = useState<Client[] | undefined>();
  const { listFiltering, setListFiltering } = useContext(ListFilteringContext);

  useEffect(() => {
    if (clientsData) {
      const filteredClients = filterClients(clientsData, listFiltering.settings);
      setFilteredClients(filteredClients);
      setListFiltering!({
        ...listFiltering,
        numberOfPages: Math.ceil(Number(filteredClients.length / NUMBER_OF_CLIENTS_PER_PAGE)),
      });
    }
    //eslint-disable-next-line
  }, [clientsData, listFiltering.settings]);

  function handleHeaderClick(e) {
    console.log(e.target.dataset.column);
  }

  function filterClients(clients: Client[], filteringSettings: ListFilteringSettings["settings"]) {
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
              <th data-column="name" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Imię i Nazwisko
              </th>
              <th data-column="dob" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Data urodzenia
              </th>
              <th data-column="phone" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Telefon
              </th>
              <th data-column="address" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Adres
              </th>
              <th data-column="email" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Email
              </th>
              <th data-column="products" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Produkty
              </th>
              <th data-column="provider" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Provider
              </th>
              <th data-column="term" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Term
              </th>
              <th data-column="sum" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Suma Ubezpieczenia
              </th>
              <th data-column="indemnity" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Indemnity
              </th>
              <th data-column="broker" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Broker
              </th>
              <th data-column="children" className={styles.tableHeadCell} onClick={(e) => handleHeaderClick(e)}>
                Dzieci
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredClients &&
              filteredClients.map((client, i) => {
                if (
                  i < listFiltering.settings.currentPage * NUMBER_OF_CLIENTS_PER_PAGE &&
                  i >= (listFiltering.settings.currentPage - 1) * NUMBER_OF_CLIENTS_PER_PAGE
                )
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
