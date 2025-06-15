import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { motion } from "framer-motion";

const MenuAll = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeOut", // Easing funksiyasi
        duration: 0.4, // Animatsiya davomiyligi
        delay: 0.1,
      }}
      className=" font-bold bg-[#3b3b3b] border-[white] border-t-[3px] rounded-t-[17px] p-[9px] pb-[23px] fixed bottom-0 w-[100%] dark:text-white gap-[14px] z-[100000] flex items-center text-center"
    >
      {/* top watchs */}
      <NavLink
        className="w-[100%] border-[1px] border-white rounded-[7px] py-[7px] "
        to="/"
      >
        <h1>Топ</h1>
      </NavLink>
      {/* All watches */}
      <NavLink
        to="/AllProductes"
        className="w-[100%] border-[1px] border-white rounded-[7px] py-[7px]"
      >
        <h1>Все</h1>
      </NavLink>
      {/* Zapchasi */}
      <NavLink
        to="/AllWatches"
        className="w-[100%] border-[1px] border-white rounded-[7px] py-[7px]"
      >
        <h1>Магазин</h1>
      </NavLink>
      {/* basket */}
      <NavLink
        to="/basket"
        className="border-[1px] border-white text-[23px] rounded-[7px] px-[15px] py-[7px]"
      >
        <h1>
          <FaShoppingBasket />
        </h1>
      </NavLink>
    </motion.div>
  );
};

export default MenuAll;
