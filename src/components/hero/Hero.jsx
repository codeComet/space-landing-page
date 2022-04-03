import React from "react";
import { Box, Typography } from "@mui/material";
import blueplanet from "../../assets/img/blueplanet.png";
import astronaut from "../../assets/img/astronaut.png";
import box from "../../assets/img/box.png";
import ellipse from "../../assets/img/ellipse.png";
import planetbg from "../../assets/img/bgplanet.png";
import donut from "../../assets/img/donut.png";
import planet from "../../assets/img/planet.png";
import vector from "../../assets/img/vector.png";
import comet from "../../assets/img/comet.png";
import "./styles.css";

const Hero = () => {
  return (
    <div className="hero-parent">
      {/* Absolute positioned images */}
      <img src={box} alt="box.png" className="boxpng" />
      <img src={ellipse} alt="ellipse.png" className="ellipsepng" />
      <img src={planetbg} alt="planet.png" className="planetbg" />
      <img src={donut} alt="donut.png" className="donutpng" />
      <img src={planet} alt="planet.png" className="planetpng" />
      <img src={vector} alt="vector.png" className="vectorpng" />
      <img src={comet} alt="comet.png" className="cometpng" />
      {/* Absolute positioned images */}
      <div className="hero-container">
        <div className="hero-text" style={{ paddingTop: "70px" }}>
          <Box className="welcome-text">
            <img
              src={blueplanet}
              alt="img"
              style={{ width: "40px", marginRight: "10px" }}
            />
            <Typography variant="body1">Welcome to Stella</Typography>
          </Box>
          <Box className="welcome-header">
            <Typography variant="h1">SPACE FOR EVERYONE</Typography>
            <Typography variant="body1">
              At PIAP Space, we believe that we can make Space and Earth
              cleaner, engineering, and delivering top-quality robotics
              solutions.
            </Typography>
          </Box>
          <Box className="welcome-btn">
            <button>GET STARTED</button>
          </Box>
        </div>
        <div className="hero-svg">
          <img src={astronaut} alt="astronaut" className="astronaut" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
