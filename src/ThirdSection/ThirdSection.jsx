import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import Hotel from "../images/Hotel.jpeg"
import Hostel from "../images/Hostel.jpeg"
import Apart from "../images/B&bs.jpeg"
import Guest from "../images/Guest houes.jpeg"
import luxuery from "../images/Luxury tents.jpeg"
import Mostels from "../images/motels.jpeg"
import Resorts from "../images/Resorts.jpeg"
import reaids from "../images/Reaids.jpeg"
import Rekens from "../images/Rokens.jpeg"
import Served from "../images/Served Apartment.jpeg"
import Cabins from "../images/Cabins.jpeg"
import Cottages from "../images/Cottages.jpeg"
import Apartment from "../images/Apartment.jpeg"
import Vilales from "../images/Vilales.jpeg"


const cities = [
  {
    name: "Hotel",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 18,
    image: Hotel,
  },

  {
    name: "Hostel",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 18,
    image: Hostel,
  },

  {
    name: "Apart",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 142,
    image: Apart,
  },
  {
    name: "Guest",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 13,
    image: Guest,
  },
  {
    name: "luxueryi",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 25,
    image: luxuery,
  },
  {
    name: "Mostels",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Mostels,
  },
  {
    name: "Resorts",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Resorts,
  },
  {
    name: "reaids",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: reaids,
  },
  {
    name: "Rekens",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Rekens,
  },
  {
    name: "Served",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Served,
  },
  {
    name: "Vilales Home",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Vilales,
  },
  {
    name: "Vilales",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Apartment,
  },
  {
    name: "Cabins",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Cabins,
  },
  {
    name: "Cottages",
    dates: "Jan 31 - Feb 1, 2 adults",
    properties: 39,
    image: Cottages,
  },
];


const ThirdSection = () => {
  const sliderRef = React.useRef();

  // Carousel settings
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box className="container-lg  align-items-center py-2" sx={{ maxWidth: isMobile ? "100%" : "70%", overflow: "hidden", mt: 4 }}>
      <Typography className="text-start" variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Browse by property type
      </Typography>
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={() => sliderRef.current.slickPrev()}
          sx={{
            position: "absolute",
            top: "35%",
            left: "-10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff",
            transition: "background 0.3s,box-shadow 0.3s",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            "&:hover": {
              background: "#f0f0f0",
              boxShadow: "0px 6px 10px rgba (0,0,0,0.2)"
            },
            display: { xs: "flex", md: "flex" }
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={() => sliderRef.current.slickNext()}
          sx={{
            position: "absolute",
            top: "35%",
            borderRadius: '100px',
            right: "-10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff",
            transition: "background 0.3s,box-shadow 0.3s",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            "&:hover": {
              background: "#f0f0f0",
              boxShadow: "0px 6px 10px rgba (0,0,0,0.2)"
            },
            display: { xs: "flex", md: "flex" }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Slider ref={sliderRef} {...settings}>
          {cities.map((city, index) => (
            <Card key={index} sx={{ borderRadius: 0, boxShadow: "none" }}>
              <CardMedia
                sx={{ padding: "0px 10px", borderRadius: "20px" }} // Remove border radius here as well
                component="img"
                height="250"
                image={city.image}
                alt={city.name}
              />
              <CardContent>
                <Typography className="text-start" variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {city.name}
                </Typography>
                <Typography className="text-start" variant="body2" color="text.secondary">
                  {city.properties} properties
                </Typography>
                <Typography className="text-start" variant="body2" color="text.secondary">
                  {city.dates} dates
                </Typography>
              </CardContent>
            </Card>

          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default ThirdSection;
