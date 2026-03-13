import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { heroImages, mallInfo } from "../data/mock";
import "../styles/hero.css";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById("shopping");
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">

      {/* Background slideshow */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${currentImage === index ? "active" : ""}`}
        >
          <img src={img.url} alt={img.alt} />
          <div className="hero-overlay"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="hero-content">
        <h1>{mallInfo.name}</h1>

        <p className="hero-tagline">{mallInfo.tagline}</p>

        <p className="hero-location">
          A premium lifestyle destination in {mallInfo.location}
        </p>

        {/* Scroll button */}
        <button className="hero-scroll" onClick={scrollToNext}>
          <ChevronDown size={40} />
        </button>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={currentImage === index ? "dot active" : "dot"}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;