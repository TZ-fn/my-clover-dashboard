import { ListFilteringSettings } from "./../types/ListFiltering";
import { createContext } from "react";

const ListFilteringContext = createContext<{
  listFiltering: ListFilteringSettings;
  setListFiltering?: React.Dispatch<
    React.SetStateAction<{
      searchQuery: string;
      clientsChildren: boolean;
      clientsBirthDay: boolean;
      currentPage: number;
    }>
  >;
}>({ listFiltering: { searchQuery: "", clientsChildren: false, clientsBirthDay: false, currentPage: 1 } });

export default ListFilteringContext;
