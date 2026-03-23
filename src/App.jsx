import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import BrandPage from "./pages/BrandPage";
import DiningBrandPage from "./pages/DiningBrandPage";
import FoodCourtBrandPage from "./pages/FoodCourtBrandPage";
import AllBrandsPage from "./pages/AllBrandsPage"; 
import EntertainmentBrandPage from "./pages/EntertainmentBrandPage";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>

      {/* Scroll to top on every route change */}
      <ScrollToTop />

      <div className="app">

        {/* Global Navigation */}
        <Navigation />

        {/* Page Routes */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Brand Pages */}
          <Route path="/brand/:brand" element={<BrandPage />} />

          {/* Entertainment Zone */}
          <Route path="/entertainment/:slug" element={<EntertainmentBrandPage />} />

          {/* Dining Pages */}
          <Route path="/dining/:slug" element={<DiningBrandPage />} />

          {/* ✅ FoodCourt Pages */}
          <Route path="/foodcourt/:slug" element={<FoodCourtBrandPage />} />

          {/* ✅ ALL BRANDS PAGE (NEW) */}
          <Route path="/all-brands" element={<AllBrandsPage />} />

        </Routes>

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;