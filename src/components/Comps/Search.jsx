import React, { useState } from "react";
// import { AllWatchs } from "../Data/WatchData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Search = () => {
  const [view, setView] = useState(false);
  return (
    <div
      className={` w-[100%] ${
        view ? "fixed top-0 bg-[#0f192b] " : "block mt-[5px] "
      } search-container z-[100000]  `}
    >
      <div className={`w-[94%] mt-[10px]  m-auto `}>
        <input
          type="text"
          placeholder="Найдите название часов..."
          className=" w-[100%] border-[1.5px] bg-[#ffffff] border-black text-black px-[10px] rounded-md  p-[5px] outline-none  "
        />
      </div>
    </div>
  );
};

export default Search;
