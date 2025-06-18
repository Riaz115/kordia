import React from "react";
import img1 from "/assets/images/footer-logo.png";
import img4 from "/assets/images/facebook-orange.png";
import img5 from "/assets/images/insta-orange.png";
import img6 from "/assets/images/chat-orange.png";
import { IoLogoTiktok } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-main-blue pb-5 home-footer ">
      <div class="mycontainer">
        <div class="row">
          <div class="col-xl-4">
            <div class="d-flex flex-column align-items-center align-items-sm-start">
              <div >
                <img class="footer-logo" src={img1} alt="img" />
              </div>
              <div class="d-flex align-items-center gap-2">
              <div className="rounded d-flex items-center  content-center p-2 rounded-5 " style={{backgroundColor:"#ff9700", color:"#003a5e" ,cursor:"pointer"}}>
                <FaFacebookF size={20}/>
              </div>
              <div className="rounded d-flex items-center  content-center p-2 rounded-5" style={{backgroundColor:"#ff9700", color:"#003a5e",cursor:"pointer"}}>
                <IoLogoTiktok size={20}/>
              </div>
              <div className="rounded d-flex items-center  content-center p-2 rounded-5" style={{backgroundColor:"#ff9700", color:"#003a5e",cursor:"pointer"}}>
                <RiTwitterXLine size={20}/>
              </div>
              <div className="rounded d-flex items-center  content-center p-2 rounded-5" style={{backgroundColor:"#ff9700", color:"#003a5e" ,cursor:"pointer"}}>
                <FaLinkedinIn size={20}/>
              </div>
           
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="row">
              <div class="col-sm-6 col-md-3 text-center text-sm-start mt-5">
                <h4
                  class="text-main-orange fs-6 fw-normal text-uppercase font-bebas "
                  style={{ letterSpacing: 1 }}
                >
                  Page Menus
                </h4>
                <ul class="list-unstyled mt-3 font-poppins">
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Home
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Album
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#artists">
                      Artists
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Sound
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 text-center text-sm-start mt-5">
                <h4
                  class="text-main-orange fs-6 fw-normal text-uppercase font-bebas"
                  style={{ letterSpacing: 1 }}
                >
                  Community
                </h4>
                <ul class="list-unstyled mt-3 font-poppins">
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      For Artist
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Developer
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Ads
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Inverstor
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Vendor
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 text-center text-sm-start mt-5">
                <h4
                  class="text-main-orange fs-6 fw-normal text-uppercase font-bebas"
                  style={{ letterSpacing: 1 }}
                >
                  Term & Condition
                </h4>
                <ul class="list-unstyled mt-3 font-poppins">
                  <li class="my-2">
                    <Link to="/term-and-conditions" class="text-white text-decoration-none" >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 text-center text-sm-start mt-5">
                <h4
                  class="text-main-orange fs-6 fw-normal text-uppercase font-bebas"
                  style={{ letterSpacing: 1 }}
                >
                  Social Media
                </h4>
                <ul class="list-unstyled mt-3 font-poppins">
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Twitter
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Tiktok
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Facebook
                    </a>
                  </li>
                  <li class="my-2">
                    <a class="text-white text-decoration-none" href="#">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
