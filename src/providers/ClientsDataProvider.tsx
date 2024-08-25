import { ReactNode, useState } from "react";
import ClientsDataContext from "../context/ClientsDataContext";

interface ClientsDataProviderProps {
  children: ReactNode;
}

export default function ClientsDataProvider({ children }: ClientsDataProviderProps) {
  const [clientsData, setClientsData] = useState(null);

  const clientsContext = {
    clientsData,
    setClientsData,
  };

  return <ClientsDataContext.Provider value={clientsContext}>{children}</ClientsDataContext.Provider>;
}
