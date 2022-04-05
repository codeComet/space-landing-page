import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import rockets from "../../assets/img/rocket3.png";
import ufo from "../../assets/img/ufo.png";
import solar from "../../assets/img/solar.png";
import "./style.css";

export default function FilterCard({ title, rocket, launch, upcoming }) {
  const [img, setImg] = useState("");
  const images = [rockets, ufo, solar];

  const randomImage = () => {
    const random = Math.floor(Math.random() * images.length);
    setImg(images[random]);
  };
  return (
    <Card sx={{ maxWidth: 190 }} className="card-parent">
      <CardActionArea>
        <CardMedia
          component="img"
          image={img === "" ? randomImage() : img}
          alt="card"
          className="card-media"
        />
        <CardContent className="card-content">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card-title"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="#DADADA" className="card-body">
            Rocket Name: {rocket}
          </Typography>
          <Typography variant="body2" color="#DADADA" className="card-body">
            Launch Year: {launch}
          </Typography>
          <Typography variant="body2" color="#DADADA" className="card-body">
            Upcoming: {upcoming.toString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
