import React from "react";
import img1 from "/assets/images/why-kordia-logo.png";

const WhyKordia = () => {
  return (
    <section
      className="py-5"
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
      id="whykordia"
    >
      <div className="mycontainer">
        <div className="row align-items-center">
          <div className="col-lg-6 why-kordia">
            <h2
              style={{
                fontSize: "60px", // Increase font size
                letterSpacing: "2px", // Add gap between letters
              }}
              className="text-main-orange display-4 text-center text-sm-start fw-semibold text-uppercase font-bebas"
            >
              Why Choose Kordia
            </h2>
            <p
              className="mt-4 text-center text-sm-start text-lsm-16 font-poppins"
              style={{ fontWeight: 300, letterSpacing: 2 }}
            >
              Kordia redefines how musicians and event organizers connect,
              creating a seamless experience that removes the hassle from
              booking live music. For event organizers, Kordia offers a secure
              and efficient way to discover talented musicians who align with
              their event’s unique style, with transparent pricing and upfront
              costs. Musicians benefit from a professional space to showcase
              their portfolios, highlight past performances, and connect with
              event opportunities without the uncertainty of delayed payments or
              unclear contracts. With built-in communication tools and a
              supportive community, Kordia makes the process of booking,
              managing schedules, and finalizing details straightforward for
              both parties. Join Kordia and be part of a vibrant network that
              brings extraordinary live experiences to life.
            </p>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <img className="why-kordia-logo w-100" src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKordia;
