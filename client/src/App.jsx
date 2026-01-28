import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import Hikes from "./pages/Hikes";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/hikes" element={<Hikes />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
