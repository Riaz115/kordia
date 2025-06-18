import React from "react";
// import Footer from "../landingpagecomponents/Footer";
// import Navbar from "../landingpagecomponents/Navbar";

import MusicianHero from "./MusicianHero";
import AboutMusician from "./AboutMusician";
// import MayLike from "../Components/artistdetailcomponents/MayLike";
// import ReviewsSection from "./ReviewsSection";
import GallerySection from "./GallerySection";
import FeaturedSection from "./FeaturedSection";

const ArtisitDetails = () => {
  return (
    <div className="bg-white">
      <MusicianHero />
      <div class="clip-btm-rt-box"></div>

      <AboutMusician />
      <div class="clip-top-lft-box"></div>
      <GallerySection />
      <div class="clip-btm-rt-box"></div>
      <FeaturedSection />
      {/* <ReviewsSection /> */}

    </div>
  );
};

export default ArtisitDetails;
