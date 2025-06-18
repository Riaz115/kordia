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
import "../App.css";
import dashboardBlue from "/assets/images/dashboard-blue.png";
import eventBlue from "/assets/images/created-events-blue.png";
import eventOrange from "/assets/images/created-events-orange.png";
import paymentBlue from "/assets/images/payments-blue.png";
import SettingsBlue from "/assets/images/setting-blue.png";
import SettingsOrange from "/assets/images/setting-orange.png";
import PaymentOrange from "/assets/images/payments-orange.png";
import AdminBlue from "/assets/images/admin-blue.png";
import AdminOrange from "/assets/images/admin-orange.png";
import DashboardOrange from "/assets/images/dashboard-orange.png";
import SubscriptionBlue from "/assets/images/subscription-blue.png";
import SubscriptionOrange from "/assets/images/subscription-orange.png";
import searchMusicianBlue from "/assets/images/search-musician-blue.png";
import searchMusicianOrange from "/assets/images/search-musician-orange.png";
import schedulesBlue from "/assets/images/schedules-blue.png";
import schedulesOrange from "/assets/images/schedules-orange.png";
import chatBlue from "/assets/images/user-chat-blue.png";
import chatOrange from "/assets/images/user-chat-orange.png";
import helpBlue from "/assets/images/help-blue.png";
import helpOrange from "/assets/images/help-orange.png";
import kordiablue from "/assets/images/kordia-blue.png";
import kordiaOrange from "/assets/images/kordia-orange.png";
import forumblue from "/assets/images/forum-blue.png";
import forumOrange from "/assets/images/forum-orange.png";
import portblue from "/assets/images/port-blue.png";
import portorange from "/assets/images/port-orange.png";

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
      link: "/musician/dashboard",
      iconBlue: dashboardBlue,
      iconOrange: DashboardOrange,
    },
    {
      label: "Event quote received",
      link: "/musician/event-quote-received",
      iconBlue: eventBlue,
      iconOrange: eventOrange,
    },
    {
      label: "Find Events",
      iconBlue: eventBlue,
      iconOrange: eventOrange,
      children: [
        {
          label: "Events List",
          link: "/musician/events-list",
        },
        {
          label: "Application Status",
          link: "/musician/application-status",
        },
      ],
    },
    {
      label: "Schedules",
      link: "/musician/schedules",
      iconBlue: schedulesBlue,
      iconOrange: schedulesOrange,
    },
    {
      label: "Portfolio",
      link: "/musician/portfolio",
      iconBlue: portblue,
      iconOrange: portorange,
    },
    {
      label: "Create Band",
      link: "/musician/create-band",
      iconBlue: searchMusicianBlue,
      iconOrange: searchMusicianOrange,
    },
    {
      label: "Chat",
      link: "/musician/chat",
      iconBlue: chatBlue,
      iconOrange: chatOrange,
    },
    {
      label: "Kordia Academy",
      iconBlue: kordiablue,
      iconOrange: kordiaOrange,
      children: [
        {
          label: "Create Lesson",
          link: "/musician/create-lesson",
        },
        {
          label: "Lesson Packaging",
          link: "/musician/lesson-packaging",
        },
      ],
    },
    {
      label: "My Subscription",
      link: "/musician/subscriptions",
      iconBlue: SubscriptionBlue,
      iconOrange: SubscriptionOrange,
    },
    {
      label: "Payments",
      link: "/musician/payments",
      iconBlue: paymentBlue,
      iconOrange: PaymentOrange,
    },

    {
      label: "Forums",
      link: "/musician/forums",
      iconBlue: forumblue,
      iconOrange: forumOrange,
    },

    {
      label: "Help & Support",
      link: "/musician/help-support",
      iconBlue: helpBlue,
      iconOrange: helpOrange,
    },
    {
      label: "Settings",
      link: "/musician/settings",
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
          className="d-flex flex-row justify-content-center w-100  "
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
          <Typography
            variant="button"
            display="block"
            sx={{ fontFamily: "Poppins", textTransform: "capitalize" }}
          >
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
