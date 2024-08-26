import { useContext } from "react";
import ClientsDataContext from "../../context/ClientsDataContext.js";

export default function List() {
  const { clientsData } = useContext(ClientsDataContext);

  return (
    <table>
      {clientsData &&
        clientsData.map((client) => {
          return (
            <div key={`${client.firstName}${client.lastName}`}>
              <p>
                {client.firstName} {client.lastName}
              </p>
            </div>
          );
        })}
    </table>
  );
}
