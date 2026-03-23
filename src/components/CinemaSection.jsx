import { Film, Volume2, Armchair, Star, Clock } from "lucide-react";
import { entertainmentFeatured } from "../data/mock"; // ✅ FIXED
import "../styles/cinema.css";

const CinemaSection = () => {

  const cinema = entertainmentFeatured.cinema; // ✅ FIXED

  const icons = [Film, Volume2, Armchair, Star];

  const comingSoonFeatures = [
    "INOX Multiplex Under Development",
    "Premium Cinema Experience Coming Soon",
    "Construction in Progress",
    "Grand Opening Announcement Soon"
  ];

  return (
    <section id="cinema" className="cinema-section">

      {/* Background */}
      <div className="cinema-bg">

        <div className="zone-image">
          <img src={cinema?.image} alt="INOX Cinema" />
          <div className="zone-overlay"></div>
        </div>

      </div>

      <div className="cinema-container">

        {/* LEFT CONTENT */}
        <div className="cinema-content">

          <Film size={56} className="cinema-icon" />

          <h2>{cinema?.title}</h2>

          <p className="cinema-description">
            {cinema?.description}
          </p>

          {/* COMING SOON FEATURES */}
          <div className="cinema-features">
            {comingSoonFeatures.map((feature, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div className="feature-card" key={index}>
                  <Icon size={20} />
                  <span>{feature}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="cinema-image">

          <div className="zone-image">
            <img
              src={cinema?.image}
              alt="INOX Experience"
            />

            <div className="zone-overlay"></div>

            {/* OPENING SOON CINEMA BAR */}
            {cinema?.status === "coming-soon" && (
              <div className="coming-soon-bar">
                <Clock size={18} className="soon-icon" />
                <span className="soon-text">
                  Opening Soon<span className="loading-dots"></span>
                </span>
              </div>
            )}

          </div>

          {/* IMAGE TEXT */}
          <div className="cinema-image-text">
            <h3>INOX</h3>
            <p>Coming Soon to Polo Central Mall</p>
          </div>

          {/* BADGE */}
          <div className="cinema-badge">
            Coming Soon
          </div>

        </div>

      </div>
    </section>
  );
};

export default CinemaSection;