import { Check, MapPin, Building2, Sparkles } from "lucide-react";
import { aboutContent, mallInfo, heroImages } from "../data/mock";
import "../styles/about.css";

const About = () => {

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/place/Polo+Central+Mall+Agartala",
      "_blank"
    );
  };

  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <img
          src={heroImages[0].url}
          alt="Polo Central Mall"
          className="about-hero-img"
        />

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1>{mallInfo.name}</h1>
          <p>{mallInfo.tagline}</p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section story">
        <div className="about-grid">

          <div className="story-text">
            <h2>Our Story</h2>

            <p>{aboutContent.story}</p>

            <div className="info-row">
              <MapPin size={20} />
              <div>
                <h4>Location</h4>
                <span>{mallInfo.location}</span>
              </div>
            </div>

            <div className="info-row">
              <Building2 size={20} />
              <div>
                <h4>Part of</h4>
                <span>{mallInfo.parent}</span>
              </div>
            </div>
          </div>

          <div className="story-image">
            <img
              src={heroImages[2].url}
              alt="Mall Interior"
            />
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="about-section vision">
        <div className="vision-box">
          <Sparkles size={40} />
          <h2>Our Vision</h2>
          <p>{aboutContent.vision}</p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="about-section highlights">
        <h2>What Makes Us Special</h2>

        <div className="highlight-grid">
          {aboutContent.highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <Check size={20} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="foodcourt-cta">
        <button>Explore All Brands</button>
      </div>

    </main>
  );
};

export default About;