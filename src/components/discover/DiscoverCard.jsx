import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";

export default function DiscoverCard({ title, img, description }) {
  return (
    <Card sx={{ maxWidth: 300 }} className="card-parent">
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
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
          <Typography
            variant="body2"
            color="#DADADA"
            style={{ textAlign: "center" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
