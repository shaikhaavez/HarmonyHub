import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";

const App = () => {
  return (
    <div className="h-screen bg-gray-300">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio preload="auto"></audio>
    </div>
  );
};

export default App;
