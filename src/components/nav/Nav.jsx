import React from "react";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import Logo from "../../assets/img/logo.png";
import menu from "../../assets/img/menu.png";
import "./styles.css";

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: "#1e1b3a",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0px",
          width: "70%",
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
            display: { md: "flex", xs: "none" },
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
      {/* drawer for mobile devices */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },

          position: "absolute",
          top: "20px",
          right: "20px",
        }}
      >
        <TemporaryDrawer open={open} setOpen={setOpen} />
      </Box>
    </div>
  );
}

function TemporaryDrawer({ setOpen }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="About us" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Story" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Contact us" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Box
          sx={{
            display: { xs: "flex", md: "none", lg: "none" },
            justifyContent: "flex-end",
          }}
        >
          <img
            src={menu}
            alt="menu"
            onClick={toggleDrawer("right", true)}
            style={{ width: "40%" }}
          />
        </Box>

        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
