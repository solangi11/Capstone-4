import React from "react";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FilterList = () => {
  const filters = [
    {
      id: 1,
      title: "Popular filters",
      filters: [
        { label: "5 stars", count: 17 },
        { label: "Hotels", count: 223 },
        { label: "Hotels", count: 223 },
        { label: "Apartments", count: 367 },
        { label: "Villas", count: 14 },
        { label: "Villas", count: 14 },
        { label: "Private pool", count: 48 },
        { label: "Holiday homes", count: 27 },
        { label: "Holiday homes", count: 27 },
      ],
    },
    {
      id: 2,
      title: "Property type",
      filters: [
        { label: "Apartments", count: 367 },
        { label: "Apartments", count: 367 },
        { label: "Hotels", count: 223 },
        { label: "Guest houses", count: 45 },
        { label: "Guest houses", count: 45 },
        { label: "Holiday homes", count: 27 },
        { label: "Holiday homes", count: 27 },
      ],
    },
    {
      id: 3,
      title: "Amenities",
      filters: [
        { label: "Free Wi-Fi", count: 128 },
        { label: "Free Wi-Fi", count: 128 },
        { label: "Air conditioning", count: 132 },
        { label: "Air conditioning", count: 132 },
        { label: "Swimming pool", count: 57 },
        { label: "Free parking", count: 68 },
        { label: "Free parking", count: 68 },
      ],
    },
    {
      id: 4,
      title: "Guest ratings",
      filters: [
        { label: "Excellent", count: 50 },
        { label: "Excellent", count: 50 },
        { label: "Very good", count: 89 },
        { label: "Good", count: 120 },
        { label: "Good", count: 120 },
        { label: "Fair", count: 28 },
        { label: "Fair", count: 28 },
      ],
    },
    {
      id: 5,
      title: "Price range",
      filters: [
        { label: "$50 - $100", count: 56 },
        { label: "$50 - $100", count: 56 },
        { label: "$100 - $200", count: 122 },
        { label: "$100 - $200", count: 122 },
        { label: "$200 - $300", count: 67 },
        { label: "$300+", count: 33 },
        { label: "$300+", count: 33 },
      ],
    },
    {
      id: 6,
      title: "Location",
      filters: [
        { label: "Downtown", count: 90 },
        { label: "Downtown", count: 90 },
        { label: "Near airport", count: 65 },
        { label: "Near beach", count: 53 },
        { label: "Near beach", count: 53 },
        { label: "City center", count: 120 },
      ],
    },
    {
      id: 7,
      title: "Property size",
      filters: [
        { label: "Small", count: 45 },
        { label: "Small", count: 45 },
        { label: "Medium", count: 132 },
        { label: "Large", count: 78 },
        { label: "Large", count: 78 },
      ],
    },
    {
      id: 8,
      title: "Booking type",
      filters: [
        { label: "Instant booking", count: 89 },
        { label: "Instant booking", count: 89 },
        { label: "Instant booking", count: 89 },
        { label: "Instant booking", count: 89 },
        { label: "Booking request", count: 57 },
      ],
    },
    {
      id: 9,
      title: "Check-in time",
      filters: [
        { label: "Before 12:00 PM", count: 65 },
        { label: "Before 12:00 PM", count: 65 },
        { label: "12:00 PM - 2:00 PM", count: 98 },
        { label: "12:00 PM - 2:00 PM", count: 98 },
        { label: "After 2:00 PM", count: 30 },
        { label: "After 2:00 PM", count: 30 },
      ],
    },
    {
      id: 10,
      title: "Facilities",
      filters: [
        { label: "Gym", count: 45 },
        { label: "Gym", count: 45 },
        { label: "Spa", count: 22 },
        { label: "Spa", count: 22 },
        { label: "Bar", count: 85 },
        { label: "Restaurant", count: 111 },
        { label: "Restaurant", count: 111 },
      ],
    },
    {
      id: 11,
      title: "Facilities",
      filters: [
        { label: "Gym", count: 45 },
        { label: "Gym", count: 45 },
        { label: "Spa", count: 22 },
        { label: "Spa", count: 22 },
        { label: "Bar", count: 85 },
        { label: "Restaurant", count: 111 },
        { label: "Restaurant", count: 111 },
      ],
    },
    {
      id: 12,
      title: "Facilities",
      filters: [
        { label: "Gym", count: 45 },
        { label: "Gym", count: 45 },
        { label: "Spa", count: 22 },
        { label: "Spa", count: 22 },
        { label: "Bar", count: 85 },
        { label: "Restaurant", count: 111 },
        { label: "Restaurant", count: 111 },
      ],
    },
    {
      id: 13,
      title: "Facilities",
      filters: [
        { label: "Gym", count: 45 },
        { label: "Gym", count: 45 },
        { label: "Spa", count: 22 },
        { label: "Spa", count: 22 },
        { label: "Bar", count: 85 },
        { label: "Restaurant", count: 111 },
        { label: "Restaurant", count: 111 },
      ],
    },
   
   
  ];

  return (
    <div className="border rounded mb-4">
      <h5 className="text-start ps-2">Filter by:</h5>
      <hr />
      {filters.map((filterCategory) => (
        <div key={filterCategory.id}>
          <div className="mt-3">
            <div className="p-3">
              <h6 className="text-start">{filterCategory.title}</h6>
              {filterCategory.filters.map((filter, index) => (
                <div key={index} className="text-start d-flex align-items-center justify-content-between">
                  <Box>
                    <input type="checkbox" />
                    <label className="mx-1">{filter.label}</label>
                  </Box>
                  <span>{filter.count}</span>
                </div>
              ))}
            </div>
            {filterCategory.filters.length > 4 && (
              <span>
                show all {filterCategory.filters.length} <KeyboardArrowDownIcon />
              </span>
            )}
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterList;
