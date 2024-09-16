import { createContext } from "react";
import { Client } from "../types/Client";

const ClientsDataContext = createContext<{
  clientsData: Client[] | null;
  setClientsData: React.Dispatch<React.SetStateAction<null>> | null;
}>({ clientsData: null, setClientsData: null });

export default ClientsDataContext;
