// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../landingpagecomponents/Navbar";
import Footer from "../landingpagecomponents/Footer";

const LandingLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
