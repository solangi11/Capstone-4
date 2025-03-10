import React, { useState } from 'react';
import { Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Logo from "../images/Flag.png"
import Booking from '../images/booking.png'
import Opentube from '../images/opentube.png'
import Agoda from '../images/agoda.png'
import Priceline from '../images/priceline.png'
import Kayak from '../images/kayak.png'

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const FirstFooter = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [openSupport, setOpenSupport] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);
  const [openPartners, setOpenPartners] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openCareers, setOpenCareers] = useState(false);


  const toggleSupport = () => setOpenSupport(!openSupport);
  const toggleTerms = () => setOpenTerms(!openTerms);
  const togglePartners = () => setOpenPartners(!openPartners);
  const toggleAbout = () => setOpenAbout(!openAbout);
  const toggleCareers = () => setOpenCareers(!openCareers);

  const buttonData = [
    { label: "Domestic cities", color: "#006CE4" },
    { label: "International cities", color: "black" },
    { label: "Regions", color: "black" },
    { label: "Countries", color: "black" },
    { label: "Place to stay", color: "black" }
  ];

  return (
    <>
      <Box
        style={{ maxWidth: isMobile ? "100%" : "70%" }}
        className="container-lg gap-2 align-items-center py-2 mt-lg-5"
      >
        <h3 className="fw-bold">Popular with travelers from Pakistan</h3>

        <Box
          className="d-flex gap-2 py-2"
          sx={{
            display: 'flex',
            flexDirection: 'row',  // Keep buttons in a row
            gap: { xs: '10px', sm: '20px' },  // Adjust gap for different screen sizes
            alignItems: 'center',
            justifyContent: 'start',  // Align buttons at the start for horizontal scrolling
            overflowX: 'auto',  // Enable horizontal scrolling
            width: '100%',
            whiteSpace: 'nowrap',  // Prevent wrapping of the buttons
          }}
        >
          {buttonData.map((button, index) => (
            <Button
              key={index}  // Unique key for each button
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                color: button.color === "#006CE4" ? "#006CE4" : "black",
                border: button.color === "#006CE4" ? "1px solid #006CE4" : "1px solid black",
                borderRadius: '20px',
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(51, 121, 161, 0.1)',
                },
                fontSize: { xs: '14px', sm: '15px' },
                whiteSpace: 'nowrap',  // Prevent button text from breaking
                textOverflow: 'ellipsis',  // Add ellipsis when text overflows
                minWidth: '120px',  // Set minimum width to prevent buttons from becoming too small
              }}
            >
              <Typography className="text-capitalize" variant="body2" sx={{ marginLeft: '0px' }}>
                {button.label}
              </Typography>
            </Button>
          ))}
        </Box>
        <hr />
        <Box
      sx={{
        overflowX: 'auto', // Enable horizontal scrolling
        whiteSpace: 'nowrap', // Prevent wrapping
        display: 'flex', // Make sure items are displayed inline
        gap: 4, // Gap between the boxes
        flexWrap: 'nowrap', // Prevent wrapping in mobile view
        '@media (max-width: 768px)': {
          // Apply horizontal scroll only on small screens (mobile)
          overflowX: 'scroll', // Enable horizontal scrolling for mobile
          flexDirection: 'row', // Arrange the items horizontally
        },
        '@media (min-width: 769px)': {
          // On desktop screens, disable horizontal scroll and keep boxes in a row
          overflowX: 'unset', // No horizontal scrolling
          flexDirection: 'row', // Keep items in a row
        },
      }}
    >
      {['Box 1', 'Box 2', 'Box 3', 'Box 4', 'Box 5'].map((box, index) => (
        <Box
          sx={{
            fontSize: '12px',
            display: 'flex',
            flexDirection: 'column',
            width: '200px', // Set fixed width for each box
            minWidth: '200px', // Ensures each box has at least this width
          }}
          key={index}
        >
          <List sx={{ listStyleType: 'none', padding: 0 }}>
            <ListItem sx={{ padding: 0 }}>
              <Link className="custum text-decoration-none text-black">
                foodpanda Vouchers & Coupons
              </Link>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Link className="custum text-decoration-none text-black">
                pandamart Grocery Delivery
              </Link>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Link className="custum text-decoration-none text-black">
                Become an Affiliate
              </Link>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Link className="custum text-decoration-none text-black">
                Areas delivered in Gujranwala
              </Link>
            </ListItem>
            <ListItem sx={{ padding: 0 }}>
              <Link className="custum text-decoration-none text-black">
                Areas delivered in Peshawar
              </Link>
            </ListItem>
          </List>
        </Box>
      ))}
    </Box>

    <Box className="mt-lg-3"
      sx={{
        fontSize: "12px",
        overflowX: "auto", // Horizontal scroll ke liye
        whiteSpace: "nowrap", // Text ko ek line mein rakhne ke liye
        display: "flex",
        gap: "4px",
        paddingTop: "12px",
        scrollBehavior: "smooth", // Smooth scrolling
        "&::-webkit-scrollbar": {
          display: "none", // Scrollbar hide karne ke liye
        },
      }}
    >
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Laos
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Cambodia
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Myanmar
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Thailand
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Kong
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Taiwan
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Malaysia
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Philippines
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Singapore
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Bangladesh
      </Typography>
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Laos
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Cambodia
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Myanmar
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Thailand
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Kong
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Taiwan
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Malaysia
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Philippines
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Singapore
      </Typography>
    </Box>
    <Box
      sx={{
        fontSize: "12px",
        overflowX: "auto", // Horizontal scroll ke liye
        whiteSpace: "nowrap", // Text ko ek line mein rakhne ke liye
        display: "flex",
        gap: "4px",
        paddingTop: "12px",
        scrollBehavior: "smooth", // Smooth scrolling
        "&::-webkit-scrollbar": {
          display: "none", // Scrollbar hide karne ke liye
        },
      }}
    >
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Laos
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Cambodia
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Myanmar
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Thailand
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Kong
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Taiwan
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Malaysia
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Philippines
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Singapore
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Bangladesh
      </Typography>
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Laos
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Cambodia
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Myanmar
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Thailand
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Kong
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Taiwan
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Malaysia
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Philippines
      </Typography>
      .
      <Typography sx={{ fontSize: "12px" }} className="custum text-decoration-none text-black">
        Singapore
      </Typography>
    </Box>

        <footer>
      <Box className="row mt-lg-4 mt-2" sx={{ gap: 1}}>
        {/* Support Section */}
        <Box sx={{ fontSize: "12px" }} className="col-md-2">
          <Box  onClick={toggleSupport} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography className='fw-bold'>Support</Typography>
            <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
              {openSupport ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
          <Collapse in={openSupport || window.innerWidth >= 900}>
            <List sx={{ listStyleType: "none", padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </Box>

        {/* Terms and Settings Section */}
        <Box sx={{ fontSize: "12px" }} className="col-md-2">
          <Box  onClick={toggleTerms} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography className='fw-bold'>Terms and settings</Typography>
            <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
              {openTerms ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
          <Collapse in={openTerms || window.innerWidth >= 900}>
            <List sx={{ listStyleType: "none", padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </Box>

        {/* Partners Section */}
        <Box sx={{ fontSize: "12px" }} className="col-md-2">
          <Box onClick={togglePartners} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography className='fw-bold'>Partners</Typography>
            <IconButton  sx={{ display: { xs: 'block', md: 'none' } }}>
              {openPartners ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
          <Collapse in={openPartners || window.innerWidth >= 900}>
            <List sx={{ listStyleType: "none", padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </Box>

        {/* About Section */}
        <Box sx={{ fontSize: "12px" }} className="col-md-2">
          <Box onClick={toggleAbout} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography className='fw-bold'>About</Typography>
            <IconButton  sx={{ display: { xs: 'block', md: 'none' } }}>
              {openAbout ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
          <Collapse in={openAbout || window.innerWidth >= 900}>
            <List sx={{ listStyleType: "none", padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  foodpanda Vouchers & Coupons
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  pandamart Grocery Delivery
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Become an Affiliate
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Gujranwala
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Areas delivered in Peshawar
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </Box>

        {/* Careers Section (New Dropdown) */}
        <Box sx={{ fontSize: "12px" }} className="col-md-2">
          <Box  onClick={toggleCareers} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography className='fw-bold'>Careers</Typography>
            <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
              {openCareers ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
          <Collapse in={openCareers || window.innerWidth >= 900}>
            <List sx={{ listStyleType: "none", padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Job Openings
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Internships
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Work Culture
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Employee Benefits
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link className='custum text-decoration-none text-black'>
                  Join Our Team
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </Box>

        <Box className="col-md-2" />
      </Box>
      <Box
              className="col-md-2 d-flex align-items-center justify-content-start justify-content-md-start accordion-body mt-2"
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' }, // Center on mobile (xs), left on desktop (md)
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={Logo}
                alt="English Flag"
                sx={{
                  width: '30px',  // Set the desired width
                  height: '30px', // Set the desired height
                  borderRadius: '50%', // Makes the image rounded
                  objectFit: 'cover', // Ensures the image maintains its aspect ratio
                }}
              />
              <Button
                className="btn d-flex align-items-center ms-2"
                sx={{
                  backgroundColor: 'transparent', // Default background color
                  color: '#000', // Default text color
                  '&:hover': {
                    backgroundColor: '#6c757d', // Dark gray background on hover
                  },
                }}
              >
                PKR
              </Button>
            </Box>

      <hr />
    </footer>

    <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Copyright © 1996–2025 Booking.com™. All rights reserved.
            </Typography>

            <Box sx={{ display: 'flex',   flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
              <Box component="img" src={Booking} alt="Booking" sx={{ width: '100px', height: 'auto' }} />
              <Box component="img" src={Priceline} alt="Priceline" sx={{ width: '100px', height: 'auto' }} />
              <Box component="img" src={Kayak} alt="Kayak" sx={{ width: '100px', height: 'auto' }} />
              <Box component="img" src={Opentube} alt="Opentube" sx={{ width: '100px', height: 'auto' }} />
              <Box component="img" src={Agoda} alt="Agoda" sx={{ width: '100px', height: 'auto' }} />
            </Box>
          </Box>
      </Box>
    </>
  );
};

export default FirstFooter;
