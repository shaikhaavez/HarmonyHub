import React from "react";
import axios from "axios";

const getAlbums = async () => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/albums/",
    params: {
      ids: "3IBcauSj5M2A6lTeffJzdv",
    },
    headers: {
      "x-rapidapi-key": "72c5c1dbcamsh72ee72319c1bbcfp1b8706jsn4673383558c0",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.albums[0].images[2].url);
  } catch (error) {
    console.error(error);
  }

  return <div>getAlbums</div>;
};

export default getAlbums;
