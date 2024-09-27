export interface ListFilteringSettings {
  settings: {
    searchQuery: string;
    clientsBirthDay: boolean;
    clientsChildren: boolean;
    currentPage: number;
  };
  numberOfPages: number;
}
