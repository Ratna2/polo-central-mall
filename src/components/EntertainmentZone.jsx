import { Gamepad2, Baby, Ghost, Sparkles } from "lucide-react";
import { entertainment } from "../data/mock";
import { Link } from "react-router-dom"; // ✅ ADDED
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
      ...entertainment.haunted,
      icon: Ghost,
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
              <Link
                to={`/entertainment/${zone.slug}`} // ✅ ADDED
                className="entertainment-card-premium"
                key={index}
              >

                <div className="entertainment-media">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    loading="lazy"
                  />

                  <div className="entertainment-overlay"></div>

                  {/* Overlay Content */}
                  <div className="entertainment-content">

                    <Icon size={38} className="entertainment-icon" />

                    <h3>{zone.title}</h3>

                    <p>{zone.description}</p>

                    <div className="entertainment-features">
                      {zone.features?.map((feature, idx) => (
                        <div className="entertainment-feature" key={idx}>
                          <span className="ent-dot"></span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default EntertainmentZone;