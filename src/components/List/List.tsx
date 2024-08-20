import clients from "../../assets/mockedClientsData.js";

export default function List() {
  return (
    <table>
      {clients.map((client) => {
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
