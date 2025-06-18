import React, { useState } from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ChatList from "/assets/images/eventorganizer2.png";
import ReportProfile from "../Modal/ReportProfile";
import { MdOutlineReport } from "react-icons/md";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="row p-3">
      <Box
        className="col p-3"
        sx={{
          backgroundColor: "#f8f9fa",
        }}
      >
        <Box className="d-flex flex-column align-items-center">
          <Avatar
            src={ChatList}
            sx={{
              height: "100px",
              width: "100px",
              marginBottom: "10px",
            }}
          />
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "900",
              color: "#013c65",
              fontFamily: "Poppins",
            }}
          >
            Fred Williams
          </Typography>
          <Typography
            sx={{
              color: "#809DAF",
              fontSize: "12px",
              fontFamily: "Poppins",
            }}
          >
            Leeds, England
          </Typography>
          <Typography
            className="text-center mt-4"
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              color: "#013c65",
            }}
          >
            DJ, Producer.
          </Typography>
          <Typography
            className="text-center "
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              color: "#013c65",
            }}
          >
            I love playing guitar as well in free time.
          </Typography>
          <Box
            className="mt-4"
            sx={{
              borderTop: "2px solid #809daf",
              borderBottom: "2px solid #809daf",
              paddingTop: "10px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                fontFamily: "Poppins",
                color: "#013c65",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: "bold",
                  color: "#809daf",
                  marginRight: "5px",
                }}
              >
                Phone:
              </Typography>
              +44 23 123 45 89
            </Typography>

            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                fontFamily: "Poppins",
                mt: 2,
                mb: 4,
                color: "#013c65",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: "bold",
                  color: "#809daf",
                  marginRight: "5px",
                }}
              >
                Email:
              </Typography>
              info@fredwilliams.com
            </Typography>
          </Box>

          <Box className="mt-4">
            <Button
              variant="outlined"
              style={{
                borderRadius: "25px",
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "white",
                fontWeight: "400",
                backgroundColor: "#003A5E",
                border: "none",
                padding: "10px 20px",
              }}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => navigate("/musician/chatScreen/5")}
              style={{
                marginLeft: "10px",
                borderRadius: "25px",
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "white",
                fontWeight: "400",
                backgroundColor: "#ff9700",
                border: "none",
                padding: "10px 20px",
              }}
            >
              Close Profile
            </Button>
          </Box>
          <Box className=" mt-5 justify-content-center align-content-center">
            <Button
              className="mt-2"
              variant="outlined"
              style={{
                borderRadius: "25px",
                fontFamily: "Poppins",

                fontSize: "14px",
                color: "white",
                fontWeight: "400",
                backgroundColor: "#C00000",
                border: "none",
                padding: "10px 30px",
              }}
              onClick={handleShow}
            >
              Report Profile
              <MdOutlineReport size={24} style={{ marginLeft: "10px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
      <ReportProfile show={show} handleClose={handleClose} />
    </div>
  );
};

export default ProfileScreen;
