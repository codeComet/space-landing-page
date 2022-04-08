import React, { useState, useEffect } from "react";
import { Box, Typography, MenuItem, Select, FormControl } from "@mui/material";
import { CircularProgress } from "@mui/material";
import FilterCard from "./FilterCard";
import PaginationModule from "./Pagination";
import "./style.css";

const Filter = ({ data, loading }) => {
  const [upcoming, setUpcoming] = useState(false);
  const [year, setYear] = useState("2011-2015");
  const [apiData, setApiData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [backupData, setBackup] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(8);

  useEffect(() => {
    setApiData(data);
    setBackup(data);
    console.log(data);
  }, [data]);

  const handleUpcomingValueChange = (event) => {
    const backup = backupData.filter((item) => {
      return item?.upcoming === event.target.value;
    });
    setApiData(backup);
    setUpcoming(event.target.value);
  };

  const handleYearChange = (event) => {
    let value = event.target.value;
    if (value.length == 4) {
      if (value == "1990") {
        const backup = backupData.filter((item) => {
          return parseInt(item?.launch_year) < parseInt(value);
        });
        setApiData(backup);
      } else if (value == "2020") {
        const backup = backupData.filter((item) => {
          return parseInt(item?.launch_year) > parseInt(value);
        });
        setApiData(backup);
      }
    } else {
      const [first, last] = value.split("-");
      console.log(first, last);
      const backup = backupData.filter((item) => {
        return (
          parseInt(item?.launch_year) >= parseInt(first) &&
          parseInt(item?.launch_year) <= parseInt(last)
        );
      });
      console.log(backup);
      setApiData(backup);
    }

    setYear(event.target.value);
    console.log(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
    if (searchValue !== "") {
      const backup = backupData.filter((item) => {
        return (
          item?.rocket.rocket_name.toLowerCase() == searchValue.toLowerCase()
        );
      });
      setApiData(backup);
    }
  };

  // Pagination handler
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = apiData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (e, value) => {
    setCurrentPage(value);
    //console.log(value);
  };

  return (
    <div className="filter-parent">
      {/* Filter bar */}
      <Box
        sx={{
          display: { lg: "flex", md: "flex", sm: "block" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="filter-container"
      >
        <Box
          sx={{
            display: { lg: "flex", md: "flex", sm: "block" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between", sm: "space-between" },
            }}
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
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between", sm: "space-between" },
              paddingLeft: { lg: "40px", md: "40px", sm: "0px", xs: "0px" },
              marginBottom: { xs: "10px", sm: "10px" },
            }}
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
                <MenuItem value={"1990"}>less than 1990</MenuItem>
                <MenuItem value={"1991-1995"}>1991 - 1995</MenuItem>
                <MenuItem value={"1996-2000"}>1996 - 2000</MenuItem>
                <MenuItem value={"2001-2005"}>2001 - 2005</MenuItem>
                <MenuItem value={"2006-2010"}>2006 - 2010</MenuItem>
                <MenuItem value={"2011-2015"}>2011 - 2015</MenuItem>
                <MenuItem value={"2016-2020"}>2016 - 2020</MenuItem>
                <MenuItem value={"2020"}>greater than 2020</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSearchSubmit} className="filter-form">
            <input
              type="text"
              placeholder="Search for rocket"
              className="filter-search"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="filter-searchBtn" type="submit">
              Search
            </button>
          </form>
        </Box>
      </Box>
      {/* Filter Bar */}

      {/* data fetching */}
      <Box className="data-parent">
        <Box className="data-container">
          {loading ? (
            <Box
              sx={{ width: "100%", margin: "20px auto", textAlign: "center" }}
            >
              <CircularProgress />
            </Box>
          ) : currentCards.length !== 0 ? (
            currentCards.map((item, index) => (
              <div key={index}>
                <FilterCard
                  title={item?.mission_name}
                  rocket={item?.rocket?.rocket_name}
                  launch={item?.launch_year}
                  upcoming={item?.upcoming}
                />
              </div>
            ))
          ) : (
            <div style={{ width: "100%", textAlign: "center" }}>
              <p style={{ color: "#fff" }}>No data found</p>
            </div>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PaginationModule
            cardsPerPage={cardsPerPage}
            totalCards={apiData.length}
            paginate={paginate}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Filter;
