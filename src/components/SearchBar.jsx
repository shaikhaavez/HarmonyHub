import React, { useState } from "react";
import { assets } from "../assets/assets";
import SearchSongs from "../../apis/SearchSongs";

const SearchBar = () => {
  const [data, setData] = useState("");
  return (
    <div className="bg-slate-400 px-3 py-1.5 rounded-3xl">
      <input
        className="py-1 px-16 rounded-2xl "
        type="search"
        name="search"
        placeholder="Find songs and more..."
      />
      <button className="px-4" type="submit">
        <img className="size-4 mt-2" src={assets.search_icon} alt="" />{" "}
      </button>
    </div>
  );
};

export default SearchBar;
