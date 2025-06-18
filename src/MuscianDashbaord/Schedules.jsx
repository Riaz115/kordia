import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import img1 from "/assets/images/eventorganizer2.png";
import tinycolor from "tinycolor2";
const localizer = momentLocalizer(moment);

const Schedules = () => {
  const [view, setView] = useState("month"); // State for Month, Week, Day
  const [navView, setNavView] = useState(""); // State for Today, Back, Next
  const [currentDate, setCurrentDate] = useState(new Date());

  // Handle the view change for Month, Week, Day
  const handleViewChange = (btnView) => {
    if (["today", "back", "next"].includes(btnView)) {
      switch (btnView) {
        case "today":
          setCurrentDate(new Date()); // Go to today's date
          break;
        case "back":
          const prevMonth = new Date(currentDate);
          prevMonth.setMonth(currentDate.getMonth() - 1); // Go to the previous month
          setCurrentDate(prevMonth);
          break;
        case "next":
          const nextMonth = new Date(currentDate);
          nextMonth.setMonth(currentDate.getMonth() + 1); // Go to the next month
          setCurrentDate(nextMonth);
          break;
        default:
          break;
      }
      setNavView(btnView); // Update the active navigation button
    } else {
      setView(btnView); // Update the calendar view (Month, Week, Day)
    }
  };
  const events = [
    {
      id: 1,
      title: "Winter Gala",
      organizer: "John Doe",
      musician: "The Beatles",
      avatar: img1,
      start: new Date(2024, 11, 5, 10, 0), // Dec 5th, 10:00 AM
      end: new Date(2024, 11, 7, 12, 0), // Dec 7th, 12:00 PM
    },
    {
      id: 2,
      title: "Music Fest",
      organizer: "Jane Smith",
      musician: "Coldplay",
      avatar: img1,
      start: new Date(2024, 11, 15, 14, 0), // Dec 15th, 2:00 PM
      end: new Date(2024, 11, 15, 16, 0), // Dec 15th, 4:00 PM
    },
    {
      id: 3,
      title: "Jazz Night",
      organizer: "Emily Clark",
      musician: "Miles Davis Quartet",
      avatar: img1,
      start: new Date(2024, 11, 18, 19, 0), // Dec 18th, 7:00 PM
      end: new Date(2024, 11, 18, 22, 0), // Dec 18th, 10:00 PM
    },
    {
      id: 4,
      title: "Rock Revival",
      organizer: "Mike Johnson",
      musician: "Foo Fighters",
      avatar: img1,
      start: new Date(2024, 11, 20, 18, 0), // Dec 20th, 6:00 PM
      end: new Date(2024, 11, 20, 21, 0), // Dec 20th, 9:00 PM
    },
    {
      id: 5,
      title: "New Year's Eve Bash",
      organizer: "Sara Lee",
      musician: "Taylor Swift",
      avatar: img1,
      start: new Date(2024, 11, 31, 20, 0), // Dec 31st, 8:00 PM
      end: new Date(2025, 0, 1, 1, 0), // Jan 1st, 1:00 AM
    },
    {
      id: 6,
      title: " Eve Bash",
      organizer: "Sara Lee",
      musician: "Taylor Swift",
      avatar: img1,
      start: new Date(2024, 11, 12, 20, 0), // Dec 31st, 8:00 PM
      end: new Date(2024, 11, 14, 20, 0), // Jan 1st, 1:00 AM
    },
  ];

  const formattedMonthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <Container className="p-2">
      <Row>
        {/* Left Section */}
        <Col
          lg={3}
          className="bg-white p-3 shadow-sm"
          style={{
            marginRight: "15px", // Add spacing between columns
            borderRadius: "5px",
            border: "1px solid #B9B9B9",
          }}
        >
          <Button
            className="mb-3 w-100"
            style={{ backgroundColor: "orange", border: "none" }}
          >
            Events
          </Button>
          <h6
            className="text-center font-poppins"
            style={{ color: "#000", fontSize: "14px", fontWeight: 500 }}
          >
            Ongoing events in this month
          </h6>
          <div className="mt-3">
            <ListGroup
              className="list-group-custom"
              style={{ height: "calc(100vh - 150px)", overflowY: "auto" }}
            >
              {events.map((event, index) => (
                <ListGroup.Item
                  key={event.id}
                  className={`d-flex border-top`}
                  style={{
                    border: "none",
                    padding: "15px",
                  }}
                >
                  <Image
                    src={event.avatar}
                    roundedCircle
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <h6
                      className="mb-0 font-poppins"
                      style={{ fontWeight: 600, fontSize: "14px" }}
                    >
                      {event.title}
                    </h6>
                    <small
                      className="text-muted font-poppins"
                      style={{ fontSize: "10px" }}
                    >
                      {event.start.toLocaleString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </small>{" "}
                    <br />
                    <small
                      className="text-muted font-poppins"
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                      }}
                    >
                      {event.organizer}
                    </small>
                    <br />
                    <small
                      className=" font-poppins"
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        backgroundColor: "#F5E1C4",
                        color: "#FF9700",
                        borderRadius: 5,
                        padding: "5px 10px",
                      }}
                    >
                      {event.musician}
                    </small>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>

        {/* Right Section */}
        <Col
          lg={8}
          className="py-2 bg-white mt-lg-0 mt-2"
          style={{
            overflow: "hidden", // Ensure no scrolling for this section
            borderRadius: "5px",
            border: "1px solid #B9B9B9",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "calc(100vh - 150px)",
            }}
            className="calendar-container"
          >
            {/* Toolbar */}
            <div className="calendar-toolbar">
              {/* Left Section - Today, Back, Next */}
              <div className="view-buttons-container">
                {["today", "back", "next"].map((btnView) => (
                  <button
                    key={btnView}
                    onClick={() => handleViewChange(btnView)}
                    className={`view-btn font-poppins ${
                      navView === btnView ? "active" : ""
                    }`}
                  >
                    {btnView.charAt(0).toUpperCase() + btnView.slice(1)}
                  </button>
                ))}
              </div>

              <div className="font-poppins">{formattedMonthYear}</div>

              {/* Center Section - Month, Week, Day */}
              <div className="view-buttons-container">
                {["month", "week", "day"].map((btnView) => (
                  <button
                    key={btnView}
                    onClick={() => handleViewChange(btnView)}
                    className={`view-btn ${
                      view === btnView ? "active" : ""
                    } font-poppins`}
                  >
                    {btnView.charAt(0).toUpperCase() + btnView.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* BigCalendar Component */}
            <BigCalendar
              localizer={localizer}
              events={events}
              toolbar={false}
              startAccessor="start"
              endAccessor="end"
              date={currentDate}
              style={{
                height: "100%",
              }}
              view={view} // Use the state to control the active view
              eventPropGetter={(event) => {
                const randomColor = `hsl(${Math.floor(
                  Math.random() * 360
                )}, 100%, 50%)`;
                const darkColor = tinycolor(randomColor).darken(10).toString();
                const lightColor = tinycolor(randomColor)
                  .lighten(40)
                  .toString();

                return {
                  style: {
                    backgroundColor: lightColor,
                    color: "black",
                    borderLeft: `5px solid ${darkColor}`,
                    borderRadius: "0px",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                };
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Schedules;
