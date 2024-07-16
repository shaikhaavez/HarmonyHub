import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col text-black hidden lg:flex gap-3 ">
      <div className=" bg-gray-600 h-[20%] rounded flex flex-col justify-around ">
        <div className=" flex items-center gap-3 pt-3 pl-8 cursor-pointer ">
          <img src={assets.home_icon} alt="HarmonyHub" className="w-7 " />
          <p className="font-bold">Home</p>
        </div>
        <div className=" flex items-center gap-3 pt-3 pl-8 cursor-pointer pb-4">
          <img src={assets.search_icon} alt="Search" className="w-7 " />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className=" bg-gray-600 h-[80%] rounded">
        <div className=" p-4 flex items-center justify-between ">
          <div className=" flex items-center gap-3 pl-2 ">
            <img className="w-9" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3 ">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 text-white">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we can help you</p>
          <button className="px-4 py-1.5 bg-black text-[15px] rounded-full mt-4 ">
            Create playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 text-white">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className="px-4 py-1.5 bg-black text-[15px] rounded-full mt-4 ">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
