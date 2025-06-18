import React from "react";
import HeroSection from "../landingpagecomponents/HeroSection";
import FeaturedSection from "../landingpagecomponents/FeaturedSection";
import Testimonials from "../landingpagecomponents/Testimonials";
import WhyKordia from "../landingpagecomponents/WhyKordia";
import KordiaFeatures from "../landingpagecomponents/KordiaFeatures";
import ContactUs from "../landingpagecomponents/ContactUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <div class="clip-top-lft-box"></div>
      <Testimonials />
      <div class="clip-btm-lft-box"></div>
      <WhyKordia />
      <div class="clip-top-lft-box"></div>
      <KordiaFeatures />
      <div class="clip-btm-rt-box"></div>
      <ContactUs />
      <div class="clip-top-rt-box"></div>
    </>
  );
};

export default HomePage;
