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
          <Route path="/magazin" element={<MagazinDetailes/>} />
        </Routes>
        {/* </HelmetProvider> */}
      </BrowserRouter>
      {/* Toastlarni chiqarish uchun kerak */}
      <ToastContainer className="my-toast" />
    </div>
  );
};

export default App;
