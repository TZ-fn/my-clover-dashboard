import { ReactNode, useState } from "react";
import ListFilteringContext from "../context/ListFilteringContext";

interface ListFilteringProviderProps {
  children: ReactNode;
}

export default function ListFilteringProvider({ children }: ListFilteringProviderProps) {
  const [listFiltering, setListFiltering] = useState({ clientsChildren: false, clientsBirthDay: false });

  const listFilteringContext = { listFiltering, setListFiltering };

  return <ListFilteringContext.Provider value={listFilteringContext}>{children}</ListFilteringContext.Provider>;
}
