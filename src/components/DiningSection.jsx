import { UtensilsCrossed, BookOpen, Coffee, Gem } from "lucide-react";
import { dining } from "../data/mock";
import { Link } from "react-router-dom";   // NEW
import "../styles/dining.css";

const DiningSection = () => {
  return (
    <section id="dining" className="dining-section">

      <div className="dining-container">

        {/* Header */}
        <div className="dining-section-header">
          <div className="dining-header-inner">
            <UtensilsCrossed size={48} />
            <h2>Curated Experiences</h2>
            <p>Explore lifestyle, reading, coffee and jewellery experiences</p>
          </div>
        </div>


        {/* Crossword */}
        <Link to="/dining/crossword" className="dining-link">
          <div className="dining-card left-overlay">

            <img
              src={dining.crossword.image}
              alt="Crossword"
            />

            <div className="dining-overlay left">
              <div className="overlay-content">

                <BookOpen size={48} className="icon" />

                <h3>{dining.crossword.title}</h3>

                <p>{dining.crossword.description}</p>

                <div className="feature-list">
                  {dining.crossword.features.map((feature, i) => (
                    <div key={i} className="feature-row">
                      <span className="dot"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </Link>


        {/* Yellow Cab Cafe */}
        <Link to="/dining/yellowcab" className="dining-link">
          <div className="dining-card right-overlay">

            <img
              src={dining.yellowCab.image}
              alt="Yellow Cab Cafe"
            />

            <div className="dining-overlay right">
              <div className="overlay-content right-align">

                <Coffee size={48} className="icon" />

                <h3>{dining.yellowCab.title}</h3>

                <p>{dining.yellowCab.description}</p>

                <div className="feature-list">
                  {dining.yellowCab.features.map((feature, i) => (
                    <div key={i} className="feature-row">
                      <span>{feature}</span>
                      <span className="dot"></span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </Link>


        {/* Radha Krishna Jewellery */}
        <Link to="/dining/radhakrishna" className="dining-link">
          <div className="dining-card left-overlay">

            <img
              src={dining.radhakrishna.image}
              alt="Radha Krishna Jewellery"
            />

            <div className="dining-overlay left">
              <div className="overlay-content">

                <Gem size={48} className="icon" />

                <h3>{dining.radhakrishna.title}</h3>

                <p>{dining.radhakrishna.description}</p>

                <div className="feature-list">
                  {dining.radhakrishna.features.map((feature, i) => (
                    <div key={i} className="feature-row">
                      <span className="dot"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </Link>


      </div>

    </section>
  );
};

export default DiningSection;