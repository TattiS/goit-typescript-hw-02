import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import React from "react";

interface ISearchProps {
  className?: string;
  onSearch: (searchString: string) => void;
}

function SearchBar({ onSearch }: ISearchProps) {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const searchTerm = (form.elements.namedItem("search") as HTMLInputElement)
      .value;
    if (searchTerm.trim() === "") {
      toast.error("You need to add any word for seaching", {
        position: "top-right",
      });
      return;
    }
    onSearch(searchTerm.trim());
    //form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={submitHandler}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={css.submitBtn} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;
