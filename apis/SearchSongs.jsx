import React, { useState } from "react";
import axios from "axios";

const SearchSongs = async () => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: "Kendrick Lamar",
      type: "multi",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "x-rapidapi-key": "72c5c1dbcamsh72ee72319c1bbcfp1b8706jsn4673383558c0",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.albums.items);
  } catch (error) {
    console.error(error);
  }
  return <div>SearchSongs</div>;
};

export default SearchSongs;
