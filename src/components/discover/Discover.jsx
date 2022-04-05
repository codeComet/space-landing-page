import React from "react";
import "./style.css";
import { Typography, Box } from "@mui/material";
import DiscoverCard from "./DiscoverCard";
import rocket1 from "../../assets/img/rocket1.png";
import rocket2 from "../../assets/img/rocket2.png";
import rocket3 from "../../assets/img/rocket3.png";

const Discover = () => {
  return (
    <div className="discover-parent">
      <Typography variant="h2">Discover Universe</Typography>
      <Box
        sx={{
          width: "70%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="card-container"
      >
        <DiscoverCard
          title="Mission Bongo"
          img={rocket1}
          description="At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions."
        />
        <DiscoverCard
          title="Mission BD"
          img={rocket2}
          description="At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions."
        />
        <DiscoverCard
          title="Mission 11"
          img={rocket3}
          description="At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions."
        />
      </Box>
    </div>
  );
};

export default Discover;
