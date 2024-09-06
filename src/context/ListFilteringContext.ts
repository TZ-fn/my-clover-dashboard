import { ListFilteringSettings } from "./../types/ListFiltering";
import { createContext } from "react";

const ListFilteringContext = createContext<{
  listFiltering: ListFilteringSettings;
  setListFiltering?: React.Dispatch<
    React.SetStateAction<{
      searchQuery: string;
      clientsChildren: boolean;
      clientsBirthDay: boolean;
    }>
  >;
}>({ listFiltering: { searchQuery: "", clientsChildren: false, clientsBirthDay: false } });

export default ListFilteringContext;
