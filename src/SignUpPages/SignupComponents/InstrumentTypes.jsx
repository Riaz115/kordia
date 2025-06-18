import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const InstrumentTypes = ({
  genresList = [],
  instrumentsTypes = [],
  audiovisualList = [],
  studioservicesList = [],
}) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedInstruments, setSelectedInstruments] = useState([]);

  const toggleSelection = (item, type) => {
    if (type === "genre") {
      setSelectedGenres((prev) =>
        prev.includes(item)
          ? prev.filter((g) => g !== item)
          : [...prev, item]
      );
    } else if (type === "instrument") {
      setSelectedInstruments((prev) =>
        prev.includes(item)
          ? prev.filter((i) => i !== item)
          : [...prev, item]
      );
    }
  };

  return (
    <Box>
      {/* Render Instrument Types */}
      {instrumentsTypes.length > 0 && (
        <>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#013C61",
              marginBottom: 2,
            }}
          >
            Instrument Types
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              marginBottom: 4,
            }}
          >
            {instrumentsTypes.map((instrument) => (
              <Box
                key={instrument}
                onClick={() => toggleSelection(instrument, "instrument")}
                sx={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  backgroundColor: selectedInstruments.includes(instrument)
                    ? "#BFCDD6"
                    : "#CBD9E2A6",
                  color: selectedInstruments.includes(instrument)
                    ? "#013C61"
                    : "#809DAF",
                  border: selectedInstruments.includes(instrument)
                    ? "1px solid #013C61"
                    : "1px solid #809DAF",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#BFCDD6",
                    color: "#013C61",
                  },
                }}
              >
                {instrument}
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Render Music Genres */}
      {genresList.length > 0 && (
        <>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#013C61",
              marginBottom: 2,
            }}
          >
            Categories
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              marginBottom: 4,
            }}
          >
            {genresList.map((genre) => (
              <Box
                key={genre}
                onClick={() => toggleSelection(genre, "genre")}
                sx={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  backgroundColor: selectedGenres.includes(genre)
                    ? "#BFCDD6"
                    : "#CBD9E2A6",
                  color: selectedGenres.includes(genre) ? "#013C61" : "#809DAF",
                  border: selectedGenres.includes(genre)
                    ? "1px solid #013C61"
                    : "1px solid #809DAF",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#BFCDD6",
                    color: "#013C61",
                  },
                }}
              >
                {genre}
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Render Audiovisual Genres */}
      {audiovisualList.length > 0 && (
        <>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#013C61",
              marginBottom: 2,
            }}
          >
            Audiovisual Genres
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              marginBottom: 4,
            }}
          >
            {audiovisualList.map((item) => (
              <Box
                key={item}
                onClick={() => toggleSelection(item, "genre")}
                sx={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  backgroundColor: selectedGenres.includes(item)
                    ? "#BFCDD6"
                    : "#CBD9E2A6",
                  color: selectedGenres.includes(item) ? "#013C61" : "#809DAF",
                  border: selectedGenres.includes(item)
                    ? "1px solid #013C61"
                    : "1px solid #809DAF",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#BFCDD6",
                    color: "#013C61",
                  },
                }}
              >
                {item}
              </Box>
            ))}
          </Box>
        </>
      )}

      {/* Render Studio Services */}
      {studioservicesList.length > 0 && (
        <>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#013C61",
              marginBottom: 2,
            }}
          >
            Studio Services
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {studioservicesList.map((service) => (
              <Box
                key={service}
                onClick={() => toggleSelection(service, "genre")}
                sx={{
                  padding: "8px 16px",
                  borderRadius: "10px",
                  backgroundColor: selectedGenres.includes(service)
                    ? "#BFCDD6"
                    : "#CBD9E2A6",
                  color: selectedGenres.includes(service)
                    ? "#013C61"
                    : "#809DAF",
                  border: selectedGenres.includes(service)
                    ? "1px solid #013C61"
                    : "1px solid #809DAF",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#BFCDD6",
                    color: "#013C61",
                  },
                }}
              >
                {service}
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default InstrumentTypes;
