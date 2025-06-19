import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDelete } from "react-icons/ti";
import { MdAddShoppingCart, MdPriceChange } from "react-icons/md";
import { Byd } from "../Data/ProductData";
import {
  FaChevronDown,
  FaChevronLeft,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsBatteryCharging } from "react-icons/bs";

const images = Byd;

export default function MersDetailes() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const exchangeRate = 12000; // USD to UZS
  const [openFilter, setOpenFilter] = useState(false);

  //! selected
  const [selectedItem, setselectedItem] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  // Active image state
  const [activeImage, setActiveImage] = useState("");
  //! 360
  const [open, setOpen] = useState(false);

  //! for more images
  const [isLoadedd, setIsLoadedd] = useState(false);
  const [selectedImagee, setSelectedImagee] = useState(null);

  const handleProductClick = (product) => {
    setOpenFilter(false);
  };

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // On component load, set initial active image
  useEffect(() => {
    if (selectedImage) {
      setActiveImage(selectedImage.img); // Default to the first image
    }
  }, [selectedImage]);

  //! toggle
  const toggle = (i) => {
    if (selectedItem === i) {
      return setselectedItem(null);
    }

    setselectedItem(i);
  };

  const filteredImages = images.filter((img) => {
    const isBrandMatch = selectedBrand === "All" || img.brend === selectedBrand;
    const isPriceMatch =
      (!minPrice || img.price >= minPrice) &&
      (!maxPrice || img.price <= maxPrice);
    return isBrandMatch && isPriceMatch;
  });

  return (
    <div className="mt-[0px] mb-[100px] text-white">
      {/* Exit */}
      <div className="fixed border-b-[3px] z-[1000000] border-[#515151] w-[100%] flex top-[0] dark:bg-[#f4f1f1] bg-[#3b3b3b] py-[10px] px-[10px] ">
        <Link to="/" className="">
          <IoMdArrowRoundBack
            className="  w-[60px]  text-black bg-white rounded-xl p-[3px] "
            size={37}
          />
        </Link>
      </div>
      <div className="flex gap-[13px] dark:bg-[#f4f1f1] bg-[#3b3b3b] mt-[60px] p-[10px] overflow-x-scroll hide-scrollbar ">
        <button
          onClick={() => setOpenFilter(true)}
          className="px-[15px] py-[5px] rounded-full text-sm font-semibold whitespace-nowrap transition-all bg-blue-500"
        >
          <MdPriceChange className="text-[25px]" />
        </button>
        {["All", "HYBRID", "ELECTRO"].map((brand) => (
          <button
            key={brand}
            className={` px-[20px] py-[5px] font-kanit text-[17px] rounded-md ${
              selectedBrand === brand ? "bg-blue-500" : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
      {/* input */}
      {openFilter && (
        <div className=" px-[10px] w-[100%] m-auto mt-[10px] flex justify-center items-center gap-2 mb-[10px]">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-2 rounded-md w-[100%] text-black"
          />
          <span>до</span>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2 rounded-md w-[100%] text-black"
          />
        </div>
      )}
      {/* <button
        className="px-4 py-2 mb-4 text-white bg-green-500 rounded-md"
        onClick={() => setCurrency(currency === "USD" ? "UZS" : "USD")}
      >
        {currency}
      </button> */}
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px] px-[7px] mt-[10px] ">
        {filteredImages.map((img, index) => (
          <motion.div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className={` p-[10px] relative border-[2px] border-[#515151] dark:border-none flex mb-[7px] dark:bg-[#f4f1f1] rounded-[15px] overflow-hidden transition-all duration-500 ${
              isLoaded ? "blur-0 bg-[#3b3b3b]" : "blur-md bg-[#3b3b3b] "
            } `}
          >
            <div className="flex flex-col justify-between gap-[17px]">
              {/* img */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.1 }}
                className="flex gap-[10px] items-center"
              >
                <img
                  onLoad={() => setIsLoaded(true)} // Rasm yuklanganda blur yo'qoladi
                  src="https://khusko-motors.netlify.app/assets/BYD-logo-DJ9JrYTw.jpg"
                  alt="logo-brend"
                  className={`w-[50px] bg-black rounded-[50%] object-cover`}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
              >
                <h1 className="text-[20px] leading-6 uppercase font-bold font-nunito">
                  BYD
                </h1>
                <h1 className="text-[16px]">BYD HON PRO</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 0.3 }}
              >
                <h1 className="font-kanit text-[17px] leading-3 opacity-70 line-through">
                  {img.price}
                </h1>
                <h1 className="font-kanit text-[27px]">36.777$</h1>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
              className={`absolute ${img.right}`}
            >
              <img
                src={img.img}
                alt="image-product-car"
                className="h-[180px]"
              />
            </motion.div>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 dark:bg-[#ffffff] pb-[200px] bg-[#2f2f2f] w-[100vw] overflow-x-auto h-[100vh] z-[111111111111] flex items-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-[100%] pt-[65px] justify-center py-[6px]"
                onClick={(e) => e.stopPropagation()}
              >
                {/*//! Back button */}
                <button
                  className=" fixed border-b-[3px] z-[1000000] border-[#515151] w-[100%] flex top-[0] dark:bg-[#f4f1f1] bg-[#3b3b3b] py-[10px] px-[10px] "
                  onClick={() => setSelectedImage(null)}
                >
                  <IoMdArrowRoundBack
                    className="  w-[60px]  text-black bg-white rounded-xl p-[3px] "
                    size={37}
                  />
                </button>

                {/* //! Product details */}
                <div className="dark:bg-[#f4f1f1] px-[10px] pt-[10px] pb-[20px] bg-[#323232] gap-[17px] h-[82vh] justify-between dark:border-black border-white border-b-[2px] overflow-hidden relative rounded-b-[30px] border-solid md:p-[50px]  flex flex-col">
                  <div className=" flex flex-col gap-[20px]">
                    {/* Logo */}
                    <div className="flex gap-[5px] justify-between items-center">
                      <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        src="https://khusko-motors.netlify.app/assets/BYD-logo-DJ9JrYTw.jpg"
                        alt="logo-brend"
                        className=" bg-black w-[50px] text-center rounded-3xl object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className=" flex flex-col gap-[10px] "
                      >
                        <button
                          // onClick={handleAdd}
                          className="text-[33px] pr-[10px] "
                        >
                          <MdAddShoppingCart />
                        </button>
                      </motion.div>
                    </div>

                    {/* Name and model */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 2 }}
                      className=" leading-6 mt-[10px] flex flex-col gap-[8px] "
                    >
                      <h1 className=" text-[27px] font-nunito font-bold ">
                        BYD HAN GREEN 5G
                      </h1>
                      <h1 className=" text-[25px] font-nunito ">
                        Full electro
                      </h1>
                      <h1 className=" font-nunito">Model: 2025</h1>
                      <h1 className=" text-[35px]">
                        <BsBatteryCharging />
                      </h1>
                    </motion.div>
                  </div>

                  {/* Images */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "easeOut", // Easing funksiyasi
                      duration: 1, // Animatsiya davomiyligi
                      delay: 0.2,
                    }}
                    className={` absolute bottom-[130px] ${selectedImage.eright} h-auto `}
                  >
                    {/* Main image */}
                    <img
                      src={selectedImage.img}
                      alt=""
                      className=" h-[260px] "
                    />
                  </motion.div>

                  {/* Price */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    className="flex items-center justify-between"
                  >
                    <div className="text-center ">
                      <h1 className="font-nunito text-[30px]">
                        {selectedImage.price}$
                      </h1>
                      <h1 className="line-through opacity-55 leading-5 text-[18px]">
                        {selectedImage.price2} UZS
                      </h1>
                    </div>
                  </motion.div>
                </div>

                {/* //! Color Types */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                >
                  <div className="flex  dark:border-black border-white mt-[40px] pb-[40px] border-y-[2px] dark:bg-[#f4f1f1] bg-[#323232] rounded-[30px] flex-col gap-[13px] justify-center items-center w-[100%]">
                    <motion.div>
                      <div className=" p-[20px] ">
                        <motion.img
                          src={activeImage}
                          alt="Active watch"
                          className="w-[100%] object-contain m-auto rounded-[30px] h-[200px]"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      className={`  ${
                        selectedImage.col2 ? "grid-cols-2" : "grid-cols-5"
                      } flex gap-[10px] flex-wrap justify-center `}
                    >
                      {[
                        selectedImage.img,
                        selectedImage.img2,
                        selectedImage.img3,
                        selectedImage.img4,
                        selectedImage.img5,
                        selectedImage.img6,
                        selectedImage.img7,
                        selectedImage.img8,
                        selectedImage.img9,
                        selectedImage.img10,
                      ].map(
                        (img, index) =>
                          img && (
                            <img
                              key={index}
                              src={img}
                              alt={`Watch ${index + 1}`}
                              className={`md:h-[100px] md:w-auto w-[110px] rounded-2xl object-contain border-2 ${
                                activeImage === img
                                  ? "border-gray-500 border-[3px] p-[2px]  rounded-2xl "
                                  : "border-transparent"
                              }`}
                              onClick={() => setActiveImage(img)}
                            />
                          )
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                {/* //! car infos */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className=" mt-[40px] "
                >
                  <div className=" dark:bg-[#f4f1f1] px-[10px] py-[30px] pb-[30px] bg-[#323232] gap-[17px] justify-between dark:border-black border-white border-y-[2px] overflow-hidden rounded-[30px] border-solid md:p-[50px]  flex flex-col">
                    <div className="flex flex-col gap-[10px] items-center justify-center ">
                      <img
                        src={selectedImage.img}
                        className=" h-[70px] "
                        alt=""
                      />
                      <h1 className=" font-kanit text-[18px]">BYD Sport 45L</h1>
                    </div>

                    {/* //! infos */}
                    <div className=" grid-cols-3 grid gap-[20px] mt-[10px] flex-wrap justify-center place-content-center   ">
                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/acceleration.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[7px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            0-100 km/h
                          </h1>
                          <h1>7,1</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/engine_modification.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Engine type
                          </h1>
                          <h1>1.5 DOHC</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/fuel_consumption.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Fuel consumption
                          </h1>
                          <h1>3,8</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/transmission.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Transmission
                          </h1>
                          <h1>ECVT</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/motor_power.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Engine power (hp)
                          </h1>
                          <h1>290</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/fuel_tank.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[7px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Fuel tank volume
                          </h1>
                          <h1>48</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/trunk_volume.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[7px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Trunk volume
                          </h1>
                          <h1>450</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/ev_motor_power.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Electric motor power
                          </h1>
                          <h1>132</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/battery_capacity.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Battery capacity
                          </h1>
                          <h1>8,3</h1>
                        </div>
                      </div>

                      <div className=" flex justify-center flex-col items-center gap-[10px] ">
                        <img
                          src="https://urbandrive.uz/icons/car_specs/hybrid/drive_type.svg"
                          alt=""
                          className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                        />
                        <div className="flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Drive type
                          </h1>
                          <h1>FWD</h1>
                        </div>
                      </div>
                    </div>

                    {/* //! size */}
                    <div className=" grid-cols-2 grid gap-[20px] mt-[20px] mb-[20px] ">
                      <div className="flex flex-col items-center justify-center ">
                        <h1 className=" text-[15px] opacity-45">Length</h1>
                        <h1 className=" text-[19px]">4780 mm</h1>
                      </div>

                      <div className="flex flex-col items-center justify-center ">
                        <h1 className=" text-[15px] opacity-45">Width</h1>
                        <h1 className=" text-[19px]">4780 mm</h1>
                      </div>

                      <div className="flex flex-col items-center justify-center ">
                        <h1 className=" text-[15px] opacity-45">Height</h1>
                        <h1 className=" text-[19px]">4780 mm</h1>
                      </div>

                      <div className="flex flex-col items-center justify-center ">
                        <h1 className=" text-[15px] opacity-45">Wheelbase</h1>
                        <h1 className=" text-[19px]">4780 mm</h1>
                      </div>
                    </div>

                    {/* //! button */}
                    <div className="flex items-center justify-center ">
                      <a
                        href="/chazor-infos.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white dark:bg-[black] dark:text-[#f4f1f1] text-[20px] mt-[3px] text-black font-kanit rounded-2xl py-2 px-4 transition"
                      >
                        View all configurations
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* //! Product Types */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  className=" mt-[30px] px-[10px] "
                >
                  <h1 className="py-[5px] text-[19px] font-kanit ">
                    Модификации:
                  </h1>
                  <div className="flex flex-col gap-[20px]  justify-center text-center accortions ">
                    {selectedImage.typeCar.map((type, i) => (
                      <div
                        key={i}
                        className=" dark:bg-[#f4f1f1] item"
                        onClick={() => toggle(i)}
                      >
                        <div className=" title">
                          <div>
                            <h1>{type.cartitle}</h1>
                            <h1 className=" opacity-45">{type.carCost}$</h1>
                          </div>
                          <h1>
                            {selectedImage == i ? (
                              <FaChevronUp />
                            ) : (
                              <FaChevronDown />
                            )}
                          </h1>
                        </div>
                        <div
                          className={
                            selectedItem === i ? "content show " : "content"
                          }
                        >
                          <div className="flex flex-col gap-[10px] mt-[20px] items-center justify-center ">
                            <img
                              src={selectedImage.img}
                              className=" h-[70px] "
                              alt=""
                            />
                            <h1 className=" font-kanit text-[18px]">
                              BYD Sport 45L
                            </h1>
                          </div>

                          {/* //! infos */}
                          <div className=" grid-cols-3 grid gap-[20px] mt-[10px] flex-wrap justify-center place-content-center  ">
                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/acceleration.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[7px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  0-100 km/h
                                </h1>
                                <h1>7,1</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/engine_modification.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Engine type
                                </h1>
                                <h1>1.5 DOHC</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/fuel_consumption.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Fuel consumption
                                </h1>
                                <h1>3,8</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/transmission.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Transmission
                                </h1>
                                <h1>ECVT</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/motor_power.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Engine power (hp)
                                </h1>
                                <h1>290</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/fuel_tank.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[7px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Fuel tank volume
                                </h1>
                                <h1>48</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/trunk_volume.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[7px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Trunk volume
                                </h1>
                                <h1>450</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/ev_motor_power.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Electric motor power
                                </h1>
                                <h1>132</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/battery_capacity.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Battery capacity
                                </h1>
                                <h1>8,3</h1>
                              </div>
                            </div>

                            <div className=" flex justify-center flex-col items-center gap-[10px] ">
                              <img
                                src="https://urbandrive.uz/icons/car_specs/hybrid/drive_type.svg"
                                alt=""
                                className=" bg-white py-[4px] pl-[12px] pr-[12px] rounded-2xl h-[50px]"
                              />
                              <div className="flex flex-col text-center ">
                                <h1 className=" text-[13px] opacity-55">
                                  Drive type
                                </h1>
                                <h1>FWD</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* //! 360 car bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  onClick={() => setOpen(true)}
                  className="py-[20px] dark:bg-[#f4f1f1] mt-[50px] px-[15px] border-y-[2px] border-solid border-white bg-[#323232] rounded-[30px] "
                >
                  <h1 className=" text-center font-nunito leading-6 text-[22px]">
                    360° aylanada ichki qisimni kuzatish
                  </h1>
                  <div className=" relative mt-[20px] flex justify-center items-center ">
                    <img
                      src="https://bydauto.uz/media/1678467749_772.webp"
                      alt=""
                      className="rounded-[40px]"
                    />
                    <img
                      src="https://static.tildacdn.one/tild6163-6331-4138-a138-653439646561/343444.png"
                      alt=""
                      className=" absolute bottom-[60px] h-[100px] "
                    />
                  </div>
                </motion.div>
                {open && (
                  <div className="bg-black flex justify-center items-center w-[100%] h-[100vh] fixed top-0 z-[100000000000000]">
                    <h1 className="absolute ">Iltmos kutib turing</h1>
                    <div
                      onClick={() => setOpen(false)}
                      className=" uppercase z-[10000] absolute top-[10px] text-[20px] font-nunito bg-red-600 py-[10px] px-[30px] rounded-lg "
                    >
                      <h1>Orqaga</h1>
                    </div>
                    <iframe
                      src={`https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4300`}
                      className=" w-[100%] z-[1000] h-[100%] "
                    ></iframe>
                  </div>
                )}

                {/* //! images  */}
                <div className=" mt-[80px]">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] p-[10px]">
                    {selectedImage.moreImages.map((img, i) => (
                      <div
                        key={i}
                        className={` bg-[#9b9b9b] p-[1px] flex flex-col gap-[5px] rounded-lg transition-all duration-500 ${
                          isLoadedd
                            ? "blur-0 bg-[#0d1d33]"
                            : "blur-md bg-[#112544] "
                        }`}
                      >
                        <motion.img
                          src={img.image}
                          alt={`Image ${i}`}
                          className={`cursor-pointer rounded-lg w-[100%] object-cover h-[200px] transition-all duration-500 ${
                            isLoadedd ? "blur-0" : "blur-md"
                          }`}
                          onLoad={() => setIsLoadedd(true)} // Rasm yuklanganda blur yo'qoladi
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedImagee(img)}
                        />
                      </div>
                    ))}
                    <AnimatePresence>
                      {selectedImagee && (
                        <motion.div
                          className="fixed inset-0 bg-[#000000e0] opacity-40 z-[1111111111] flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onClick={() => setSelectedImagee(null)}
                        >
                          <motion.div
                            className="relative w-[100%] mb-[90px] items-center justify-center px-[10px] pt-[20px] rounded-lg shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              className="absolute p-1  text-white bg-gray-800 rounded-full top-[-50px] right-[45%] "
                              onClick={() => setSelectedImagee(null)}
                            >
                              <TiDelete size={35} />
                            </button>
                            <img
                              src={selectedImagee.image}
                              alt="Selected"
                              className=" w-[100%] object-contain m-auto "
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/*//! button buy */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeOut", // Easing funksiyasi
                    duration: 0.5, // Animatsiya davomiyligi
                    delay: 0.1,
                  }}
                  className=" pb-[22px] fixed gap-[10px] px-[20px] py-[10px] dark:bg-[#f4f1f1] bg-[#3b3b3b]  z-[10000] bottom-0 w-[100%] flex justify-between items-center border-t-[2px] rounded-t-[20px] border-t-white pt-[5px] "
                >
                  {/* //! price */}
                  <div>
                    <div className="text-center ">
                      <h1 className=" font-nunito text-[19px]  ">
                        {selectedImage.price} ${" "}
                      </h1>
                      <h1 className=" opacity-65 font-nunito">
                        {selectedImage.price2} UZS
                      </h1>
                    </div>
                  </div>
                  <div className=" flex justify-center items-center gap-[9px] ">
                    <a
                      href="https://t.me/khusko077"
                      target="_blank"
                      className=" text-[20px] p-[7px] border-[2px] text-black bg-white rounded-[10px] border-black w-[145px] text-center "
                    >
                      Оформить
                    </a>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/khusko1"
                        className=" text-[30px]  "
                      >
                        <FaInstagram />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://t.me/khusko077"
                        className=" text-[30px]"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
