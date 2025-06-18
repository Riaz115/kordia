import React, { useState } from "react";
import { Link } from "react-router-dom";
import locimg from "/assets/images/location.png";
import musicimg from "/assets/images/music.png";
import albumimg from "/assets/images/album.png";
import bandimg from "/assets/images/band.png";
import { Typography } from "@mui/material";
import { PiGuitarLight } from "react-icons/pi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import SendProposalModal from "../../Admin/Modals/SendProposalModal";

const AboutArtist = () => {
  const location = useLocation();
  const kordiaSubscription = location.state?.kordiaSubscription || false;
  const hasEnsembles = location.state?.hasEnsembles || false;
  const hasBand = location.state?.hasBand || false;
  const [genres, setGenres] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleAddGenre = (e) => {
    e.preventDefault();
    const newGenre = e.target.elements.genre.value.trim();
    if (newGenre && !genres.includes(newGenre)) {
      setGenres([...genres, newGenre]);
      e.target.reset(); // Clear input field
    }
  };

  const handleRemoveGenre = () => {
    setGenres((prevGenres) => prevGenres.slice(0, -1));
  };

  // Assuming these are the arrays you're working with for 'Instruments' and 'Genres' or other similar data
  const instruments = [
    "Guitar",
    "Piano",
    "Violin",
    "Drums",
    "Flute",
    "Saxophone",
  ]; // Example data

  return (
    <div className="mycontainer bg-white py-4 px-1 px-md-5">
      <div className="row align-items-center justify-content-center text-center text-md-start p-2">
        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start mt-4 mt-md-0 ">
          {/* Location */}
          <div className="d-flex align-items-center mb-3 ">
            <img
              src={locimg}
              alt="Location"
              style={{
                width: "16px",
                height: "17px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                color: "#FF9700",
                fontSize: "14px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              Location:
            </span>
            <span
              className="ms-2"
              style={{
                color: "#013C61",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              Lisbon, Portugal
            </span>
          </div>

          {/* Band Collaboration */}
          <div className="d-flex align-items-center mb-3">
            <img
              src={bandimg}
              alt="Location"
              style={{
                width: "16px",
                height: "17px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                color: "#FF9700",
                fontSize: "14px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              Band Collaboration :
            </span>
            <span
              className="ms-2"
              style={{
                color: "#013C61",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              Indigo Sky
            </span>
          </div>

          {/* Category (Genre) */}
          <div>
            <div>
              {/* Display Genres */}
              <div className="d-flex align-items-center mb-3">
                <img
                  src={musicimg}
                  alt="Category"
                  style={{
                    width: "14px",
                    height: "17px",
                    marginRight: "8px",
                  }}
                />
                <span
                  style={{
                    color: "#FF9700",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "Poppins",
                  }}
                >
                  Genre:
                </span>
                <span
                  className="ms-2"
                  style={{
                    color: "#013C61",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                  }}
                >
                  {genres.length > 0 ? genres.join(", ") : "N/A"}
                </span>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  style={{
                    background: "none",
                    border: "none",
                    marginLeft: "8px",
                    cursor: "pointer",
                  }}
                  title="Edit Genres"
                >
                  <FaPencilAlt color="#013C61" />
                </button>
              </div>

              {/* Input Field for Adding Genres (Hidden Initially) */}
              {isEditing && (
                <form onSubmit={handleAddGenre} style={{ marginTop: "10px" }}>
                  <input
                    type="text"
                    name="genre"
                    placeholder="Add a genre"
                    style={{ marginRight: "8px", padding: "4px" }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#003A5E",
                      borderRadius: "5px",
                      outline: "none",
                      border: "none",
                      color: "white",
                    }}
                  >
                    Add
                  </button>
                </form>
              )}

              {/* List of Genres with Conditional Remove Buttons */}
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  marginTop: "10px",
                }}
              ></ul>
              {isEditing && genres.length > 0 && (
                <button
                  onClick={() => handleRemoveGenre()}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#FF9700",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <FaTrashAlt />
                </button>
              )}
            </div>
          </div>

          {/* Albums */}
          <div className="d-flex align-items-center mb-3 ">
            <img
              src={albumimg}
              alt="Albums"
              style={{
                width: "16px",
                height: "15px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                color: "#FF9700",
                fontSize: "14px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              No of Albums:
            </span>
            <span
              className="ms-2"
              style={{
                color: "#013C61",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              09
            </span>
          </div>

          {/* Instruments */}
          <div className="d-flex gap-1 mb-3">
            <PiGuitarLight size={22} style={{ color: "#003A5E" }} />
            <span
              style={{
                color: "#FF9700",
                fontSize: "14px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              Instruments
            </span>
            <span
              className="ms-2"
              style={{
                color: "#013C61",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              {instruments.join(", ") || "N/A"}{" "}
              {/* Safely join instruments or fallback to 'N/A' */}
            </span>
          </div>

          {/* Budget */}
          <div className="d-flex gap-1 mb-3 ">
            <CiMoneyCheck1 size={22} style={{ color: "#003A5E" }} />
            <span
              style={{
                color: "#FF9700",
                fontSize: "14px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              Budget
            </span>
            <span
              className="ms-2"
              style={{
                color: "#013C61",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              € 2,000
            </span>
          </div>

          <div className="d-flex mt-5 w-100 justify-content-center justify-content-md-start">
            <a
              className="btn-orange-solid w-100 text-white py-1 px-5 rounded-pill text-uppercase fw-medium font-bebas text-center outline-none border-none"
              style={{ maxWidth: "250px" }}
              onClick={(e) => {
                e.stopPropagation();
                handleShow();
              }}
            >
              Get A Quote
            </a>
          </div>

          {/* Conditional rendering for kordiaSubscription */}
          {kordiaSubscription && (
            <Link
              className="btn-orange-outline w-100 py-1 px-5 rounded-pill  fw-medium font-bebas text-center  mt-2"
              to="/kordia-acadamy"
              style={{
                maxWidth: "250px",
                color: "#FF9700",
                border: "2px solid #FF9700",
                backgroundColor: "transparent",
                textDecoration: "none",
              }}
            >
              View Kordia
            </Link>
          )}

          {/* {hasEnsembles && (
            <Link
              className="btn-orange-outline w-100 py-1 px-5 rounded-pill  fw-medium font-bebas text-center mt-2"
              to="/band-details"
              style={{
                maxWidth: "250px",
                color: "#FF9700",
                border: "2px solid #FF9700",
                backgroundColor: "transparent",
                textDecoration: "none",
              }}
            >
              View Ensembles
            </Link>
          )}

          {hasBand && (
            <Link
              className="btn-orange-outline w-100 py-1 px-5 rounded-pill  fw-medium font-bebas text-center mt-2"
              to="/band-details"
              style={{
                maxWidth: "250px",
                color: "#FF9700",
                border: "2px solid #FF9700",
                backgroundColor: "transparent",
                textDecoration: "none",
              }}
            >
              View Band
            </Link>
          )} */}
        </div>

        {/* About Section */}
        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start mt-4 mt-md-0">
          <Typography
            sx={{
              color: "#FF9700",
              fontFamily: "Bebas Neue",
              fontSize: { xs: 38, md: 40 },
            }}
          >
            About Zain Korsgaard
          </Typography>
          <p
            style={{
              color: "#013C61",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            “Music is the language of the soul, and my violin is my voice”
          </p>
          <p
            style={{
              color: "#013C61",
              fontFamily: "Poppins",
              fontWeight: 300,
              fontSize: 11,
              lineHeight: 2,
            }}
          >
            Sarah D. is a Lisbon City-based violinist known for her captivating
            blend of classical mastery and contemporary flair. A graduate of The
            Juilliard School, she has performed at iconic venues like Carnegie
            Hall and Lincoln Center, earning praise for her emotive, dynamic
            performances. While rooted in classical music, Sarah is passionate
            about exploring new genres, often collaborating with indie and folk
            artists to create a unique, genre-defying sound. When not
            performing, she teaches private violin lessons and conducts
            masterclasses, inspiring the next generation of musicians to find
            their voice through the violin.
          </p>
        </div>
      </div>
      <SendProposalModal show={show} handleClose={handleClose} />

    </div>
  );
};

export default AboutArtist;
