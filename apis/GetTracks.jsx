import React from "react";
import axios from "axios";

const GetTracks = async () => {
  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/tracks/",
    params: {
      ids: "4WNcduiCmDNfmTEz7JvmLv",
    },
    headers: {
      "x-rapidapi-key": "72c5c1dbcamsh72ee72319c1bbcfp1b8706jsn4673383558c0",
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.tracks[0]);
  } catch (error) {
    console.error(error);
  }

  return <div>GetTracks</div>;
};

export default GetTracks;
