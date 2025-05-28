import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDelete } from "react-icons/ti";
import { MdAddShoppingCart, MdPriceChange } from "react-icons/md";
import { OldWatches } from "../Data/ProductData";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaInstagram, FaStarAndCrescent, FaTelegram } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi";
import { BsBatteryCharging } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const images = OldWatches;

export default function ImageGallery() {
  //! selected
  const [selectedItem, setselectedItem] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // Active image state
  const [activeImage, setActiveImage] = useState("");

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

  return (
    <div className="mb-[100px] text-white dark:text-black mt-[15px] p-[6px] ">
      <h1 className=" font-nunito md:text-[35px] mb-[5px] text-[27px] dark:text-black font-bold text-white">
        Top Cars
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px] px-[4px] ">
        {/* Product */}
        {images.map((img, index) => (
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
                  37.777$
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
        {/* //! Product Details */}
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
                  className=" fixed border-b-[3px] z-[1000000] border-[#515151] w-[100%] flex top-[0] dark:bg-[#f9aec0] bg-[#3b3b3b] py-[10px] px-[10px] "
                  onClick={() => setSelectedImage(null)}
                >
                  <IoMdArrowRoundBack
                    className="  w-[60px]  text-black bg-white rounded-xl p-[3px] "
                    size={37}
                  />
                </button>

                {/* //! Product details */}
                <div className="dark:bg-white px-[10px] pt-[10px] pb-[20px] bg-[#323232] gap-[17px] h-[82vh] justify-between dark:border-black border-white border-b-[2px] overflow-hidden relative rounded-b-[30px] border-solid md:p-[50px]  flex flex-col">
                  <div className=" flex flex-col gap-[20px]">
                    {/* Logo */}
                    <div className="flex gap-[5px] justify-between items-center">
                      <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        src="https://khusko-motors.netlify.app/assets/BYD-logo-DJ9JrYTw.jpg"
                        alt="logo-brend"
                        className=" bg-black w-[50px] text-center rounded-3xl object-cover"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
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
                      transition={{ ease: "easeOut", duration: 1.5 }}
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
                    className=" absolute bottom-[130px] -right-[290px] h-auto "
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
                    transition={{ ease: "easeOut", duration: 1.5, delay: 0.2 }}
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
                <div>
                  <div className="flex  dark:border-black border-white mt-[40px] pb-[40px] border-y-[2px] dark:bg-[#f9aec0] bg-[#323232] rounded-[30px] flex-col gap-[13px] justify-center items-center w-[100%]">
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
                </div>

                {/* //! car infos */}
                <div className=" mt-[40px] ">
                  <div className=" dark:bg-white px-[10px] py-[30px] pb-[30px] bg-[#323232] gap-[17px] justify-between dark:border-black border-white border-y-[2px] overflow-hidden rounded-[30px] border-solid md:p-[50px]  flex flex-col">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
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
                        <div className=" flex flex-col text-center ">
                          <h1 className=" text-[13px] opacity-55">
                            Drive type
                          </h1>
                          <h1>FWD</h1>
                        </div>
                      </div>
                    </div>

                    <div className=" grid-cols-2 grid gap-[20px] mt-[20px] mb-[20px] ">
                      <div className=" flex justify-center flex-col items-center">
                        <h1 className=" text-[15px] opacity-45">Length</h1>
                        <h1 className=" text-[19px]">4780 mm</h1>
                      </div>

                      <div className=" flex justify-center flex-col items-center">
                        <h1 className=" text-[15px] opacity-45">Width</h1>
                        <h1 className=" text-[19px]">4780 mm</h1>
                      </div>

                      <div className=" flex justify-center flex-col items-center">
                        <h1 className=" text-[15px] opacity-45">Height</h1>
                        <h1 className=" text-[19px]">4780 mm</h1>
                      </div>

                      <div className=" flex justify-center flex-col items-center">
                        <h1 className=" text-[15px] opacity-45">Wheelbase</h1>
                        <h1 className=" text-[19px]">4780 mm</h1>
                      </div>
                    </div>
                  </div>
                </div>

                {/* //! Product Types */}
                <div className=" mt-[30px] px-[10px] ">
                  <h1 className="py-[7px] text-[19px] font-kanit ">
                    Модификации:
                  </h1>
                  <div className="flex flex-col gap-[20px]  justify-center text-center accortions ">
                    {selectedImage.typeCar.map((type, i) => (
                      <div key={i} className=" item" onClick={() => toggle(i)}>
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                              <div className=" flex flex-col text-center ">
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
                  className=" pb-[22px] fixed gap-[10px] px-[20px] py-[10px] dark:bg-[#f9aec0] bg-[#3b3b3b]  z-[10000000000] bottom-0 w-[100%] flex justify-between items-center border-t-[2px] rounded-t-[20px] border-t-white pt-[5px] "
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

//  {/*//! mein image and typs */}
