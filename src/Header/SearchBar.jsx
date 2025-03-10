import React, { useState } from "react";
import { Box, Button, Typography, Divider, Switch, Menu, MenuItem, ClickAwayListener, useMediaQuery, Modal } from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Popover from "@mui/material/Popover";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";

const SearchBar = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [travelingWithPets, setTravelingWithPets] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [dateAnchorEl, setDateAnchorEl] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [mobileDatePickerOpen, setMobileDatePickerOpen] = useState(false);
 

  const open = Boolean(dateAnchorEl);
  const id = open ? "date-popover" : undefined;

  const destinations = ["New York", "Paris", "Tokyo", "London"];
  const country = "USA";

  const toggleGuestDropdown = () => setGuestDropdownOpen((prev) => !prev);
  const increment = (setState, stateValue) => setState(stateValue + 1);
  const decrement = (setState, stateValue) => {
    if (stateValue > 0) {
      setState(stateValue - 1);
    }
  };

  const handleDestinationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (destination) => {
    setSelectedDestination(destination);
    setAnchorEl(null);
  };

  const handleDateClick = (event) => {
    if (isMobile) {
      setMobileDatePickerOpen(true); // Open mobile modal
    } else {
      setDateAnchorEl(event.currentTarget); // Open desktop popover
    }
  };

  const handleCloseDatePopover = () => {
    setDateAnchorEl(null);
  };

  const handleCloseMobileDatePicker = () => {
    setMobileDatePickerOpen(false);
  };

  const formattedDate =
    dateRange[0] && dateRange[1]
      ? `${dayjs(dateRange[0]).format("DD/MM/YYYY")} - ${dayjs(dateRange[1]).format("DD/MM/YYYY")}`
      : "Check-in Date — Check-out Date";

    const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid orange",
        borderRadius: "10px",
        padding: { xs: "10px", md: "20px" },
        backgroundColor: "white",
        maxWidth: isMobile ? "100%" : "70%" ,
        margin: "20px auto",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        gap: { xs: 2, md: 1 },
        flexWrap: "wrap",
      }}
    >
      {/* Destination Dropdown */}
      <Box sx={{ display: "flex", alignItems: "center", flex: 1, width: { xs: "100%", md: "auto" } }}>
        <BedIcon sx={{ color: "black", mr: 1 }} />
        <Button onClick={handleDestinationClick} sx={{ fontSize: "14px", color: "black", flexGrow: 1, textAlign: "left" }}>
          {selectedDestination || "Where are you going?"} {selectedDestination && country && `, ${country}`}
        </Button>
        <KeyboardArrowDownIcon sx={{ color: "black" }} />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{ sx: { minWidth: "335px" } }}
        >
          {destinations.map((destination) => (
            <MenuItem key={destination} onClick={() => handleMenuClose(destination)}>
              <LocationOnIcon sx={{ color: "black" }} />
              <div>{destination}</div>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: { xs: "2px", md: "40px" },
          width: { xs: "100%", md: "2px" },
          backgroundColor: "orange",
          marginX: { xs: 0, md: "10px" },
          display: { xs: "none", md: "block" },
        }}
      ></Box>

      {/* Date Range Picker */}
      <Box sx={{ display: "flex", alignItems: "center", flex: 1, width: { xs: "100%", md: "auto" }, gap: 1 }}>
        <CalendarTodayIcon className='me-lg-0 me-5' sx={{ color: "black"}} />
        <Typography sx={{ fontSize: "14px", color: "black", flexGrow: 1, textAlign: "left" }} onClick={handleDateClick}>
          {formattedDate}
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: "black" }} />
        {!isMobile && (
          <Popover
            id={id}
            open={open}
            anchorEl={dateAnchorEl}
            onClose={handleCloseDatePopover}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Box sx={{ padding: "16px", minWidth: "300px" }}>
              <Typography variant="h6">Select Your Dates</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker value={dateRange} onChange={(newValue) => setDateRange(newValue)} />
              </LocalizationProvider>
              <Divider sx={{ my: 2 }} />
              <Button variant="contained" fullWidth onClick={handleCloseDatePopover} sx={{ mt: 2 }}>
                Done
              </Button>
            </Box>
          </Popover>
        )}
      </Box>

      {/* Mobile Date Picker Modal */}
      <Modal open={mobileDatePickerOpen} onClose={handleCloseMobileDatePicker}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            padding: "16px",
            width: "90%",
            maxWidth: "400px",
          }}
        >
          <Typography variant="h6">Select Your Dates</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker value={dateRange} onChange={(newValue) => setDateRange(newValue)} />
          </LocalizationProvider>
          <Divider sx={{ my: 2 }} />
          <Button variant="contained" fullWidth onClick={handleCloseMobileDatePicker} sx={{ mt: 2 }}>
            Done
          </Button>
        </Box>
      </Modal>

      {/* Divider */}
      <Box
        sx={{
          height: { xs: "2px", md: "40px" },
          width: { xs: "100%", md: "2px" },
          backgroundColor: "orange",
          marginX: { xs: 0, md: "10px" },
          display: { xs: "none", md: "block" },
        }}
      ></Box>

      {/* Guests and Rooms */}
      <Box sx={{ display: "flex", alignItems: "center", flex: 1, width: { xs: "100%", md: "auto" }, cursor: "pointer", gap: 1 }} onClick={toggleGuestDropdown}>
        <PersonIcon sx={{ color: "black" }} />
        <Typography sx={{ fontSize: "14px", color: "black", flexGrow: 1 }}>
          {adults} adults · {children} children · {rooms} room
        </Typography>
        <KeyboardArrowDownIcon sx={{ color: "black" }} />
      </Box>

      {/* Guest Dropdown */}
      {guestDropdownOpen && (
        <ClickAwayListener onClickAway={() => setGuestDropdownOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "100%", md: "80%" },
              left: { xs: "50%", md: "58%" },
              transform: { xs: "translateX(-50%)", md: "none" },
              zIndex: 10, backgroundColor: "white",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px", padding: "15px",
              width: { xs: "90%", md: "350px" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography>Adults</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button variant="outlined" onClick={() => decrement(setAdults, adults)}>-</Button>
                <Typography>{adults}</Typography>
                <Button variant="outlined" onClick={() => increment(setAdults, adults)}>+</Button>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography>Children</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button variant="outlined" onClick={() => decrement(setChildren, children)}>-</Button>
                <Typography>{children}</Typography>
                <Button variant="outlined" onClick={() => increment(setChildren, children)}>+</Button>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography>Rooms</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button variant="outlined" onClick={() => decrement(setRooms, rooms)}>-</Button>
                <Typography>{rooms}</Typography>
                <Button variant="outlined" onClick={() => increment(setRooms, rooms)}>+</Button>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography>Traveling with pets?</Typography>
              <Switch checked={travelingWithPets} onChange={() => setTravelingWithPets(!travelingWithPets)} />
            </Box>

            <Button variant="contained" fullWidth onClick={toggleGuestDropdown} sx={{ mt: 2 }}>
              Done
            </Button>
          </Box>
        </ClickAwayListener>
      )}

      {/* Search Button */}
      <Button sx={{ backgroundColor: "#0066cc", color: "white", padding: { xs: "10px 20px", md: "10px 30px" }, borderRadius: "8px", "&:hover": { backgroundColor: "#005bb5" }, width: { xs: "100%", md: "auto" }, mt: { xs: 2, md: 0 } }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
