import { BrowserRouter, Route, Routes } from "react-router-dom";
//* compos
import Enter from "./Enter";
import InstallPrompt from "./InstallModal";
import ScrollManager from "./ScrollManager";
import { ToastContainer } from "react-toastify"; // Toastni qo'shamiz
import "react-toastify/dist/ReactToastify.css"; // Toast stilini import qilamiz
import BydDetailes from "../AllBrends/BydCars";

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
          <Route path="/byd" element={<BydDetailes/>} />
        </Routes>
        {/* </HelmetProvider> */}
      </BrowserRouter>
      {/* Toastlarni chiqarish uchun kerak */}
      <ToastContainer className="my-toast" />
    </div>
  );
};

export default App;
