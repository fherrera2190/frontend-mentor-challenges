import { useState } from "react";
import { SearchProps } from "../interfaces/SearchProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Search = ({ searchCountry }: SearchProps) => {
  const [search, setSearch] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchCountry(search);
    setSearch("");
  };

  return (
    <form onSubmit={handleForm} className="search">
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>

      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={handleInput}
      />
    </form>
  );
};
