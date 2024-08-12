import "./App.css";
import Header from "./components/Header/Header";
import ListFiltering from "./components/ListFiltering/ListFiltering";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <ListFiltering />
    </>
  );
}

export default App;
