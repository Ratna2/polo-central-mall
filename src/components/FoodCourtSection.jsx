import { Coffee, MapPin, Pizza, Sandwich, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { foodcourt } from "../data/mock"; // ✅ USING MOCK DATA
import "../styles/foodcourt.css";

const FoodCourtSection = () => {

  // ✅ CONVERT OBJECT → ARRAY
  const foodBrands = Object.values(foodcourt);

  const handleClick = (brand) => {
    console.log("Clicked:", brand);
  };

  return (
    <section id="foodcourt" className="foodcourt-section">

      <div className="foodcourt-container">

        {/* ================= HEADER ================= */}
        <div className="foodcourt-header">

          <Coffee size={48} />
          <h2>Food Court</h2>
          <p>Enjoy your favorite meals from popular global food brands</p>

          <div className="location">
            <MapPin size={20} />
            <span>Top Floor Experience</span>
          </div>

        </div>

        {/* ================= CARDS ================= */}
        <div className="food-brands-grid">

          {foodBrands.map((brand, index) => {

            // ✅ ICON MAPPING (since mock doesn't store icon component)
            let Icon = Pizza;

            if (brand.slug === "subway") Icon = Sandwich;
            if (brand.slug === "kfc") Icon = UtensilsCrossed;
            if (brand.slug === "dominos") Icon = Pizza;
            if (brand.slug === "pizzahut") Icon = Pizza;

            return (
              <Link
                to={`/foodcourt/${brand.slug}`}
                key={index}
                className="food-brand-card"
                onClick={() => handleClick(brand.title)}
              >

                {/* IMAGE */}
                <div className="brand-image">
                  <img
                    src={brand.image || brand.logo} // ✅ fallback
                    alt={brand.title}
                    loading="lazy"
                  />
                  <div className="brand-overlay"></div>
                </div>

                {/* CONTENT */}
                <div className="brand-content">
                  <Icon size={28} className="brand-icon" />

                  <h3>{brand.title}</h3>

                  <p>{brand.description}</p>
                </div>

              </Link>
            );

          })}

        </div>

      </div>

    </section>
  );
};

export default FoodCourtSection;