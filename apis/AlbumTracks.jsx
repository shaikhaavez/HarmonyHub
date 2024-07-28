import React from "react";
import axios from "axios";

const AlbumTracks = async () => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/album_tracks/",
    params: {
      id: "3IBcauSj5M2A6lTeffJzdv",
      offset: "0",
      limit: "300",
    },
    headers: {
      "x-rapidapi-key": "72c5c1dbcamsh72ee72319c1bbcfp1b8706jsn4673383558c0",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.data.album.tracks);
  } catch (error) {
    console.error(error);
  }

  return <div>AlbumTracks</div>;
};

export default AlbumTracks;
