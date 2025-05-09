import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

const MenuBrends = () => {
  return (
    <div className=" font-kanit mx-[7px]  mt-[6px]">
      <div className="flex items-center justify-between px-[5px] ">
        <h1 className="font-kanit text-[20px]">All Brends</h1>
        <h1 className=" text-[24px]">
          <FaAnglesRight />
        </h1>
      </div>
      <div className=" flex dark:bg-[#f0ecec]  gap-[12px] mt-[3px] rounded-[10px] overflow-x-scroll bg-[#3b3b3b] p-[3px] hide-scrollbar ">
        <button className="px-[6px] py-[5px] flex flex-col items-center text-sm font-semibold whitespace-nowrap transition-all">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
              src="https://khusko-motors.netlify.app/assets/BYD-logo-DJ9JrYTw.jpg"
              alt="BYD Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="mt-1 text-white dark:text-black">BYD</h2>
        </button>

        <button className="px-[6px] py-[5px] flex flex-col items-center text-sm font-semibold whitespace-nowrap transition-all">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
              src="https://ae01.alicdn.com/kf/S3c5da90925cb4bf19b00bf1afe904276R.jpg_960x960.jpg"
              alt="BYD Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="mt-1 text-white dark:text-black">LIXING</h2>
        </button>

        <button className="px-[6px] py-[5px] flex flex-col items-center text-sm font-semibold whitespace-nowrap transition-all">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
              src="https://deepaluz.netlify.app/assets/unnamed-DymAL7xm.webp"
              alt="BYD Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="mt-1 text-white dark:text-black">Jetour</h2>
        </button>

        <button className="px-[6px] py-[5px] flex flex-col items-center text-sm font-semibold whitespace-nowrap transition-all">
          <div className="w-[60px] bg-black h-[60px] rounded-full overflow-hidden">
            <img
              src="https://www.bmw.ru/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg"
              alt="BYD Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="mt-1 text-white dark:text-black">BMW</h2>
        </button>

        <button className="px-[6px] py-[5px] flex flex-col items-center text-sm font-semibold whitespace-nowrap transition-all">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
              src="https://deepaluz.netlify.app/assets/deepal-DRWVMi4a.webp"
              alt="BYD Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="mt-1 text-white dark:text-black">Deepal</h2>
        </button>

        <button className="px-[6px] py-[5px] flex flex-col items-center text-sm font-semibold whitespace-nowrap transition-all">
          <div className="w-[60px] bg-white h-[60px] rounded-full overflow-hidden">
            <img
              src="https://deepaluz.netlify.app/assets/leapmotor-Dpkv3Bez.png"
              alt="BYD Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="mt-1 text-white dark:text-black">Leapmotors</h2>
        </button>

        <button className="px-[6px] py-[5px] flex flex-col items-center text-sm font-semibold whitespace-nowrap transition-all">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnnxaCc3jqlyIn2TVvlXCEryvER4bPXcL1Q&s"
              alt="BYD Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="mt-1 text-white dark:text-black">Hongqi</h2>
        </button>
      </div>
    </div>
  );
};

export default MenuBrends;
