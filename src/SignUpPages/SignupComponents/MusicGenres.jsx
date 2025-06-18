import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const MusicGenres = ({
  genresList = [],
  audiovisualList = [],
  studioservicesList = [],
}) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenreSelection = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <Box>
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
            Music Genres
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
                onClick={() => toggleGenreSelection(genre)}
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
                onClick={() => toggleGenreSelection(item)}
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
                onClick={() => toggleGenreSelection(service)}
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

export default MusicGenres;
