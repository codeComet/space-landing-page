import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Discover from "./components/discover/Discover";
import Filter from "./components/filter/Filter";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("https://api.spacexdata.com/v3/launches");
    setData(response.data);
    setLoading(false);
    // console.log(response.data);
  };

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Discover />
      <Filter data={data} loading={loading} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
