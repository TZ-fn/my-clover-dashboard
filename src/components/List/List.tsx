import { useContext } from "react";
import ClientsDataContext from "../../context/ClientsDataContext.js";
import styles from "./List.module.scss";

export default function List() {
  const { clientsData } = useContext(ClientsDataContext);

  return (
    <div className={styles.listContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.tableHeadCell}>Imię i Nazwisko</th>
            <th className={styles.tableHeadCell}>Data urodzenia</th>
            <th className={styles.tableHeadCell}>Telefon</th>
            <th className={styles.tableHeadCell}>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientsData &&
            clientsData.map((client) => {
              return (
                <tr key={`${client.firstName}${client.lastName}`}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.dob}</td>
                  <td> {client.phone}</td>
                  <td> {client.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
