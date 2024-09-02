import { ListFilteringSettings } from "./../types/ListFiltering";
import { createContext } from "react";

const ListFilteringContext = createContext<{
  listFiltering: ListFilteringSettings;
  setListFiltering?: React.Dispatch<
    React.SetStateAction<{
      clientsChildren: boolean;
      clientsBirthDay: boolean;
    }>
  >;
}>({ listFiltering: { clientsChildren: false, clientsBirthDay: false } });

export default ListFilteringContext;
