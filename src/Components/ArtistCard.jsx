import React from "react";
import { FaStar } from "react-icons/fa";
import img7 from "/assets/images/spotify-orange.png";
import img8 from "/assets/images/insta-orange.png";
import img9 from "/assets/images/chat-orange.png";
import locimg from "/assets/images/location.png";
import musicimg from "/assets/images/music.png";
import albumimg from "/assets/images/album.png";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    const { kordiaSubscription, hasEnsembles, hasBand } = data; // Extract all required fields from data
    navigate("/artist-details", {
        state: { 
            artist: data, 
            kordiaSubscription, 
            hasEnsembles, 
            hasBand 
        }, // Pass all three fields
    });
};

  return (
    <div
      key={data.id}
      className="d-flex flex-column bg-white p-3 pt-3 shadow "
      style={{ width: "320px", cursor: "pointer" }}
      onClick={handleCardClick}
    >
      {/* Image */}
      <img
        src={data.imgSrc}
        alt="Card"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
      />
      <div className="d-flex flex-row justify-content-between">
        {/* Content */}
        <div className="mt-3">
          {/* Name */}
          <h4 className="mb-1 font-bebas" style={{ color: "#013C61" }}>
            {data.name}
          </h4>

          {/* Location */}
          <div className="d-flex align-items-center mb-2">
            <img
              src={locimg}
              alt="Location"
              style={{
                width: "13px",
                height: "15px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                color: "#FF9700",
                fontSize: "10px",
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
                fontSize: "10px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              {data.locationDetails}
            </span>
          </div>

          {/* Category */}
          <div className="d-flex align-items-center mb-2">
            <img
              src={musicimg}
              alt="Category"
              style={{
                width: "9px",
                height: "10px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                color: "#FF9700",
                fontSize: "10px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              Category:
            </span>
            <span
              className="ms-2"
              style={{
                color: "#013C61",
                fontSize: "10px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              {data.category}
            </span>
          </div>

          {/* Albums */}
          <div className="d-flex align-items-center mb-2">
            <img
              src={albumimg}
              alt="Albums"
              style={{
                width: "10px",
                height: "12px",
                marginRight: "8px",
              }}
            />
            <span
              style={{
                color: "#FF9700",
                fontSize: "10px",
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
                fontSize: "10px",
                fontWeight: 500,
                fontFamily: "Poppins",
              }}
            >
              {data.albums}
            </span>
          </div>
        </div>

        {/* Right Section (Rating & Social Media) */}
        <div className="mt-3">
          {/* Rating */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <h5
                className="mb-0 font-poppins"
                style={{
                  color: "#013C61",
                  fontWeight: 700,
                  fontSize: 26,
                }}
              >
                {data.rating}
              </h5>
              <div className="d-flex align-items-center mt-1">
                {/* Stars */}
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    size={17}
                    style={{
                      color:
                        index < Math.floor(data.rating) ? "#FF9700" : "#e0e0e0",
                      marginRight: "2px",
                    }}
                  />
                ))}
              </div>
              <div
                className="mt-2 font-poppins"
                style={{
                  fontSize: "10px",
                  color: "#013C61",
                  fontWeight: 500,
                }}
              >
                ({data.reviewsCount} Reviews)
              </div>

              {/* Social Media */}
              <div className="d-flex ">
                <a
                  href={data.socialMedia[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon-15px"
                    src={img7}
                    alt="Social"
                    style={{ marginLeft: 2 }}
                  />
                </a>
                <a
                  href={data.socialMedia[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon-15px"
                    src={img8}
                    alt="Social"
                    style={{ marginLeft: 4 }}
                  />
                </a>
                <a
                  href={data.socialMedia[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="icon-15px"
                    src={img9}
                    alt="Social"
                    style={{ marginLeft: 4 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
