import { useState } from "react";
import css from "./SearchBar.module.css";
function SearchBar(onSubmit) {
  const [inputValue, setInputValue] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };
  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <header className={css.header}>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={inputValue}
          onChange={changeHandler}
        />
        <button type="submit" onSubmit={submitHandler}>
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
