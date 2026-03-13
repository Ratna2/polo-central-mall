import { Gamepad2, Baby, Train, Sparkles } from "lucide-react";
import { entertainment } from "../data/mock";
import "../styles/entertainment.css";

const EntertainmentZone = () => {

  const zones = [
    {
      ...entertainment.timeZone,
      icon: Gamepad2,
    },
    {
      ...entertainment.kids,
      icon: Baby,
    },
    {
      ...entertainment.cinema,
      icon: Train,
    },
  ];

  return (
    <section id="entertainment" className="entertainment-section">

      <div className="entertainment-container">

        {/* Header */}
        <div className="entertainment-header">
          <Sparkles size={48} />
          <h2>Entertainment Zone</h2>
          <p>
            Endless fun and excitement for the entire family
          </p>
        </div>

        {/* Cards */}
        <div className="entertainment-grid">

          {zones.map((zone, index) => {

            const Icon = zone.icon;

            return (
              <div className="entertainment-card" key={index}>

                <div className="zone-image">
                  <img src={zone.image} alt={zone.title} />
                  <div className="zone-overlay"></div>

                  {/* Overlay Content */}
                  <div className="zone-content overlay-content">

                    <Icon size={38} className="zone-icon" />

                    <h3>{zone.title}</h3>

                    <p>{zone.description}</p>

                    <div className="zone-features">
                      {zone.features?.map((feature, idx) => (
                        <div className="feature-row" key={idx}>
                          <span className="dot"></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default EntertainmentZone;