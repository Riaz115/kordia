import React from "react";
import Navbar from "../landingpagecomponents/Navbar";
import Footer from "../landingpagecomponents/Footer";
import img1 from "/assets/images/contact-card-2.jpeg";
import img2 from "/assets/images/tape.png";
import img3 from "/assets/images/mission.jpeg";
const AboutPage = () => {
  return (
    <>
      <section class="about-page-top bg-main-blue pt-90">
        <div class="mycontainer">
          <h1
            style={{
              fontSize: "60px", // Increase font size
              letterSpacing: "2px", // Add gap between letters
            }}
            class="py-5 mb-0 display-2 text-main-orange text-uppercase text-center fw-medium font-bebas"
          >
            About Kordia
          </h1>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <section class="py-5">
        <div class="mycontainer">
          <div class="row pb-5 align-items-center">
            <div class="col-md-6">
              <h2
                style={{
                  fontSize: "60px", // Increase font size
                  letterSpacing: "2px", // Add gap between letters
                }}
                class="display-5 text-center text-sm-start text-main-orange text-uppercase fw-medium font-bebas"
              >
                Why Kordia?
              </h2>
              <p class="mt-3 text-center text-sm-start text-lsm-14 font-poppins">
                Kordia is designed to revolutionize the way musicians and event
                organizers connect, providing a modern, efficient solution for
                both parties. For musicians, the platform simplifies finding
                gigs by giving them a professional space to showcase their
                talent, build a portfolio, and receive timely payments—no more
                waiting for word-of-mouth or chasing down late payments. For
                event organizers, Kordia offers a seamless way to discover and
                book the perfect musical talent for any occasion, whether it's a
                wedding, corporate event, or private party. The platform ensures
                secure contracts and reliable payment processing, so you can
                focus on delivering an unforgettable experience. With Kordia,
                both musicians and organizers can eliminate the stress and
                uncertainty of traditional booking methods, creating a win-win
                environment where talent and opportunity meet effortlessly.
              </p>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-center justify-content-md-end mt-5 mt-md-0">
                <div class="w-90 about-page-images-box right-leaned position-relative">
                  <img
                    class="w-100 h-100 object-fit-cover img-gray"
                    src={img1}
                    alt="img"
                  />
                  <img
                    class="position-absolute start-50 translate-middle"
                    src={img2}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row py-3 align-items-center">
            <div class="col-md-6">
              <h2
                style={{
                  fontSize: "60px", // Increase font size
                  letterSpacing: "2px", // Add gap between letters
                }}
                class="display-6 text-center text-sm-start text-main-orange text-uppercase fw-medium font-bebas"
              >
                Our mission
              </h2>
              <p class="mt-3 text-center text-sm-start text-lsm-14 font-poppins">
                At Kordia, our mission is to redefine the live music experience
                by transforming how musicians and event organizers connect and
                collaborate. We are committed to bridging the gap between gifted
                artists and those in need of extraordinary live performances.
                Our platform provides a cutting-edge, seamless solution for
                booking musical acts, designed to simplify and enhance the
                process for everyone involved. By offering a modern interface
                and efficient tools, we make it easier than ever for musicians
                to discover exciting gig opportunities and for event organizers
                to find and hire the perfect talent. At Kordia, we’re not just
                facilitating bookings; we’re creating a vibrant ecosystem where
                musical excellence meets exceptional events, ensuring that every
                performance is a remarkable experience.
              </p>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-center justify-content-md-end mt-5 mt-md-0">
                <div class="w-90 about-page-images-box right-leaned position-relative">
                  <img
                    class="w-100 h-100 object-fit-cover img-gray"
                    src={img3}
                    alt="img"
                  />
                  <img
                    class="position-absolute start-50 translate-middle"
                    src={img2}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row py-5 align-items-center">
            <div class="col-md-6 order-1 order-md-2">
              <h2
                style={{
                  fontSize: "60px", // Increase font size
                  letterSpacing: "2px", // Add gap between letters
                }}
                class="display-6 text-center text-sm-start text-main-orange text-uppercase fw-medium font-bebas "
              >
                For MUsicians
              </h2>
              <p class="mt-3 text-center text-sm-start text-lsm-14 font-poppins">
                Kordia provides a dynamic and engaging platform that empowers
                musicians to effortlessly showcase their talent, craft an
                impressive profile, and tap into a continuous stream of exciting
                booking opportunities. We recognize the challenges artists face,
                from gaining visibility to securing timely payments, and we’ve
                meticulously designed our platform to address these needs. By
                streamlining the logistics of booking, Kordia allows you to
                concentrate fully on your craft and performances. Beyond just
                securing gigs, Kordia offers a thriving, supportive community
                that fosters growth and collaboration. With our reliable tools
                and resources, you can manage your bookings with ease, ensuring
                a smooth and rewarding experience at every step. At Kordia,
                we’re not just helping you find work;
              </p>
            </div>
            <div class="col-md-6 order-2 order-md-1">
              <div class="d-flex justify-content-center justify-content-md-start mt-5 mt-md-0">
                <div class="w-90 about-page-images-box right-leaned position-relative">
                  <img
                    class="w-100 h-100 object-fit-cover img-gray"
                    src={img3}
                    alt="img"
                  />
                  <img
                    class="position-absolute start-50 translate-middle"
                    src={img2}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row py-5 align-items-center">
            <div class="col-md-6">
              <h2
                style={{
                  fontSize: "60px", // Increase font size
                  letterSpacing: "2px", // Add gap between letters
                }}
                class="display-6 text-center text-sm-start text-main-orange text-uppercase fw-medium font-bebas"
              >
                For event organizers,
              </h2>
              <p class="mt-3 text-center text-sm-start text-lsm-14 font-poppins">
                Kordia is the ultimate solution for finding and booking the
                ideal musical talent for your event. Our user-friendly search
                tools and detailed musician profiles streamline the process of
                discovering performers who perfectly match your event’s unique
                requirements. We handle all the administrative tasks, including
                contract creation and payment processing, to ensure a seamless
                and hassle-free experience. This means you can focus on what
                matters most—creating an extraordinary event that leaves a
                lasting impression on your guests. With Kordia, the logistics
                are taken care of, so you can concentrate on delivering an
                unforgettable experience
              </p>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-center justify-content-md-end mt-5 mt-md-0">
                <div class="w-90 about-page-images-box right-leaned position-relative">
                  <img
                    class="w-100 h-100 object-fit-cover img-gray"
                    src={img3}
                    alt="img"
                  />
                  <img
                    class="position-absolute start-50 translate-middle"
                    src={img2}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default AboutPage;
