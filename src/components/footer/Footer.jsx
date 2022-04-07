import React from "react";
import { Typography, Box } from "@mui/material";
import logo from "../../assets/img/logo.png";
import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import linkedin from "../../assets/img/linkedin.png";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-parent">
      <Box
        className="footer-container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: { lg: "75%", md: "75%", sm: "90%", xs: "90%" },
          margin: "auto",
          padding: "20px 10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" className="logo-footer" />
          <Typography
            variant="h5"
            style={{
              color: "#fff",
              marginLeft: "8px",
              fontFamily: "Russo One",
            }}
          >
            SPACE
          </Typography>
        </Box>
        <Box sx={{ textAlign: { sm: "center", xs: "center" } }}>
          <Typography
            variant="body1"
            sx={{
              color: "#6E7C9D",
              fontSize: { lg: "14px", md: "14px", sm: "10px", xs: "10px" },
              fontFamily: "Inter",
            }}
          >
            Space 2020, All rights reserved.
          </Typography>
        </Box>
        <Box>
          <div
            className="socials"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" className="mid-icon" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
