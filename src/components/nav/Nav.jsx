import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/img/logo.png";
import "./styles.css";

export default function Nav() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0px",
        width: "75%",
        margin: "auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <img src={Logo} alt="logo" style={{ marginRight: "10px" }} />
        <Typography className="logoText">Space</Typography>
      </Box>

      <Box sx={{ flexGrow: 2 }}></Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <Typography className="navText" style={{ color: "#8C21ED" }}>
          Home
        </Typography>
        <Typography className="navText">About us</Typography>
        <Typography className="navText">Story</Typography>
        <Typography className="navText">Blog</Typography>
        <button className="navBtn">Contact us</button>
      </Box>
    </Box>
  );
}
