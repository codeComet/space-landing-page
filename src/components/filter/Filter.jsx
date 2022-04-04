import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  TextField,
} from "@mui/material";
import "./style.css";

const SearchButton = () => {
  return (
    <div className="searchBtn">
      <button>Search</button>
    </div>
  );
};

const Filter = () => {
  const [upcoming, setUpcoming] = useState(true);
  const [year, setYear] = useState("2001 - 2005");
  const [searchValue, setSearchValue] = useState("");

  const handleUpcomingValueChange = (event) => {
    setUpcoming(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  return (
    <div className="filter-parent">
      {/* Filter bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="filter-container"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            className="filter-dropdown"
          >
            <Typography variant="body1">Is upcoming?</Typography>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={upcoming}
                onChange={handleUpcomingValueChange}
                style={{ color: "#fff" }}
                className="filter-select"
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", paddingLeft: "40px" }}
            className="filter-dropdown"
          >
            <Typography variant="body1">Launch Year?</Typography>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120, color: "#fff" }}
            >
              <Select
                value={year}
                onChange={handleYearChange}
                style={{ color: "#fff" }}
                className="filter-select"
              >
                <MenuItem value={"<1990"}>less than 1990</MenuItem>
                <MenuItem value={"1991 - 1995"}>1991 - 1995</MenuItem>
                <MenuItem value={"1996 - 2000"}>1996 - 2000</MenuItem>
                <MenuItem value={"2001 - 2005"}>2001 - 2005</MenuItem>
                <MenuItem value={"2006 - 2010"}>2006 - 2010</MenuItem>
                <MenuItem value={"2011 - 2015"}>2011 - 2015</MenuItem>
                <MenuItem value={"2016 - 2020"}>2016 - 2020</MenuItem>
                <MenuItem value={">2020"}>greater than 2020</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Search for rocket"
            className="filter-search"
          />
          <button className="filter-searchBtn">Search</button>
        </Box>
      </Box>
    </div>
  );
};

export default Filter;
