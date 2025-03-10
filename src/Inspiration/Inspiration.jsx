import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Cabis from "../images/Cabins.jpeg"
import Apatment from "../images/Apartment.jpeg"
import Guest from "../images/Guest houes.jpeg"
import Hostel from "../images/Hostel.jpeg"
import hotel from "../images/Hotel.jpeg"
import Resorts from "../images/Resorts.jpeg"
import motels from "../images/motels.jpeg"
import Rokens from "../images/Rokens.jpeg"
import Cottages from "../images/Cottages.jpeg"
import Luxury from "../images/Luxury tents.jpeg"
import Served from "../images/Served Apartment.jpeg"
import { Link } from 'react-router-dom'; 

// Dummy data for cities
const cities = [
    {
        name: "Taj Park Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Apatment, // Replace with the actual image URL
    },
    {
        name: "Novotel Makkah Thakher City",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Cabis, // Replace with the actual image URL
    },
    {
        name: "M Hotel Makkah by Millennium",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Guest, // Replace with the actual image URL
    },
    {
        name: "Das rote Haus hinterm Deich",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Hostel, // Replace with the actual image URL
    },
    {
        name: "Karachi",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: hotel, // Replace with the actual image URL
    },
    {
        name: "voco Makkah an IHG Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Resorts, // Replace with the actual image URL
    },
    {
        name: "Makarem Ajyad Makkah Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Luxury, // Replace with the actual image URL
    },
    {
        name: "Courtyard by Marriott Makkah",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Served, // Replace with the actual image URL
    },
    {
        name: "Makarem Umm Al Qura Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: motels, // Replace with the actual image URL
    },
    {
        name: "Three Points Musalli Makkah",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Rokens, // Replace with the actual image URL
    },
    {
        name: "Selat Al Bait Hotel",
        place: "Tower Homlets Unitex KIngdom ,London",
        value: 8.8,
        work: "Excellent",
        review: 723,
        price: "85,224",
        image: Cottages , // Replace with the actual image URL
    },
    // More cities here...
];

const Inspiration = () => {
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
        <Box className="container-lg align-items-center py-2" sx={{ maxWidth: isMobile ? "100%" : "70%" , overflow: "hidden", mt: 4 }}>
            <Typography className="text-start" variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Properties you might like in Mecca
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
                        right: "-10px",
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
                        <Card key={index} sx={{ borderRadius: 0, boxShadow: "none" }}>
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
                                <Typography className="text-start" variant="subtitle1" sx={{ fontWeight: "bold" }}>
                                    {city.name}
                                </Typography>
                                <Typography  className="text-start" variant="body2" color="text.secondary" sx={{ fontSize: "13px" }}>
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
                                <div className="d-flex align-items-center gap-1 justify-content-end mt-lg-4">
                                    <Typography sx={{ fontSize: "13px", color: "gray" }}>Starting from</Typography>
                                    <Typography sx={{ fontSize: "18px", fontWeight: "bold", color: "black" }}>
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

export default Inspiration;
