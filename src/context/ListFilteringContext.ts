import { ListFilteringSettings } from "./../types/ListFiltering";
import { createContext } from "react";

const ListFilteringContext = createContext<{
  listFiltering: ListFilteringSettings;
  setListFiltering: React.Dispatch<React.SetStateAction<ListFilteringSettings>> | null;
}>({
  listFiltering: { searchQuery: "", clientsChildren: false, clientsBirthDay: false, currentPage: 1, numberOfPages: 1 },
  setListFiltering: null,
});

export default ListFilteringContext;
