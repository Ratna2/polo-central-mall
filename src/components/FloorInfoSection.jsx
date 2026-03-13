import { Building, MapPin } from "lucide-react";
import { floorInfo } from "../data/mock";
import "../styles/floorInfo.css";

const FloorInfoSection = () => {
  return (
    <section id="floor-info" className="floor-section">

      <div className="floor-container">

        {/* Header */}
        <div className="floor-header">
          <Building size={48} />
          <h2>Explore Every Floor</h2>
          <p>Four floors of curated experiences</p>
        </div>

        {/* Timeline */}
        <div className="floor-timeline">

          <div className="timeline-line"></div>

          {floorInfo.map((floor, index) => (
            <div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >

              <div className="timeline-icon">
                <MapPin size={22} />
              </div>

              <div className="floor-card">
                <h3>{floor.floor}</h3>
                <h4>{floor.title}</h4>
                <p>{floor.description}</p>

                <div className="feature-tags">
                  {floor.features.map((feature, i) => (
                    <span key={i}>{feature}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default FloorInfoSection;