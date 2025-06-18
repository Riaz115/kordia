import React, { useEffect, useState } from "react";
import klogo from "/assets/images/Logo.png";
import heroimg from "/assets/images/hero-image.png";
import hero_logo from "/assets/images/hero_logo.svg";
const HeroSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fontSize = windowWidth <= 768 ? "50px" : "80px";
  return (
    <>
      <section class="bg-main-blue hero pt-90 position-relative">
        <div class="mycontainer py-5">
          <div class="row align-items-center justify-content-between">
            <div class="col-md-6">
              <div>
                <img class="w-100 hero-logo  " src={hero_logo} alt="img" />
              </div>
              <h1
                style={{ fontWeight: 400, fontSize: fontSize }}
                class="text-main-orange display-5 fw-semibold mt-3 font-bebas "
              >
                ENCONTRA<span class="text-white">.</span>
                CONECT<span class="text-white">.</span> CRIA
                <span class="text-white">.</span>
              </h1>
            </div>
            <div
              class="col-md-6 d-md-block  d-none "
              style={{
                position: "absolute",
                top: "120px ",
                right: "60px",
                zIndex: "1000",
              }}
            >
              <div class="d-flex justify-content-md-end justify-content-center my-5">
                <img class="hero-img w-70" src={heroimg} alt="heroimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>

      <div className="mycontainer mt-4">
        {" "}
        <p
          class="text-main-blue mt-2 font-poppins "
          style={{ maxWidth: "800px" }}
        >
          <span className="fw-semibold">
            Wecome to Kordia, the platform that’s changing the game for
            musicians and event planners alike.{" "}
          </span>
          Whether you're looking to book a DJ, hire a band, or find the perfect
          musician for your event, Kordia makes it simple. We’re here to help
          you find the right talent for any occasion, from weddings and
          corporate events to private parties and more.
        </p>
        <div
          class="d-flex flex-wrap flex-sm-nowrap align-items-center my-5 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <a
            class="text-uppercase btn-orange-solid rounded-pill text-white py-2 px-4 me-3 text-nowrap font-bebas"
            href="#"
          >
            Join Us
          </a>
          <div class="input-group mt-4 mt-sm-0">
            <input
              type="search"
              class="form-control  focus-none border-0 rounded-start-pill py-2"
              placeholder="Search"
              style={{ backgroundColor: "#E0E0E0" }}
            />
            <button
              class="btn-orange-solid border-0 px-3 text-white text-uppercase rounded-end-pill font-bebas"
              style={{ backgroundColor: "#013c61" }}
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
