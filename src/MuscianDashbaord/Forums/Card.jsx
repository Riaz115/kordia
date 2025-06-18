import React, { useState } from "react";
import { MdChatBubbleOutline } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import Comments from "../Modal/Comments";

const CardComponent = ({ dummyData, feimg4 }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [show, setShow] = useState(false);
  const [CardData, setCardData] = useState(null);

  const handelShow = ({ data }) => {
    setCardData(data);
    setShow(true);
  };
  const handelClose = () => {
    setShow(false);
  };
  console.log(hoveredCard);

  return (
    <>
      {dummyData.map((data, index) => (
        <div
          key={index}
          className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4"
        >
          <div
            className="card"
            style={{
              borderRadius: "10px",
              padding: "10px",
              height: "325px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              backgroundColor: hoveredCard === index ? "#013c61" : "white",
              color: hoveredCard === index ? "white" : "black",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={() => setHoveredCard(index)} // Set hovered card
            onMouseLeave={() => setHoveredCard(null)} // Reset on mouse leave
          >
            {/* Card Header */}
            <div className="row mt-1">
              <div className="col-2">
                <img
                  src={feimg4}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="col-10">
                <div className="row">
                  <div className="col-12">
                    <p
                      className="text-truncate"
                      style={{
                        margin: "0",
                        color: hoveredCard === index ? "white" : "#013C61",
                        fontSize: "18px",
                        fontWeight: "800",
                        fontFamily: "Poppins",
                      }}
                    >
                      {data.name}
                    </p>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col">
                    <p
                      style={{
                        margin: "0",
                        color: hoveredCard === index ? "#e7ecef" : "#BFCDD6",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                      }}
                    >
                      {data.date}
                    </p>
                  </div>
                  <div
                    className="col me-1 justify-content-center align-content-center"
                    style={{
                      backgroundColor:
                        hoveredCard === index ? "#406B86" : "#e7ecef",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    <p
                      className="text-truncate"
                      style={{
                        margin: "0",
                        color: hoveredCard === index ? "white" : "#406B86",
                        fontSize: "8px",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                      }}
                    >
                      {data.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="row ">
              <p
                style={{
                  color: hoveredCard === index ? "white" : "#406B86",
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  margin: 0,
                }}
              >
                Porem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="row mt-1 mb-4">
              <p
                className="text"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "12px",
                  margin: 0,
                  color: hoveredCard === index ? "white" : "#809DAF",
                }}
              >
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl.
              </p>
            </div>

            {/* Footer with Icons */}
            <div
              className="footer-icons d-flex justify-content-between align-items-center"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                right: "10px",
                borderTop: "1px solid #809DAF",
                paddingTop: "10px",
              }}
            >
              <div className="d-flex align-items-center">
                <MdChatBubbleOutline
                  size={24}
                  style={{
                    color: hoveredCard === index ? "white" : "#013C61",
                    marginRight: "5px",
                  }}
                  onClick={() => handelShow({ data })}
                />
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    color: hoveredCard === index ? "white" : "#013C61",
                    fontWeight: "400",
                  }}
                >
                  {data.comments}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <IoIosHeart
                  size={24}
                  style={{
                    color: hoveredCard === index ? "white" : "red",
                    marginRight: "5px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "17px",
                    color: hoveredCard === index ? "white" : "#013C61",
                    fontWeight: "400",
                  }}
                >
                  {data.likes}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Comments show={show} handelClose={handelClose} data={CardData} />
    </>
  );
};

export default CardComponent;
