import { useEffect } from "react";

import HeroSection from "../components/HeroSection";
import ShoppingSection from "../components/ShoppingSection";
import FloorInfoSection from "../components/FloorInfoSection";
import CinemaSection from "../components/CinemaSection";
import EntertainmentZone from "../components/EntertainmentZone";
import DiningSection from "../components/DiningSection";
import FashionZone from "../components/FashionZone";
import FoodCourtSection from "../components/FoodCourtSection";

import "../styles/home.css";

const Home = () => {
  useEffect(() => {
    // fallback smooth scrolling (Lenis will override if enabled)
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="home-page">
      <HeroSection />

      <section id="shopping">
        <ShoppingSection />
      </section>

      <section id="floor-info">
        <FloorInfoSection />
      </section>

      <section id="cinema">
        <CinemaSection />
      </section>

      <section id="entertainment">
        <EntertainmentZone />
      </section>

      <section id="dining">
        <DiningSection />
      </section>

      <section id="fashion">
        <FashionZone />
      </section>

      <section id="foodcourt">
        <FoodCourtSection />
      </section>
    </main>
  );
};

export default Home;