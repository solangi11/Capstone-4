import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import islamabad from "../images/Expoler-img/islamabad.jpg"
import lahore from "../images/Expoler-img/lahore.jpg"
import karachi from "../images/Expoler-img/karachi.jpg"
import rawalpindi from "../images/Expoler-img/rawalpindi.jpg"
import skardu from "../images/Expoler-img/skardu.jpg"
import naran from "../images/Expoler-img/islamabad.jpg"
import hunza from "../images/Expoler-img/skardu.jpg"
import multan from "../images/Expoler-img/lahore.jpg"
import nathia from "../images/Expoler-img/skardu.jpg"
import murree from "../images/Expoler-img/islamabad.jpg"
import { Link } from 'react-router-dom'; 
// Dummy data for cities
const cities = [
  { name: "Islamabad", properties: 161, image: islamabad},
  { name: "Lahore", properties: 18, image: lahore},
  { name: "Karachi", properties: 142, image: karachi},
  { name: "Rawalpindi", properties: 13, image: rawalpindi },
  { name: "Skardu", properties: 25, image: skardu },
  { name: "Naran", properties: 39, image: naran },
  { name: "Murree", properties: 39, image: murree },
  { name: "Hunza Viley", properties: 39, image: hunza },
  { name: "Multan", properties: 39, image: multan },
  { name: "Nathia", properties: 39, image: nathia },
];

const ExplorePakistan = () => {
  const sliderRef = React.useRef();
  const isMobile = useMediaQuery("(max-width: 768px)");
  // Carousel settings
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Box className="container-lg  align-items-center py-2" sx={{  maxWidth: isMobile ? "100%" : "70%"   , overflow: "hidden",  mt: 4 }}>
      <Typography className="text-start" variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        Explore Pakistan
      </Typography>
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={() => sliderRef.current.slickPrev()}
          sx={{
            position: "absolute",
            top: "30%",
            left: "-11px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff",
            transition: "background 0.3s,box-shadow 0.3s",
            boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",
            "&:hover":{
              background :"#f0f0f0",
              boxShadow:"0px 6px 10px rgba (0,0,0,0.2)"
            },
    display: {xs:"flex",md:"flex"}
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={() => sliderRef.current.slickNext()}
          sx={{
            position: "absolute",
            top: "30%",
            right: "-11px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "#fff",transition: "background 0.3s,box-shadow 0.3s",
            boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",
            "&:hover":{
              background :"#f0f0f0",
              boxShadow:"0px 6px 10px rgba (0,0,0,0.2)"
            },
    display: {xs:"flex",md:"flex"}

          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Slider ref={sliderRef} {...settings}>
          {cities.map((city, index) => (
            <Card  key={index} sx={{ borderRadius: 0, boxShadow: "none"  }}>
          <Link to="/Bookingpage">
    <CardMedia
        component="img"
        height="140"
        image={city.image}
        alt={city.name}
        sx={{ borderRadius: "20px", padding: '0px 5px' }}
    />
</Link>
              <CardContent>
                <Typography className="text-start" variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {city.name}
                </Typography>
                <Typography  className="text-start" variant="body2" color="text.secondary">
                  {city.properties} properties
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ExplorePakistan;
