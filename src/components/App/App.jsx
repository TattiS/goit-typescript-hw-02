import { useState } from "react";
import css from "./App.module.css";
import SearchBox from "../SearchBar/SearchBar";

function App() {
  // const [filter, setFilter] = useState();
  const searchHandler = (searchTerm) => {
    console.log(searchTerm);
  };
  return (
    <>
      <SearchBox className={css.searchBox} onSubmit={searchHandler} />
    </>
  );
}

export default App;
