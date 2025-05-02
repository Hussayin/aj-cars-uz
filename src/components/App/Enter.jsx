import React from "react";
import { Helmet } from "react-helmet"; // Helmetni import qilish
import Navbar from "../Comps/Navbar";

const Enter = () => {
  return (
    <div className="mb-[85px]">
      {/* SEO uchun Helmet */}
      <Helmet>
        <title>AJ MOTORS</title>
      </Helmet>
      <Navbar />
    </div>
  );
};

export default Enter;
