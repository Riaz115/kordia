import React from "react";
import notimg from "/assets/images/notfound.png";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <img src={notimg} alt="notimg" style={{ width: "auto", height: 200 }} />
      <h1
        style={{
          fontSize: "1.7rem",
          color: "#282828",
          margin: "0",
          fontFamily: "Poppins",
          fontWeight: 600,
        }}
      >
        Sorry Page Not Found
      </h1>
      <p
        style={{
          fontSize: "0.8rem",
          color: "#555",
          marginTop: "0.5rem",
          fontFamily: "Poppins",
          fontWeight: 400,
        }}
      >
        Plz Page Not Found go to back!
      </p>
      <button
        onClick={() => navigate("/")} // Redirect to home
        style={{
          marginTop: "1rem",
          padding: "0.75rem 5rem",
          backgroundColor: "#FF9700",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Go to Back
      </button>
    </div>
  );
};

export default NotFoundPage;
