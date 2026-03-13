import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";   // added footer import

import Home from "./pages/Home";
import About from "./pages/About";
import BrandPage from "./pages/BrandPage";

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
        </Routes>

        {/* Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;