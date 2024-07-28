import React from "react";
import GetTracks from "./GetTracks";
import getAlbums from "./GetAlbums";
import AlbumTracks from "./AlbumTracks";
import SearchSongs from "./SearchSongs";

const ApiManager = () => {
  return (
    <div>
      <button className="bg-black text-white rounded-lg" onClick={getAlbums}>
        Get Album
      </button>
      <button
        className="bg-black text-white rounded-lg ml-3"
        onClick={AlbumTracks}
      >
        Album Tracks
      </button>
      <button
        className="bg-black text-white rounded-lg ml-3"
        onClick={GetTracks}
      >
        Get Tracks
      </button>
      <button
        className="bg-black text-white rounded-lg ml-3"
        onClick={SearchSongs}
      >
        Search Songs
      </button>
    </div>
  );
};

export default ApiManager;
