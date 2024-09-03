import { createContext } from "react";
import { Client } from "../types/Client";

const ClientsDataContext = createContext<{
  clientsData: Client[] | null;
  setClientsData?: React.Dispatch<React.SetStateAction<null>>;
}>({ clientsData: null });

export default ClientsDataContext;
