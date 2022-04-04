import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Discover from "./components/discover/Discover";
import Filter from "./components/filter/Filter";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://api.spacexdata.com/v3/launches");
    setData(response.data);
    console.log(response.data);
  };

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Discover />
      <Filter data={data} />
    </div>
  );
}

export default App;
