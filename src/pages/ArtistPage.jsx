import React, { useState } from "react";
import Navbar from "../landingpagecomponents/Navbar";
import Footer from "../landingpagecomponents/Footer";
import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import ArtistCard from "../Components/ArtistCard";
import fimg1 from "/assets/images/feimg1.png";
import fimg2 from "/assets/images/feimg2.png";
import fimg3 from "/assets/images/feimg3.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ArtistPage = () => {
  const musicians = [
    "Accordion",
    "Bagpipe",
    "Bandolim",
    "Bongo",
    "Cello",
    "Clarinet",
    "Composer",
    "Conductor",
    "DJ",
    "Double Bass",
    "Drums",
    "Euophonium",
    "Flute",
    "Guitar",
    "Harp",
    "Horn",
    "Keyboard",
    "Organ",
    "Percussion",
    "Piano",
    "Portuguese Guitar",
    "Recorder",
    "Saxophone",
    "Singer",
    "Trombone",
    "Trumpet",
    "Tuba",
    "Ukulele",
    "Viola",
    "Vuela Braguesa",
    "Violin",
  ];
  const bands = [
    "Acoustic band",
    "African band",
    "Big band",
    "Blues band",
    "Celtic band",
    "Country band",
    "Cover band",
    "Disco band",
    "Folk band",
    "Funk band",
    "Heavy metal band",
    "Indie band",
    "Jazz band",
    "Klezmer band",
    "Latin band",
    "Marching band",
    "Party band",
    "Philharmonic band",
    "Pop band",
    "Punk band",
    "Roda de choro",
    "Rock band",
    "Street band",
    "Symphonic band",
    "Tribute band",
    "Tuna Académica",
    "Wedding band",
    "Wind band",
  ];
  const ensembles = [
    "Chamber music",
    "Chamber Orchestra",
    "Choirs",
    "Decatet",
    "Duet",
    "Fanfares",
    "Folkloric group",
    "Medieval ensemble",
    "Nonet",
    "Octet",
    "Quartet",
    "Quintet",
    "Septet",
    "Sextet",
    "Trio",
    "Vocal ensemble",
  ];
  const musicGenre = [
    "African music",
    "Balkan",
    "Baroque music",
    "Blues",
    "Bossa nova",
    "Celta",
    "Choro",
    "Classic",
    "Contemporary",
    "Country",
    "Dance music",
    "Electronic",
    "Experimental",
    "Fado",
    "Film music",
    "Flamenco",
    "Funk",
    "Gospel",
    "Hip-Hop",
    "Indie",
    "Jazz",
    "Latino",
    "Medieval music",
    "New Age",
    "Pop",
    "R&B",
    "Rap",
    "Reggae",
    "Reggaeton",
    "Rock",
    "Soul",
    "Techno",
    "Traditional",
    "World music",
  ];
  const projects = [
    "25 of Abril",
    "Carnival",
    "Children presentations",
    "Childrens day",
    "Christmas",
    "Easter",
    "For families",
    "For schools",
    "Halloween",
    "Musicotherapy",
    "Outdoor music",
    "Pilgrimages and Processions",
    "Popular Saints",
    "Portugal celebration",
    "Seniors’ presentations",
    "Workshops musicals",
  ];
  const audiovisual = [
    "Lighting",
    "Photography",
    "Roadies",
    "Sound",
    "Special effects",
    "Stage setup and dismantling",
    "Streaming",
    "Video",
  ];
  const kordiaAcademy = [
    "Audition preparation",
    "Chamber music",
    "Composition",
    "Conducting",
    "Experience: beginner, intermediate, advanced",
    "Improvisation",
    "Instrument:",
    "Accordion",
    "Bagpipe",
    "Bandolim",
    "Bass",
    "Bassoon",
    "Cello",
    "Clarinet",
    "Double bass",
    "Drums",
    "Euphonium",
    "Flute",
    "Guitar",
    "Harp",
    "Horn",
    "Keyboard",
    "Organ",
    "Percussion",
    "Piano",
    "Portuguese Guitar",
    "Recorder",
    "Saxophone",
    "Singer",
    "Trombone",
    "Trumpet",
    "Tuba",
    "Ukulele",
    "Viola",
    "Viola Braguesa",
    "Violin",
    "Location: 0-1000 km",
    "Mode: Online/Presential/Recorded",
    "Music for pregnant women",
    "Music history",
    "Music marketing",
    "Music production",
    "Music theory",
    "Music therapy",
    "Prices: range 0-1000€",
    "Singing",
  ];
  const studio = [
    "Artistic development and consultancy",
    "Audio recording",
    "Editing and mixing",
    "Mastering",
    "Music production",
    "Music video production",
    "Musical arrangements",
    "Musical directors",
    "Rehearsal studios",
    "Session musician",
    "Video recording",
    "Vocal coaching",
  ];

  const [selections, setSelections] = useState({
    instruments: [],
    projects: [],
    kordiaAcademy: [],
    musicalGenres: [],
    bands: [],
    ensembles: [],
    audiovisuals: [],
    studios: [],
    musicians: [],
    ageRange: [],
  });

  const handleCheckboxChange = (category, value) => {
    setSelections((prevState) => {
      const updatedCategory = prevState[category].includes(value)
        ? prevState[category].filter((item) => item !== value)
        : [...prevState[category], value];

      return { ...prevState, [category]: updatedCategory };
    });
  };
  const artistData = [
    {
      id: 1,
      name: "Artist One",
      imgSrc: fimg1,
      locationDetails: "New York, USA",
      category: "Accordion",
      albums: 5,
      rating: 4.5,
      reviewsCount: 200,
      socialMedia: [
        "https://spotify.com/artist1",
        "https://instagram.com/artist1",
        "https://twitter.com/artist1",
      ],
      kordiaSubscription: true,
      hasEnsembles: false,
      hasBand: false,
    },
    {
      id: 2,
      name: "Artist Two",
      imgSrc: fimg2,
      locationDetails: "Los Angeles, USA",
      category: "Acoustic band",
      albums: 8,
      rating: 4.0,
      reviewsCount: 150,
      socialMedia: [
        "https://spotify.com/artist2",
        "https://instagram.com/artist2",
        "https://twitter.com/artist2",
      ],
      kordiaSubscription: false,
      hasEnsembles: false,
      hasBand: true,
    },
    {
      id: 3,
      name: "Artist Three",
      imgSrc: fimg3,
      locationDetails: "London, UK",
      category: "African band",
      albums: 3,
      rating: 4.7,
      reviewsCount: 120,
      socialMedia: [
        "https://spotify.com/artist3",
        "https://instagram.com/artist3",
        "https://twitter.com/artist3",
      ],
      kordiaSubscription: true,
      hasEnsembles: false,
      hasBand: true,
    },
    {
      id: 4,
      name: "Artist Four",
      imgSrc: fimg3,
      locationDetails: "Berlin, Germany",
      category: "African music",
      albums: 4,
      rating: 3.9,
      reviewsCount: 90,
      socialMedia: [
        "https://spotify.com/artist4",
        "https://instagram.com/artist4",
        "https://twitter.com/artist4",
      ],
      kordiaSubscription: false,
      hasEnsembles: true,
      hasBand: false,
    },
    {
      id: 5,
      name: "Artist Five",
      imgSrc: fimg2,
      locationDetails: "Paris, France",
      category: "Balkan",
      albums: 2,
      rating: 5.0,
      reviewsCount: 250,
      socialMedia: [
        "https://spotify.com/artist5",
        "https://instagram.com/artist5",
        "https://twitter.com/artist5",
      ],
      kordiaSubscription: false,
      hasEnsembles: true,
      hasBand: false,
    },
    {
      id: 6,
      name: "Artist Six",
      imgSrc: fimg1,
      locationDetails: "Tokyo, Japan",
      category: "25 of Abril",
      albums: 6,
      rating: 4.3,
      reviewsCount: 180,
      socialMedia: [
        "https://spotify.com/artist6",
        "https://instagram.com/artist6",
        "https://twitter.com/artist6",
      ],
      kordiaSubscription: false,
      hasEnsembles: true,
      hasBand: false,
    },
    {
      id: 7,
      name: "Artist Seven",
      imgSrc: fimg3,
      locationDetails: "Sydney, Australia",
      category: "Carnival",
      albums: 7,
      rating: 4.2,
      reviewsCount: 220,
      socialMedia: [
        "https://spotify.com/artist7",
        "https://instagram.com/artist7",
        "https://twitter.com/artist7",
      ],
      kordiaSubscription: false,
      hasEnsembles: false,
      hasBand: true,
    },
    {
      id: 8,
      name: "Artist Eight",
      imgSrc: fimg2,
      locationDetails: "Toronto, Canada",
      category: "Lighting",
      albums: 4,
      rating: 4.6,
      reviewsCount: 130,
      socialMedia: [
        "https://spotify.com/artist8",
        "https://instagram.com/artist8",
        "https://twitter.com/artist8",
      ],
      kordiaSubscription: false,
      hasEnsembles: false,
      hasBand: true,
    },
    {
      id: 9,
      name: "Artist Nine",
      imgSrc: fimg1,
      locationDetails: "Rome, Italy",
      category: "Audition preparation",
      albums: 3,
      rating: 3.8,
      reviewsCount: 160,
      socialMedia: [
        "https://spotify.com/artist9",
        "https://instagram.com/artist9",
        "https://twitter.com/artist9",
      ],
      kordiaSubscription: true,
      hasEnsembles: false,
      hasBand: false,
    },
    {
      id: 10,
      name: "Artist Ten",
      imgSrc: fimg1,
      locationDetails: "Moscow, Russia",
      category: "Chamber music",
      albums: 5,
      rating: 4.1,
      reviewsCount: 110,
      socialMedia: [
        "https://spotify.com/artist10",
        "https://instagram.com/artist10",
        "https://twitter.com/artist10",
      ],
      kordiaSubscription: false,
      hasEnsembles: false,
      hasBand: true,
    },
    {
      id: 11,
      name: "Artist Eleven",
      imgSrc: fimg1,
      locationDetails: "Cape Town, South Africa",
      category: "Video recording",
      albums: 6,
      rating: 4.4,
      reviewsCount: 200,
      socialMedia: [
        "https://spotify.com/artist11",
        "https://instagram.com/artist11",
        "https://twitter.com/artist11",
      ],
      kordiaSubscription: true,
      hasEnsembles: false,
      hasBand: false,
    },
    {
      id: 12,
      name: "Artist Twelve",
      imgSrc: fimg1,
      locationDetails: "São Paulo, Brazil",
      category: "Vocal coaching",
      albums: 4,
      rating: 4.8,
      reviewsCount: 250,
      socialMedia: [
        "https://spotify.com/artist12",
        "https://instagram.com/artist12",
        "https://twitter.com/artist12",
      ],
      kordiaSubscription: true,
      hasEnsembles: false,
      hasBand: false,
    },
  ];
  // Filter artists based on selected categories (if no categories selected, show all)
  const filteredData = artistData.filter((data) => {
    if (
      selections.musicians.length === 0 &&
      selections.bands.length === 0 &&
      selections.ensembles.length === 0 &&
      selections.musicalGenres.length === 0 &&
      selections.projects.length === 0 &&
      selections.audiovisuals.length === 0 &&
      selections.kordiaAcademy.length === 0 &&
      selections.studios.length === 0
    ) {
      return true; // Show all if no selection
    }

    const matchesMusicians = selections.musicians.includes(data.category);
    const matchesBands = selections.bands.includes(data.category);
    const matchesEnsembles = selections.ensembles.includes(data.category);
    const matchesGenres = selections.musicalGenres.includes(data.category);
    const matchesProjects = selections.projects.includes(data.category);
    const matchesAudiovisual = selections.audiovisuals.includes(data.category);
    const matchesKordiaAcademy = selections.kordiaAcademy.includes(
      data.category
    );
    const matchesStudios = selections.studios.includes(data.category);

    // Return true if artist matches any of the selected categories
    return (
      matchesMusicians ||
      matchesBands ||
      matchesEnsembles ||
      matchesGenres ||
      matchesProjects ||
      matchesAudiovisual ||
      matchesKordiaAcademy ||
      matchesStudios
    );
  });
  return (
    <>
      <section class="about-page-top bg-main-blue pt-90">
        <div class="mycontainer">
          <Typography
            sx={{
              fontSize: { xs: "48px", sm: "48px", lg: "60px" }, // Adjust for small screens
              letterSpacing: "2px", // Add gap between letters
              fontFamily: "Bebas Neue",
            }}
            className="mb-0 text-main-orange text-uppercase"
          >
            Discover Talented Artists for Your Next Event
          </Typography>

          <Typography
            className="mb-0 text-main-orange font-poppins"
            sx={{
              width: { sm: "100%", lg: "50%" },
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 18,
            }}
          >
            Search, explore, and connect with skilled musicians and bands to
            make your event unforgettable
          </Typography>
        </div>
      </section>
      <div class="clip-btm-rt-box"></div>
      <section className="bg-white">
        <div className="mycontainer container">
          <Box
            className="row mt-2  "
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 0 },
            }}
          >
            <div className="col-lg-2 col-md-12 col-sm-12 ">
              <Box sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
                {/* Heading */}
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#013C61",
                    fontFamily: "Poppins",
                  }}
                  className="mb-2"
                >
                  Filter by
                </Typography>

                <div className="">
                  {/* Filter Genres */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#013C61",
                          fontFamily: "Poppins",
                        }}
                      >
                        Musicians
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", lg: "column" },
                          flexWrap: "wrap",
                          gap: { xs: "15px", lg: "0" },
                        }}
                      >
                        {musicians.map((category, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={selections.musicians.includes(
                                  category
                                )} // Check if category is selected in state
                                onChange={() =>
                                  handleCheckboxChange("musicians", category)
                                } // Pass category and item to handler
                                sx={{
                                  "&.Mui-checked": { color: "#FF9700" },
                                  "& .MuiSvgIcon-root": {
                                    width: 20,
                                    height: 20,
                                  },
                                }}
                              />
                            }
                            label={category}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#013C61",
                          fontFamily: "Poppins",
                        }}
                      >
                        Bands
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", lg: "column" },
                          flexWrap: "wrap",
                          gap: { xs: "15px", lg: "0" },
                        }}
                      >
                        {bands.map((category, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={selections.bands.includes(category)} // Check if category is selected in state
                                onChange={() =>
                                  handleCheckboxChange("bands", category)
                                } // Pass category and item to handler
                                sx={{
                                  "&.Mui-checked": { color: "#FF9700" },
                                  "& .MuiSvgIcon-root": {
                                    width: 20,
                                    height: 20,
                                  },
                                }}
                              />
                            }
                            label={category}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>

                  {/* Age Range */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#013C61",
                          fontFamily: "Poppins",
                        }}
                      >
                        Ensembles
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", lg: "column" },
                          flexWrap: "wrap",
                          gap: { xs: "15px", lg: "0" },
                        }}
                      >
                        {ensembles.map((category, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={selections.ensembles.includes(
                                  category
                                )} // Check if category is selected in state
                                onChange={() =>
                                  handleCheckboxChange("ensembles", category)
                                } // Pass category and item to handler
                                sx={{
                                  "&.Mui-checked": { color: "#FF9700" },
                                  "& .MuiSvgIcon-root": {
                                    width: 20,
                                    height: 20,
                                  },
                                }}
                              />
                            }
                            label={category}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>

                  {/* Age Range */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#013C61",
                          fontFamily: "Poppins",
                        }}
                      >
                        Musical genre
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", lg: "column" },
                          flexWrap: "wrap",
                          gap: { xs: "15px", lg: "0" },
                        }}
                      >
                        {musicGenre.map((category, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={selections.musicalGenres.includes(
                                  category
                                )} // Check if category is selected in state
                                onChange={() =>
                                  handleCheckboxChange(
                                    "musicalGenres",
                                    category
                                  )
                                } // Pass category and item to handler
                                sx={{
                                  "&.Mui-checked": { color: "#FF9700" },
                                  "& .MuiSvgIcon-root": {
                                    width: 20,
                                    height: 20,
                                  },
                                }}
                              />
                            }
                            label={category}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>

                  {/* Age Range */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#013C61",
                          fontFamily: "Poppins",
                        }}
                      >
                        Projects
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", lg: "column" },
                          flexWrap: "wrap",
                          gap: { xs: "15px", lg: "0" },
                        }}
                      >
                        {projects.map((category, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={selections.projects.includes(category)} // Check if category is selected in state
                                onChange={() =>
                                  handleCheckboxChange("projects", category)
                                } // Pass category and item to handler
                                sx={{
                                  "&.Mui-checked": { color: "#FF9700" },
                                  "& .MuiSvgIcon-root": {
                                    width: 20,
                                    height: 20,
                                  },
                                }}
                              />
                            }
                            label={category}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#013C61",
                          fontFamily: "Poppins",
                        }}
                      >
                        Audiovisual
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", lg: "column" },
                          flexWrap: "wrap",
                          gap: { xs: "15px", lg: "0" },
                        }}
                      >
                        {audiovisual.map((category, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={selections.audiovisuals.includes(
                                  category
                                )} // Check if category is selected in state
                                onChange={() =>
                                  handleCheckboxChange("audiovisuals", category)
                                } // Pass category and item to handler
                                sx={{
                                  "&.Mui-checked": { color: "#FF9700" },
                                  "& .MuiSvgIcon-root": {
                                    width: 20,
                                    height: 20,
                                  },
                                }}
                              />
                            }
                            label={category}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>

                  {/* Availability */}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#013C61",
                          fontFamily: "Poppins",
                        }}
                      >
                        Kordia Academy
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", lg: "column" },
                          flexWrap: "wrap",
                          gap: { xs: "15px", lg: "0" },
                        }}
                      >
                        {kordiaAcademy.map((category, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={selections.kordiaAcademy.includes(
                                  category
                                )} // Check if category is selected in state
                                onChange={() =>
                                  handleCheckboxChange(
                                    "kordiaAcademy",
                                    category
                                  )
                                } // Pass category and item to handler
                                sx={{
                                  "&.Mui-checked": { color: "#FF9700" },
                                  "& .MuiSvgIcon-root": {
                                    width: 20,
                                    height: 20,
                                  },
                                }}
                              />
                            }
                            label={category}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                                wordBreak: "break-word",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#013C61",
                          fontFamily: "Poppins",
                        }}
                      >
                        Studio
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "row", lg: "column" },
                          flexWrap: "wrap",
                          gap: { xs: "15px", lg: "0" },
                        }}
                      >
                        {studio.map((category, index) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                checked={selections.studios.includes(category)} // Check if category is selected in state
                                onChange={() =>
                                  handleCheckboxChange("studios", category)
                                } // Pass category and item to handler
                                sx={{
                                  "&.Mui-checked": { color: "#FF9700" },
                                  "& .MuiSvgIcon-root": {
                                    width: 20,
                                    height: 20,
                                  },
                                }}
                              />
                            }
                            label={category}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: "12px",
                                fontFamily: "Poppins",
                                color: "#013C61",
                              },
                            }}
                          />
                        ))}
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Box>
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12  ">
              <div className="bg-white shadow-sm p-3">
                {/* Heading */}
                <Typography
                  style={{ fontFamily: "Poppins", borderRadius: "8px" }}
                >
                  Explore the Musicians
                </Typography>

                {/* Input fields and button */}
                <Box
                  className=" mt-3"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 2, md: 0 },
                  }}
                >
                  {/* Search input field */}
                  <div className="position-relative flex-grow-1 me-2">
                    <input
                      type="text"
                      placeholder="Search for artists by name"
                      className="form-control"
                      style={{
                        height: "38px",
                        backgroundColor: "#F9F9F9",
                        border: "none",
                        paddingLeft: "30px", // Space for the icon
                        fontSize: "14px", // Adjust font size if needed
                      }}
                    />
                    <FaSearch
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        color: "#809DAF",
                      }}
                    />
                  </div>

                  {/* Location input field */}
                  <div className="position-relative flex-grow-1 me-2">
                    <input
                      type="text"
                      placeholder="Location"
                      className="form-control"
                      style={{
                        height: "38px",
                        backgroundColor: "#F9F9F9",
                        border: "none",
                        paddingLeft: "30px", // Space for the icon
                        fontSize: "14px", // Adjust font size if needed
                      }}
                    />
                    <FaMapMarkerAlt
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        color: "#809DAF",
                      }}
                    />
                  </div>

                  {/* Search button */}
                  <Button
                    className="d-flex align-items-center"
                    sx={{
                      backgroundColor: "#FF9700",
                      fontFamily: "Poppins",
                      color: "#fff",
                      borderRadius: "8px",
                      height: "38px",
                      padding: "0 30px", // Increased horizontal padding to widen button
                      fontSize: "14px", // Adjust font size if needed
                      textTransform: "capitalize",
                      fontWeight: 400,
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </div>
              <div className="mt-4">
                <Container>
                  <Row>
                    {filteredData.map((data) => (
                      <Col
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        key={data.id}
                        className="mb-4"
                      >
                        <ArtistCard data={data} />
                      </Col>
                    ))}
                  </Row>
                </Container>

                <div class="d-flex justify-content-center mt-5">
                  <a
                    class="btn-orange-solid text-white py-2 px-5 rounded-pill text-uppercase fw-medium font-bebas"
                    href="#"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </section>

      <div class="clip-top-lft-box"></div>
    </>
  );
};

export default ArtistPage;
