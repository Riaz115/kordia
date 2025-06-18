import React from "react";
import Footer from "../landingpagecomponents/Footer";
import Navbar from "../landingpagecomponents/Navbar";

import ArtistHero from "../Components/artistdetailcomponents/ArtistHero";
import AboutArtist from "../Components/artistdetailcomponents/AboutArtist";
import ReviewsSection from "../Components/artistdetailcomponents/ReviewsSection";
import GallerySection from "../Components/artistdetailcomponents/GallerySection";
import ArtistServices from "../Components/artistdetailcomponents/ArtistServices";
const ArtisitDetails = () => {
  return (
    <>
      <ArtistHero />
      <div class="clip-btm-rt-box"></div>

      <AboutArtist />
      <div class="clip-top-lft-box"></div>
      <GallerySection />
      <div class="clip-btm-rt-box"></div>
      <ArtistServices />

      <div class="clip-top-lft-box"></div>
      <ReviewsSection/>
    </>
  );
};

export default ArtisitDetails;
