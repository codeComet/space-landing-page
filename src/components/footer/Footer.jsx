import React from "react";
import { Typography, Box } from "@mui/material";
import logo from "../../assets/img/logo.png";
import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import linkedin from "../../assets/img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer-parent">
      <Box
        className="footer-container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "75%",
          margin: "auto",
          padding: "20px 10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ width: "50%" }} />
          <Typography
            variant="h5"
            style={{
              color: "#fff",
              marginLeft: "8px",
              fontSize: "14px",
              fontFamily: "Russo One",
            }}
          >
            SPACE
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            style={{ color: "#6E7C9D", fontSize: "14px", fontFamily: "Inter" }}
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
            <img src={facebook} alt="facebook" style={{ margin: "0px 50px" }} />
            <img src={linkedin} alt="linkedin" />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
