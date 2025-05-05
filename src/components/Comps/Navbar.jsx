import React, { useState } from "react";

import { useTheme } from "../context/ThemeContext";

//! icons
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdSell } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiCupcake } from "react-icons/gi";
import { Logo } from "../../../public/ImageShare";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <div className=" z-[10000]  border-b-[2px] border-solid dark:border-black rounded-b-[20px] bg-[#000000] dark:bg-[#f0ecec]  md:text-white dark:text-black flex justify-between py-[5px] items-center w-[100%] border-white px-[25px] md:px-[40px]  m-auto ">
        <div>
          <img src={Logo} alt="" className=" h-[63px] w-[70px] rounded-2xl " />
          {/* <h1 className=" font-kanit flex justify-center items-center gap-[7px] text-[24px] dark:text-black ">
            AJ MOTORS
          </h1> */}
        </div>
        {/* laptop */}
        <div className=" md:flex hidden justify-center items-center gap-[65px] ">
          <div className="text-[20px] font-kanit flex justify-center items-center gap-[35px] ">
            <a className="duration-300 hover:text-red-500" href="#">
              Home
            </a>
            <a className="duration-300 hover:text-red-500" href="#">
              About
            </a>
            <a className="duration-300 hover:text-red-500" href="#">
              Servis
            </a>
            <a className="duration-300 hover:text-red-500" href="#">
              Contact
            </a>
          </div>
          <div className=" flex justify-center items-center gap-[15px] text-[15px]">
            <button
              onClick={toggleDarkMode}
              className=" p-[5px] border rounded-[50%] text-black dark:text-white bg-white dark:bg-black"
            >
              {darkMode ? (
                <BsFillMoonStarsFill className="text-[22px]" />
              ) : (
                <FaSun className="text-[23px]" />
              )}
            </button>
            <div className=" bg-red-600 dark:text-white py-[7px] px-[15px] rounded-lg md:hover:bg-red-800 cursor-pointer duration-300 flex justify-center items-center gap-[5px] ">
              <TbPhoneCall />
              <h1>Cantact</h1>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden z-[100] flex justify-center items-center gap-[20px]">
          <button
            onClick={toggleDarkMode}
            className=" p-[5px] border rounded-[50%] text-black dark:text-white bg-white dark:bg-black"
          >
            {darkMode ? (
              <BsFillMoonStarsFill className="text-[22px]" />
            ) : (
              <FaSun className="text-[23px]" />
            )}
          </button>

          <div className="md:hidden z-[100] text-[30px] block">
            {!open && <HiMenuAlt3 onClick={() => setOpen(true)} />}
          </div>
        </div>
        {/*  */}
        {open && (
          <div className=" fixed z-[1000000000000] top-[0px] p-[25px]  bg-[#0f192b] dark:bg-white  left-0 w-[100%] h-[100%] overflow-scroll m-auto right-0  md:hidden ">
            <div className=" w-[100%] flex justify-center items-center ">
              {open && (
                <IoClose
                  className=" text-center text-[40px] "
                  onClick={() => setOpen(false)}
                />
              )}
            </div>
            {/* Social medi and servise */}
            <div className=" flex justify-center mt-[30px] items-center flex-col gap-[20px]">
              <motion.a
                // initial={{ opacity: 0, x: -50 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // transition={{
                //   ease: "easeOut", // Easing funksiyasi
                //   duration: 1, // Animatsiya davomiyligi
                //   delay: 0.4,
                // }}
                target="_blank"
                href="https://t.me/TheWatchOutlet"
                className=" flex justify-center bg-white text-black dark:text-black dark:border-black font-bold items-center relative border-2 p-[7px] rounded-[15px] text-center font-nunito text-[20px] border-white w-[100%] "
              >
                Telegram
                <BsTelegram className=" absolute left-[15px] text-[30px]  " />
              </motion.a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
