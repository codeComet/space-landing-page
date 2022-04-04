import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Discover from "./components/discover/Discover";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Discover />
      <Filter />
    </div>
  );
}

export default App;
