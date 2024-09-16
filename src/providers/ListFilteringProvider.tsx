import { ReactNode, useState } from "react";
import ListFilteringContext from "../context/ListFilteringContext";

interface ListFilteringProviderProps {
  children: ReactNode;
}

export default function ListFilteringProvider({ children }: ListFilteringProviderProps) {
  const [listFiltering, setListFiltering] = useState({
    searchQuery: "",
    clientsChildren: false,
    clientsBirthDay: false,
    currentPage: 1,
    numberOfPages: 1,
  });

  const listFilteringContext = { listFiltering, setListFiltering };

  return <ListFilteringContext.Provider value={listFilteringContext}>{children}</ListFilteringContext.Provider>;
}
