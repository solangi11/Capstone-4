import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Avari from "../images/Deal-img/Avari.jpg"
import City from "../images/Deal-img/City.jpg"
import Goodwood from "../images/Deal-img/Goodwood.jpg"
import Reina from "../images/Deal-img/Reina.jpg"
import Three from "../images/Deal-img/Three Tress.jpg"
import Sky from "../images/Deal-img/Sky Veiw.jpg"
import Sultan from "../images/Deal-img/Sultan hamid.jpg"
import park from "../images/Deal-img/Park Veiw.jpg"
import Hazoltan from "../images/Deal-img/Hazolton.jpg"
import Gulbrge from "../images/Deal-img/Gulbrge.jpg"
import { Link } from 'react-router-dom';


const cities = [
    {
        name: "Millennium Place Barsha Heights Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        deletedprice :123456,
        image: Avari,
    },

    {
        name: "Ramada Encore by Wyndham Istanbul Sisli",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: City,
    },
    {
        name: "M Hotel Makkah by Millennium",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Goodwood, 
    },
    {
        name: "Ramada Istanbul Grand Bazaar",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Reina,
    },
    {
        name: "Swissôtel Al Murooj Dubai",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Three,
    },
    {
        name: "Elaf Kinda Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Sky,
    },
    {
        name: "Crowne Plaza Istanbul - Old City, an IHG Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Sultan,
    },
    {
        name: "Atana Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: park, // Replace with the actual image URL
    },
    {
        name: "Elaf Ajyad Hotel Makkah",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Hazoltan, // Replace with the actual image URL
    },
    {
        name: "Daru Sultan Hotels Galata",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Gulbrge, // Replace with the actual image URL
    },
    {
        name: "Emaar Grand Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Avari, // Replace with the actual image URL
    },
    // More cities here...
];

const UniqueProperties  = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
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

    return (
        <Box className="container-lg align-items-center py-2" sx={{  maxWidth: isMobile ? "100%" : "70%" , overflow: "hidden", mt: 4 }}>
            <Typography className="text-start" variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Deals for the weekend
            </Typography>
            <Box sx={{ position: "relative" }}>
            <IconButton
        onClick={() => sliderRef.current.slickPrev()}
        sx={{
          position: "absolute",
          top: "30%",
          left: "-10px",
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
          borderRadius: '100px',
          right: "-10px",
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
        <ArrowForwardIosIcon />
      </IconButton>
                <Slider ref={sliderRef} {...settings}>
                    {cities.map((city, index) => (
                        <Card className="text-start" key={index} sx={{ borderRadius: 0, boxShadow: "none" }}>
                            <Box sx={{ position: "relative" }}>
                            <Link to="/Bookingpage">
    <CardMedia
        sx={{ padding: "0px 10px", borderRadius: "15px 15px 0px 0px" }}
        component="img"
        height="250"
        image={city.image}
        alt={city.name}
    />
</Link>
                             <IconButton
    sx={{
        position: "absolute",
        top: "10px",
        right: "20px",
        zIndex: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Initial background
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly more opaque background on hover
        },
    }}
>
    <FavoriteBorderIcon sx={{ color: "black" }} /> {/* Red color for the favorite icon */}
</IconButton>

                            </Box>
                            <CardContent>
                            <button className="text-start"
                                        style={{
                                            fontSize: "9px",
                                            backgroundColor: "#003B95",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "3px 5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Genius
                                    </button>
                                <Typography className="text-start" variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                    {city.name}
                                </Typography>
                                <Typography className="text-start" variant="body2" color="text.secondary" sx={{ fontSize: "13px" }}>
                                    {city.place}
                                </Typography>
                                <div className="d-flex gap-2 align-items-center">
                                    <button
                                        style={{
                                            fontSize: "13px",
                                            backgroundColor: "#003B95",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "3px 5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {city.value}
                                    </button>
                                    <Typography sx={{ fontSize: "13px", color: "gray" }}>{city.work}</Typography>
                                    <Typography sx={{ fontSize: "13px", color: "gray" }}>.</Typography>
                                    <Typography sx={{ fontSize: "13px", color: "gray" }}>{city.review} review</Typography>
                                </div>
                                <button className="mt-lg-1 text-start"
                                        style={{
                                            fontSize: "13px",
                                            backgroundColor: "#008234",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "3px 5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                       Early 2025 Deals
                                    </button>
                                <div className="d-flex align-items-center gap-1  justify-content-end mt-lg-3">
                                <Typography sx={{ fontSize: "11px", color: "gray" }}>2 nights</Typography>
                                <Typography className='text-decoration-line-through' sx={{ fontSize: "12px", fontWeight: "bold", color: "red" }}>
                                        PRK {city.deletedprice}
                                    </Typography>


                             
                                    <Typography sx={{ fontSize: "14px", fontWeight: "bold", color: "black" }}>
                                        PRK {city.price}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default UniqueProperties;
