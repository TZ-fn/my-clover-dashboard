import { createContext } from "react";

const ClientsDataContext = createContext<{
  clientsData: null;
  setClientsData?: React.Dispatch<React.SetStateAction<null>>;
}>({ clientsData: null });

export default ClientsDataContext;
