import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  IconButton,
  Avatar,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Flag from "../images/Flag.png";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";

const MainNavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggle menu

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (modalType === "register") {
      localStorage.setItem("registeredUser", JSON.stringify(data));
      alert("Registration successful! Please Sign In.");
      setModalType("login");
      setOpenModal(true);
    } else if (modalType === "login") {
      const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
      if (
        registeredUser &&
        registeredUser.email === data.email &&
        registeredUser.password === data.password
      ) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        setIsLoggedIn(true);
        setUser(data);
        setOpenModal(false);
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "350px",
        backgroundColor: "#003B95",
        position: "relative",
      }}
    >
      {/* Top Navbar */}
      <div
        className="container-lg d-flex justify-content-between align-items-center py-2"
        style={{ maxWidth: isMobile ? "100%" : "70%" }}
      >
        <h4 className="fw-bold m-0 text-white">Booking.com</h4>
        <div
          className={`d-flex align-items-center gap-4 ${isMobile ? "d-none" : ""
            }`}
        >
          <div className="d-flex align-items-center gap-4">
            <h6 className="m-0 text-white">PRK</h6>
            <img
              className="rounded-5"
              src={Flag}
              alt="Flag"
              style={{ width: "20px", height: "20px", objectFit: "cover" }}
            />
          </div>
          <HelpOutlineIcon
            className="text-white"
            style={{ cursor: "pointer" }}
          />

          {isLoggedIn ? (
            <div className="d-flex align-items-center gap-3">
              <Avatar sx={{ bgcolor: "white", color: "#003B95" }}>
                {user.email.charAt(0).toUpperCase()}
              </Avatar>
              <Button
                onClick={handleLogout}
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}>
                Logout
              </Button>
            </div>
          ) : (
            <>
              <button className="btn border-0 text-white fs-6 fw-semibold">
                List Your Property
              </button>
              <button
                className="border-0 rounded-1 fw-semibold px-3"
                style={{ backgroundColor: "white", color: "#003B95" }}
                onClick={() => {
                  setModalType("register");
                  setOpenModal(true);
                }}
              >
                Register
              </button>
              <button
                className="border-0 rounded-1 fw-semibold px-3"
                style={{ backgroundColor: "white", color: "#003B95" }}
                onClick={() => {
                  setModalType("login");
                  setOpenModal(true);
                }}
              >
                Sign In
              </button>
            </>
          )}
        </div>
        {isMobile && (
          <IconButton
            className="d-md-none"
            style={{ color: "white" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
          >
            <MenuIcon />
          </IconButton>
        )}
      </div>

      {/* Mobile Drawer for Menu */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto", // Allow scrolling inside the drawer
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          {/* Mobile Menu Options */}
          <Button
            sx={{ width: "100%", marginBottom: 2 }}
            onClick={() => {
              setModalType("register");
              setOpenModal(true);
            }}
          >
            Register
          </Button>
          <Button
            sx={{ width: "100%", marginBottom: 2 }}
            onClick={() => {
              setModalType("login");
              setOpenModal(true);
            }}
          >
            Sign In
          </Button>
          <Button sx={{ width: "100%", marginBottom: 2 }}>
            List Your Property
          </Button>
          <Button sx={{ width: "100%" }} onClick={() => setIsMenuOpen(false)}>
            Close
          </Button>
        </Box>
      </Drawer>

      {/* Modal for Login & Register */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" className="fw-bold">
            {modalType === "login" ? "Sign In" : "Register"}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            {modalType === "register" && (
              <TextField
                fullWidth
                margin="normal"
                label="Confirm Password"
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              {modalType === "login" ? "Sign In" : "Register"}
            </Button>
          </form>
        </Box>
      </Modal>

      <Box
        style={{
          maxWidth: isMobile ? "100%" : "70%", // Adjust the width depending on screen size
          display: "flex", // Flexbox layout for items
          gap: "15px", // Space between items
          alignItems: "center", // Vertically center content
          padding: isMobile ? "10px 5px" : "10px 0", // Adjust padding for mobile and larger screens
          flexWrap: "nowrap", // Prevent wrapping of items
          overflowX: "auto", // Enable horizontal scrolling
          overflowY: "hidden", // Prevent vertical scrolling
          WebkitOverflowScrolling: "touch", // Add smooth scrolling on mobile devices
        }}
        className="container-lg"
      >
        {/* Stays, Flights, Car Rentals, Attractions, Airport Taxis */}
        {[
          { icon: <BedIcon />, label: "Stays" },
          { icon: <FlightTakeoffIcon />, label: "Flights" },
          { icon: <DirectionsCarIcon />, label: "Car rentals" },
          { icon: <AttractionsIcon />, label: "Attractions" },
          { icon: <LocalTaxiIcon />, label: "Airport taxis" },
        ].map((item, index) => (
          <Button
            key={index}
            sx={{
              display: "flex", // Flex for icon and label
              flexDirection: "row", // Align items horizontally
              alignItems: "center", // Center vertically
              color: "white",
              borderRadius: "20px", // Rounded corners
              padding: "8px 12px", // Padding inside the button
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Background color with transparency
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Slightly darker on hover
              },
              fontSize: "14px", // Slightly bigger font size
              gap: "10px", // Space between icon and text
              minWidth: "120px", // Minimum width to keep the buttons even
              whiteSpace: "nowrap", // Prevent text from wrapping
            }}
          >
            {item.icon}
            <Typography
              className="text-capitalize"
              variant="body2"
              sx={{ marginLeft: "5px", whiteSpace: "nowrap" }}
            >
              {item.label}
            </Typography>
          </Button>
        ))}
      </Box>

      <div
        style={{ maxWidth: isMobile ? "100%" : "70%" }}
        className="container-lg gap-2 align-items-center py-2 mt-lg-5"
      >
        <h1 className="fw-bold text-start display-5 text-white">Find your next stay</h1>
        <h4 className="text-white text-start fw-normal mt-2">
          Search deals on hotels, homes, and much more...
        </h4>
      </div>
      <SearchBar />
      <Outlet />
    </div>

  );
};

export default MainNavBar;
