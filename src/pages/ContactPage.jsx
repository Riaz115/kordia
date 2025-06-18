import React, { useState } from "react";
import img1 from "/assets/images/phone-icon-white.png";
import img2 from "/assets/images/envelope-icon-white.png";
import img3 from "/assets/images/location-icon-white.png";
import img4 from "/assets/images/twitter-icon-blue.png";
import img5 from "/assets/images/insta-icon-blue.png";
import img6 from "/assets/images/discord-icon-blue.png";
import img7 from "/assets/images/facebook-icon-blue.png";
import { IoLogoTiktok } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const ContactPage = () => {
  const [selectedSubject, setSelectedSubject] = useState("");

  // Handle radio button change
  const handleChange = (event) => {
    setSelectedSubject(event.target.value);
  };
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
            Contact US
          </h1>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <section class="py-3">
        <div class="mycontainer">
          <p class="text-secondary text-center font-poppins">
            Any question or remarks? Just write us a message!
          </p>
          <div class="my-shadow rounded-4 p-2 my-5">
            <div class="row">
              <div class="col-md-5">
                <div class="d-flex flex-column justify-content-between contact-info-card rounded-4 p-3 p-sm-4">
                  <div>
                    <h4 class="text-white fs-3 fw-semibold font-poppins">
                      Contact Information
                    </h4>
                    <p class="text-white mb-0 font-poppins">
                      Say something to start a live chat!
                    </p>
                  </div>
                  <div class="my-4">
                    <div class="d-flex align-items-center">
                      <img class="icon-20px me-2" src={img1} alt="img" />
                      <a
                        class="text-decoration-none text-white font-poppins"
                        href="tel:+1012 3456 789"
                      >
                        +1012 3456 789
                      </a>
                    </div>
                    <div class="d-flex align-items-center py-4">
                      <img class="icon-20px me-2" src={img2} alt="img" />
                      <a
                        class="text-decoration-none text-white font-poppins"
                        href="mailto:demo@gmail.com"
                      >
                        demo@gmail.com
                      </a>
                    </div>
                    <div class="d-flex align-items-center">
                      <img class="icon-20px me-2" src={img3} alt="img" />
                      <p class="text-white mb-0 font-poppins">
                        132 Dartmouth Street Boston, Massachusetts 02156 United
                        States
                      </p>
                    </div>
                  </div>
                    <div class="d-flex align-items-center gap-2">
                               <div className="rounded d-flex items-center  content-center p-2 rounded-5" style={{backgroundColor:"#003a5ea", color:"#ff9700"}}>
                                 <FaFacebookF size={20}/>
                               </div>
                               <div className="rounded d-flex items-center  content-center p-2 rounded-5" style={{backgroundColor:"#003a5e", color:"#ff9700"}}>
                                 <IoLogoTiktok size={20}/>
                               </div>
                               <div className="rounded d-flex items-center  content-center p-2 rounded-5" style={{backgroundColor:"#003a5e", color:"#ff9700"}}>
                                 <RiTwitterXLine size={20}/>
                               </div>
                               <div className="rounded d-flex items-center  content-center p-2 rounded-5" style={{backgroundColor:"#003a5e", color:"#ff9700"}}>
                                 <FaLinkedinIn size={20}/>
                               </div>
                            
                               </div>
                </div>
              </div>
              <div class="col-md-7">
                <form action="" class="h-100">
                  <div class="d-flex flex-column px-2 px-md-4 small h-100">
                    <div class="row">
                      <div class="col-sm-6 my-4">
                        <label
                          class="form-label text-secondary font-poppins"
                          for="name"
                        >
                          Full Name
                        </label>
                        <input
                          class="w-100 border-0 border-bottom border-2 focus-none"
                          type="text"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="col-sm-6 my-4">
                        <label
                          class="form-label text-secondary font-poppins"
                          for="email"
                        >
                          Email
                        </label>
                        <input
                          class="w-100 border-0 border-bottom border-2 focus-none"
                          type="email"
                          name="email"
                          id="email"
                        />
                      </div>
                      <div class="col-sm-6 my-4">
                        <label
                          class="form-label text-secondary font-poppins"
                          for="phone"
                        >
                          Phone Number
                        </label>
                        <input
                          class="w-100 border-0 border-bottom border-2 focus-none"
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="+1 012 3456 789"
                        />
                      </div>
                    </div>
                    <h5 className="mt-3 font-poppins">Select Subject</h5>
                    <div className="d-flex flex-wrap align-items-center">
                      {/* General Inquiry 1 */}
                      <div className="me-3 my-3">
                        <div className="radio-wrapper-9">
                          <input
                            id="General-Inquiry1"
                            type="radio"
                            name="Select-subject"
                            value="General Inquiry 1"
                            checked={selectedSubject === "General Inquiry 1"}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="General-Inquiry1"
                            className="font-poppins"
                          >
                            General Inquiry 1
                          </label>
                        </div>
                      </div>

                      {/* General Inquiry 2 */}
                      <div className="me-3 my-3">
                        <div className="radio-wrapper-9">
                          <input
                            id="General-Inquiry2"
                            type="radio"
                            name="Select-subject"
                            value="General Inquiry 2"
                            checked={selectedSubject === "General Inquiry 2"}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="General-Inquiry2"
                            className="font-poppins"
                          >
                            General Inquiry 2
                          </label>
                        </div>
                      </div>

                      {/* General Inquiry 3 */}
                      <div className="me-3 my-3">
                        <div className="radio-wrapper-9">
                          <input
                            id="General-Inquiry3"
                            type="radio"
                            name="Select-subject"
                            value="General Inquiry 3"
                            checked={selectedSubject === "General Inquiry 3"}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="General-Inquiry3"
                            className="font-poppins"
                          >
                            General Inquiry 3
                          </label>
                        </div>
                      </div>

                      {/* General Inquiry 4 */}
                      <div className="me-3 my-3">
                        <div className="radio-wrapper-9">
                          <input
                            id="General-Inquiry4"
                            type="radio"
                            name="Select-subject"
                            value="General Inquiry 4"
                            checked={selectedSubject === "General Inquiry 4"}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="General-Inquiry4"
                            className="font-poppins"
                          >
                            General Inquiry 4
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <label
                        class="form-label text-secondary mb-3 font-poppins"
                        for="message"
                      >
                        Message
                      </label>
                      <input
                        class="w-100 border-0 border-bottom border-2 focus-none"
                        type="text"
                        name="name"
                        id="name"
                      />
                    </div>
                    <div class="mt-auto">
                      <div class="my-3 d-flex justify-content-center justify-content-sm-end">
                        <input
                          class="py-3 px-5 border-0 text-white bg-main-blue rounded-3 font-poppins"
                          type="submit"
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default ContactPage;
