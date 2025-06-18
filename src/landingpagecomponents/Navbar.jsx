import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Avatar, Button } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo0 from "/assets/images/Kordia-K.svg";
import avtarimg from "/assets/images/musician-3.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location (path)
  const [isNavOpen, setIsNavOpen] = useState(false); // Track mobile menu state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleMyLeaning = () => {
    navigate("/my-learning");
  };

  // Simulate logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev); // Toggle the mobile menu
  };

  return (
    <header className="navbar-bg fixed-top">
      <div className="mycontainer">
        <nav className="navbar py-0 navbar-expand-lg navbar-light">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img className="navbar-logo" src={logo0} alt="Logo" />
          </a>

          {/* Hamburger Icon for Mobile */}
          <button
            className="navbar-toggler text-white focus-none border-0"
            type="button"
            onClick={toggleNav}
          >
            <FaBars size={24} />
          </button>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${
              isNavOpen ? "show" : "d-none"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto me-lg-0">
              {/* Navigation Items */}
              {[
                { name: "Home", href: "/" },
                { name: "Artists", href: "/artists" },
                { name: "Kordia Acadamy", href: "/kordia-acadamy" },
                { name: "Pricing", href: "/pricing" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact-us" },
              ].map((item) => (
                <li className="nav-item font-bebas fs-5" key={item.name}>
                  <a
                    className={`nav-link mx-3 ${
                      location.pathname === item.href ? "active" : ""
                    }`}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {/* Buttons */}
              <li className="nav-item d-flex align-items-center mb-3 mb-lg-0 fs-5">
                <MdOutlineShoppingCart
                  onClick={() => navigate("/cart")}
                  color="white"
                  size={30}
                  style={{ marginRight: 20, cursor: "pointer" }}
                />
                {!isLoggedIn ? (
                  <>
                    {/* Sign Up Button */}
                    <Button
                      sx={{
                        backgroundColor: "orange",
                        color: "white",
                        padding: "2px 20px",
                        borderRadius: "30px",
                        fontFamily: "Bebas Neue, sans-serif",
                        fontSize: "1rem",
                        "&:hover": {
                          backgroundColor: "orange",
                        },
                      }}
                      onClick={() => navigate("/signup")}
                    >
                      Sign Up
                    </Button>
                    {/* Log In Button */}
                    <Button
                      sx={{
                        backgroundColor: "transparent",
                        color: "white",
                        padding: "2px 20px",
                        border: "2px solid orange",
                        borderRadius: "30px",
                        fontFamily: "Bebas Neue, sans-serif",
                        fontSize: "1rem",
                        marginLeft: 2,
                        "&:hover": {
                          backgroundColor: "orange",
                        },
                      }}
                      onClick={handleLogin}
                    >
                      Log In
                    </Button>
                  </>
                ) : (
                  <div className="d-flex align-items-center">
                    {/* My Learning Button */}
                    <Button
                      variant="contained"
                      onClick={handleMyLeaning}
                      sx={{
                        backgroundColor: "orange",
                        color: "white",
                        padding: "2px 16px",
                        borderRadius: "30px",
                        fontFamily: "Bebas Neue, sans-serif",
                        fontSize: "1rem",
                        "&:hover": {
                          backgroundColor: "orange",
                        },
                      }}
                    >
                      My Learning
                    </Button>
                    {/* MUI Avatar */}
                    <Avatar
                      src={avtarimg}
                      alt="User Avatar"
                      sx={{
                        bgcolor: "orange",
                        width: 40,
                        height: 40,
                        marginLeft: 2,
                        border: "2px solid orange",
                      }}
                    />
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
