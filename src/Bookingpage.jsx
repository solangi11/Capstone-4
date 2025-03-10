import React from "react";
import { Button, Box } from "@mui/material";
import CardList from "./Cards/Cards";
import FilterList from "./LeftSection/LeftSection"

const Bookingpage = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-3">
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95197.51220285961!2d68.68132557634884!3d27.5377119244416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935da5e71caa8b9%3A0x3a9ffdf3598dfbfd!2sKhairpur%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1738157055117!5m2!1sen!2s&zoomControl=0&scrollwheel=0&disableDefaultUI=true"
              width="100%"
              height="250"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          <FilterList />
        </div>
        <div className="col-lg-9">
          <div >
            <Box className="d-flex flex-column text-start my-2">

              <Box className="d-flex align-items-center justify-content-between">     <h5>Islamabad: 1,135 properties found</h5>

                <Box className="border rounded-5 p-2 bg-light" style={{ padding: 0, margin: 0, display: 'flex', gap: 0 }}>
                  <Button className="text-black rounded-5 " style={{ margin: 0, padding: 0, fontSize: '12px', height: 'auto', border: 'none' }}>
                    list
                  </Button>
                  <Button className="text-black rounded-5" style={{ margin: 0, padding: 0, fontSize: '12px', height: 'auto', border: 'none' }}>
                    grid
                  </Button>
                </Box>

              </Box>
              <select className="form-select w-25">
                <option>Sort by: Our top picks</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </Box>
          </div>
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Bookingpage;
