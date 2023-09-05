import "./App.css";
import Home from "./components/home/Home.js";
import { Routes, Route } from "react-router-dom";
import Explore from "./components/explore/Explore";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Navs from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
function App() {
  return (
    <div className="App">
      <Navs />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/fAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
