import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import SSSS from "../images/BgImage.png";

const VillaSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      sx={{
        backgroundImage: `url(${SSSS})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: isMobile ? "100%" : "70%" , // Responsive width
        margin: "auto",
        padding: "3rem",
        borderRadius: "8px",
        height: { xs: "250px", sm: "300px" },
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
      }}
       
      className="container-lg gap-2 align-items-center py-2 mt-lg-5"
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "60%", sm: "50%" },
          left: { xs: "10%", sm: "20%", lg: "25%" }, // Adjust horizontal position
          transform: "translate(-10%, -50%)", // Ensure proper alignment
          textAlign: "left", // Align text to the left
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "20px", sm: "25px", lg: "30px" }, // Responsive font size
            color: "white",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Find Homes <br /> For Your New Trips
        </Typography>
        <Button
          variant="contained"
          sx={{
            color: "#0057B8",
            fontWeight: "bold",
            backgroundColor: "white",
            padding: { xs: "0.3rem 1rem", sm: "0.5rem 2rem" },
          }}
        >
          Discover Homes
        </Button>
      </Box>
    </Box>
  );
};

export default VillaSection;
