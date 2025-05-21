import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDelete } from "react-icons/ti";
import { MdPriceChange } from "react-icons/md";
import { OldWatches } from "../Data/ProductData";
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FaInstagram, FaStarAndCrescent, FaTelegram } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi";

const images = OldWatches;

export default function ImageGallery() {
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

  return (
    <div className="mb-[100px] text-white dark:text-black mt-[15px] p-[6px] ">
      <h1 className=" font-nunito md:text-[35px] mb-[5px] text-[27px] dark:text-black font-bold text-white">
        Top Cars
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[10px] px-[2px] ">
        {/* Product */}
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className={` p-[10px] relative border-[1px] border-[#6a6a6a] dark:border-none flex mb-[7px] dark:bg-[#f4f1f1] rounded-[15px] overflow-hidden transition-all duration-500 ${
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
              className="fixed inset-0 dark:bg-[#ffffff] bg-[#2f2f2f] w-[100vw] overflow-x-auto h-[100vh] z-[111111111111] flex items-start justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative mb-[5px] w-[100%] pt-[65px] justify-center py-[6px]"
                onClick={(e) => e.stopPropagation()}
              >
                {/*//! Back button */}
                <button
                  className=" fixed w-[100%] flex top-[0] dark:bg-[#f9aec0] bg-[#3b3b3b] py-[10px] px-[10px] "
                  onClick={() => setSelectedImage(null)}
                >
                  <IoMdArrowRoundBack
                    className="  w-[60px]  text-black bg-white rounded-xl p-[3px] "
                    size={37}
                  />
                </button>
                {/*//! button buy */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    ease: "easeOut", // Easing funksiyasi
                    duration: 0.5, // Animatsiya davomiyligi
                    delay: 0.1,
                  }}
                  className=" pb-[15px] fixed gap-[10px] px-[20px] py-[10px] dark:bg-[#f9aec0] bg-[#3b3b3b]  z-[10000000000] bottom-0 w-[100%] flex justify-between items-center border-t-[2px] rounded-t-[20px] border-t-white pt-[10px] "
                >
                  {/* //! price */}
                  <div>
                    <div className=" text-center">
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
//  <div className="flex dark:bg-[#f9aec0] bg-[#2e1563] pb-[15px] rounded-[30px] flex-col gap-[13px] justify-center items-center w-[100%]">
//  {/* Main image */}
//  <motion.div>
//    <motion.img
//      src={activeImage}
//      alt="Active watch"
//      className="w-[100%] object-cover m-auto rounded-[30px] h-[350px]"
//    />
//  </motion.div>
//  <motion.div
//    className={`  ${
//      selectedImage.col2 ? "grid-cols-2" : "grid-cols-5"
//    } flex gap-[10px] flex-wrap justify-center `}
//  >
//    {[
//      selectedImage.img,
//      selectedImage.img2,
//      selectedImage.img3,
//      selectedImage.img4,
//      selectedImage.img5,
//      selectedImage.img6,
//      selectedImage.img7,
//      selectedImage.img8,
//      selectedImage.img9,
//      selectedImage.img10,
//    ].map(
//      (img, index) =>
//        img && (
//          <img
//            key={index}
//            src={img}
//            alt={`Watch ${index + 1}`}
//            className={`md:h-[100px] md:w-auto h-[60px] w-[60px] rounded-2xl object-cover border-2 ${
//              activeImage === img
//                ? "border-gray-500 border-[3px] p-[1px]  rounded-2xl "
//                : "border-transparent"
//            }`}
//            onClick={() => setActiveImage(img)}
//          />
//        )
//    )}
//  </motion.div>
// </div>
