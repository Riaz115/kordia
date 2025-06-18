import React from "react";
import Footer from "../../landingpagecomponents/Footer";
import Navbar from "../../landingpagecomponents/Navbar";

import BandHero from "./BandHero";
import AboutBand from "./AboutBand";
import MayLike from "./MayLike"
import GallerySection from "./GallerySection";

const BandDetails = () => {
  return (
    <div className="bg-white">
      <BandHero />
      <div class="clip-btm-rt-box"></div>

      <AboutBand />
      <div class="clip-top-lft-box"></div>
      <GallerySection />
      <div class="clip-btm-rt-box"></div>
        <MayLike /> 
      {/* <div class="clip-top-lft-box"></div> */}
      {/* // <ReviewsSection /> */}
    </div>
  );
};

export default BandDetails;
