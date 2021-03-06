import React from "react";
import { Typography, Box } from "@mui/material";
import "./style.css";

const Newsletter = () => {
  return (
    <div className="newsletter-parent">
      <Typography variant="h2">Newsletter</Typography>
      <Box
        sx={{
          display: { lg: "flex", md: "flex", sm: "block", xs: "block" },
          textAlign: { sm: "center" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Email Address"
          className="newsletter-field"
        />
        <button className="newsletter-btn">Subscribe</button>
      </Box>
    </div>
  );
};

export default Newsletter;
