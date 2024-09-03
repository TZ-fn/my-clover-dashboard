import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ClientsDataProvider from "./providers/ClientsDataProvider.tsx";
import ListFilteringProvider from "./providers/ListFilteringProvider.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClientsDataProvider>
      <ListFilteringProvider>
        <App />
      </ListFilteringProvider>
    </ClientsDataProvider>
  </React.StrictMode>
);
