import React from "react";
import img1 from "/assets/images/conatct-card-1.jpeg";
import img2 from "/assets/images/tape.png";
import img3 from "/assets/images/contact-card-2.jpeg";
import img4 from "/assets/images/spotify-orange.png";
import img5 from "/assets/images/insta-orange.png";
import img6 from "/assets/images/chat-orange.png";
const ContactUs = () => {
  return (
    <section class="contact-us py-5" id="contactus">
      <div class="mycontainer">
        <h2
          style={{
            fontSize: "60px", // Increase font size
            letterSpacing: "2px", // Add gap between letters
          }}
          className="text-main-orange display-4 text-center fw-semibold text-uppercase font-bebas"
        >
          Get In Touch
        </h2>
        <h4 class="text-main-orange mb-0 mt-4 fw-semibold text-uppercase font-bebas">
          Contact Us
        </h4>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <form action="">
              <div class="mt-3">
                <label
                  class="text-uppercase ps-2 fw-medium text-main-blue font-bebas"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="w-100 contactus-input rounded-pill py-1 px-3 focus-none"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name Here"
                />
              </div>
              <div class="mt-3">
                <label
                  class="text-uppercase ps-2 fw-medium text-main-blue font-bebas"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-100 contactus-input rounded-pill py-1 px-3 focus-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="USER@domain.com"
                />
              </div>
              <div class="mt-3">
                <label
                  class="text-uppercase ps-2 fw-medium text-main-blue font-bebas"
                  for="subject"
                >
                  Subject
                </label>
                <input
                  class="w-100 contactus-input rounded-pill py-1 px-3 focus-none"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="mt-3">
                <label
                  class="text-uppercase ps-2 fw-medium text-main-blue font-bebas"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  class="w-100 contactus-input rounded-4 p-3 focus-none resize-none"
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Type Any message here......."
                ></textarea>
              </div>
              <div class="mt-4">
                <input
                  class="btn-orange-solid border-0 w-100 rounded-pill text-white text-uppercase py-2 font-bebas"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-sm-6">
                <div class="card right-leaned mx-auto p-3 w-90 position-relative my-5">
                  <img src={img1} class="card-img-top object-top" alt="img" />
                  <div class="card-body">
                    <p class="text-uppercase text-center fw-medium text-main-blue small font-bebas">
                      Valentin | <span class="text-main-orange">Batteur</span>
                    </p>
                    <p class="featured-card-paragraph text-12 text-center font-poppins">
                      Propulse le groupe avec une énergie débordante et une
                      précision féroce.
                    </p>
                    <div class="d-flex justify-content-center align-items-center">
                      <a href="#">
                        <img class="icon-15px mx-2" src={img4} alt="img" />
                      </a>
                      <a href="#">
                        <img class="icon-15px mx-2" src={img5} alt="img" />
                      </a>
                      <a href="#">
                        <img class="icon-15px mx-2" src={img6} alt="img" />
                      </a>
                    </div>
                  </div>
                  <div class="position-absolute top-0 start-50 translate-middle right-leaned">
                    <img class="tape right-leaned" src={img2} alt="" />
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card left-leaned mx-auto p-3 w-80 position-relative my-5">
                  <img src={img3} class="card-img-top object-top" alt="img" />
                  <div class="card-body">
                    <p class="text-uppercase text-center fw-medium text-main-blue small font-bebas">
                      Valentin | <span class="text-main-orange">Batteur</span>
                    </p>
                    <p class="featured-card-paragraph text-12 text-center font-poppins">
                      Propulse le groupe avec une énergie débordante et une
                      précision féroce.
                    </p>
                    <div class="d-flex justify-content-center align-items-center">
                      <a href="#">
                        <img class="icon-15px mx-2" src={img4} alt="img" />
                      </a>
                      <a href="#">
                        <img class="icon-15px mx-2" src={img5} alt="img" />
                      </a>
                      <a href="#">
                        <img class="icon-15px mx-2" src={img6} alt="img" />
                      </a>
                    </div>
                  </div>
                  <div class="position-absolute top-0 start-50 translate-middle right-leaned">
                    <img class="tape right-leaned" src={img2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
