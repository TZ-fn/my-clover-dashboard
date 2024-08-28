import { useContext } from "react";
import ClientsDataContext from "../../context/ClientsDataContext.js";
import formatCurrency from "../../utilities/formatCurrency.js";
import styles from "./List.module.scss";

export default function List() {
  const { clientsData } = useContext(ClientsDataContext);

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
            {clientsData.map((client) => {
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
                  <td>
                    {client.children.map((children) => (
                      <tr>
                        <td>
                          {children.firstName} {children.lastName}, {children.dob}
                        </td>
                      </tr>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
