import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Logo from "/assets/images/Logo.png";
import "../../App.css";
import dashboardBlue from "/assets/images/dashboard-blue.png";
import userBlue from "/assets/images/user-blue.png";
import eventBlue from "/assets/images/event-blue.png";
import paymentBlue from "/assets/images/payments-blue.png";
import SettingsBlue from "/assets/images/setting-blue.png";
import SettingsOrange from "/assets/images/setting-orange.png";
import PaymentOrange from "/assets/images/payments-orange.png";
import EventOrange from "/assets/images/event-orange.png";
import UserOrange from "/assets/images/user-orange.png";
import AdminBlue from "/assets/images/admin-blue.png";
import AdminOrange from "/assets/images/admin-orange.png";
import DashboardOrange from "/assets/images/dashboard-orange.png";
import SubscriptionBlue from "/assets/images/subscription-blue.png";
import SubscriptionOrange from "/assets/images/subscription-orange.png";
import searchMusicianBlue from "/assets/images/search-musician-blue.png";
import searchMusicianOrange from "/assets/images/search-musician-orange.png";
import schedulesBlue from "/assets/images/schedules-blue.png";
import schedulesOrange from "/assets/images/schedules-orange.png";
import eventOrange from "/assets/images/event-orange.png";
import helpBlue from "/assets/images/help-blue.png";
import helpOrange from "/assets/images/help-orange.png";
import chatBlue from "/assets/images/user-chat-blue.png";
import chatOrange from "/assets/images/user-chat-orange.png";
function SideNav({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();
  const [dropdownStates, setDropdownStates] = useState({});
  const isAbove900 = useMediaQuery("(min-width:900px)");

  const toggleDropdown = (index) => {
    setDropdownStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  let listItemData = [
    {
      label: "Dashboard",
      link: "/event-organizer/dashboard",
      iconBlue: dashboardBlue,
      iconOrange: DashboardOrange,
    },
    {
      label: "Search Musicians/Band",
      link: "/event-organizer/search-musicians-band",
      iconBlue: searchMusicianBlue,
      iconOrange: searchMusicianOrange,
    },
    {
      label: "Schedules",
      link: "/event-organizer/schedules",
      iconBlue: schedulesBlue,
      iconOrange: schedulesOrange,
    },
    {
      label: "Event Management",
      iconBlue: eventBlue,
      iconOrange: eventOrange,
      children: [
        {
          label: "Crate Events",
          link: "/event-organizer/crate-event",
        },
        {
          label: "My Events",
          link: "/event-organizer/my-event",
        },
        {
          label: "Event Quote Sent",
          link: "/event-organizer/event-quote-sent",
        },
      ],
    },
    {
      label: "Created Events Requests",
      iconBlue: AdminBlue,
      iconOrange: AdminOrange,
      children: [
        {
          label: "Pending Requests",
          link: "/event-organizer/pending-requests",
        },
        {
          label: "Accepted Requests",
          link: "/event-organizer/accepted-requests",
        },
        {
          label: "Rejected Requests",
          link: "/event-organizer/rejected-requests",
        },
      ],
    },
    {
      label: "My Subscription",
      link: "/event-organizer/my-subscription",
      iconBlue: SubscriptionBlue,
      iconOrange: SubscriptionOrange,
    },
    {
      label: "Chat",
      link: "/event-organizer/chat",
      iconBlue: chatBlue,
      iconOrange: chatOrange,
    },
    {
      label: "Payments",
      iconBlue: paymentBlue,
      iconOrange: PaymentOrange,
      children: [
        {
          label: "Payment Overview",
          link: "/event-organizer/payment-overview",
        },
        {
          label: "Refund Payments",
          link: "/event-organizer/refund-payments",
        },
        {
          label: "Completed Payments",
          link: "/event-organizer/completed-payments",
        },

        {
          label: "Bank Details",
          link: "/event-organizer/bank-details",
        },
      ],
    },

    {
      label: "Help & Support",
      link: "/event-organizer/help-support",
      iconBlue: helpBlue,
      iconOrange: helpOrange,
    },
    {
      label: "Settings",
      link: "/event-organizer/settings",
      iconBlue: SettingsBlue,
      iconOrange: SettingsOrange,
    },
  ];

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffffff",
        color: "#fff",
        boxSizing: "border-box",
        // borderRight: "1px solid #003a5e",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          height: "91px",
          bgcolor: "#003a5e",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Box
          className="d-flex flex-row justify-content-center w-100"
          sx={{ cursor: "pointer", position: "relative" }}
        >
          <img src={Logo} alt="" className="img-fluid" />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <List className="mt-2 mb-5">
          {listItemData.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                component={item.link ? NavLink : "div"}
                to={item.link}
                className="font-poppins"
                disablePadding
                sx={{
                  display: "flex",
                  color: dropdownStates[index] ? "#ff9700" : "#003a5e", // Orange color if dropdown is open
                  justifyContent: "flex-start",
                  mb: 1,
                  "&.active, &:hover": {
                    bgcolor: "#f5e1c4",
                    color: "#ff9700",
                    "& img": {
                      content: `url(${item.iconOrange})`,
                    },
                    "& .MuiListItemText-root": {
                      color: "#ff9700",
                    },
                    borderRight: "4px solid #ff9700",
                  },
                }}
                onClick={item.children ? () => toggleDropdown(index) : null}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Conditional image change based on dropdownStates */}
                    <img
                      src={
                        dropdownStates[index] ? item.iconOrange : item.iconBlue
                      } // Change image
                      alt=""
                      className="img-fluid"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <ListItemText
                      primary={item.label}
                      sx={{
                        color: "inherit",
                        ml: 2,
                        "& .MuiListItemText-primary": {
                          fontFamily: "Poppins",
                          fontSize: "14px", // Correctly applying font size
                        },
                      }}
                    />
                  </Box>
                  {item.children && (
                    <Box>
                      {dropdownStates[index] ? (
                        <IoIosArrowDown size={16} className="ms-4" />
                      ) : (
                        <IoIosArrowBack size={16} className="ms-4" />
                      )}
                    </Box>
                  )}
                </ListItemButton>
              </ListItem>
              {item.children && (
                <Collapse
                  in={dropdownStates[index]}
                  timeout="auto"
                  unmountOnExit
                >
                  {item.children.map((child, childIndex) => (
                    <ListItem
                      className=""
                      component={NavLink}
                      to={child.link}
                      key={`${index}-${childIndex}`}
                      sx={{
                        fontFamily: "Poppins",
                        pl: 4,
                        color: "#003a5e",
                        "&.active, &:hover": {
                          bgcolor: "#f5e1c4",
                          color: "#ff9700",
                          "& img": {
                            content: `url(${item.iconOrange})`,
                          },
                          "& .MuiListItemText-root": {
                            color: "#ff9700",
                          },
                          borderRight: "4px solid #ff9700",
                        },
                      }}
                    >
                      <ListItemButton
                        className=""
                        sx={{
                          py: 0.5,
                          minHeight: "100%",
                          "& .MuiListItemText-root": {
                            fontSize: "14px",
                          },
                          "&.active, &:hover": {
                            bgcolor: "#f5e1c4",
                          },
                        }}
                      >
                        <ListItemText
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontFamily: "Poppins",
                              fontSize: "14px", // Correctly applying font size
                            },
                          }}
                          primary={child.label}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>

      <Box
        className="d-flex flex-row align-items-center justify-content-center"
        sx={{
          p: 3,
          position: "sticky",
          bottom: 0,
          bgcolor: "#ffffff",
          zIndex: 1,
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <IconButton
          sx={{
            color: "#ff9700",
            bgcolor: "#003a5e",
            width: "180px",
            height: "50px",
            borderRadius: "4px",
            "&:hover": {
              bgcolor: "#004080",
            },
          }}
        >
          <Typography variant="button" display="block">
            Logout
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: 250,
        flexShrink: 0,
        transition: "width 0.3s",
        display: isAbove900 ? "block" : "none",
      }}
      aria-label="side navigation"
    >
      <Drawer
        variant={isAbove900 ? "permanent" : "temporary"}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            bgcolor: "#ffffff",
            color: "#fff",
            boxSizing: "border-box",
            transition: "width 0.3s",
            border: 0,

          },
        }}
        open={mobileOpen || isAbove900}
        onClose={setMobileOpen}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

SideNav.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  setMobileOpen: PropTypes.func.isRequired,
};

export default SideNav;
