import React from "react";
import { Helmet } from "react-helmet"; // Helmetni import qilish
import Navbar from "../Comps/Navbar";
import { Corusell } from "../Comps/Corusel";
import MenuBrends from "../Comps/Brends";
import Search from "../Comps/Search";
import ImageGallery from "../Comps/PopulorProducts";
import MenuAll from "./MenuPages";

const Enter = () => {
  return (
    <div className="mb-[85px]">
      {/* SEO uchun Helmet */}
      <Helmet>
        <title>AJ MOTORS</title>
      </Helmet>
      <Navbar />
      <Search />
      <Corusell />
      <MenuBrends />
      <ImageGallery />
      <MenuAll />
    </div>
  );
};

export default Enter;
