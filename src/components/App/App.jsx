import { BrowserRouter, Route, Routes } from "react-router-dom";
//* compos
import Enter from "./Enter";
import InstallPrompt from "./InstallModal";
import ScrollManager from "./ScrollManager";
import { ToastContainer } from "react-toastify"; // Toastni qo'shamiz
import "react-toastify/dist/ReactToastify.css"; // Toast stilini import qilamiz
import BydDetailes from "../AllBrends/BydCars";
import AllItems from "../Comps/AllProductes";
import MagazinDetailes from "../Comps/Magazin";
import LixingDetailes from "../AllBrends/LixingCars";
import BmwDetailes from "../AllBrends/BmwCars";
import DeepalDetailes from "../AllBrends/DeepalCars";
import LipDetailes from "../AllBrends/LipCars";
import HongqiDetailes from "../AllBrends/HongqiCars";
import MersDetailes from "../AllBrends/MersCars";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <HelmetProvider> */}
        <ScrollManager />
        <InstallPrompt />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Enter />} />
          {/* Byd detailes */}
          <Route path="/byd" element={<BydDetailes />} />
          {/* All cars */}
          <Route path="/AllProductes" element={<AllItems />} />
          {/* magazin */}
          <Route path="/magazin" element={<MagazinDetailes />} />
          {/* Lixing */}
          <Route path="/lixing" element={<LixingDetailes />} />
          {/* Bmw */}
          <Route path="/bmw" element={<BmwDetailes />} />
          {/* Deepal */}
          <Route path="/deepal" element={<DeepalDetailes />} />
          {/* Leapmotors */}
          <Route path="/leapmotors" element={<LipDetailes />} />
          {/* Hongqi */}
          <Route path="/hongqi" element={<HongqiDetailes />} />
          {/* Mers */}
          <Route path="/mers" element={<MersDetailes />} />
        </Routes>
        {/* </HelmetProvider> */}
      </BrowserRouter>
      {/* Toastlarni chiqarish uchun kerak */}
      <ToastContainer className="my-toast" />
    </div>
  );
};

export default App;
