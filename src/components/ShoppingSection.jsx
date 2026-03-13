import { ShoppingBag, ArrowRight } from "lucide-react";
import { fashionBrands } from "../data/mock";
import { Link, useNavigate } from "react-router-dom";
import "../styles/shopping.css";

const ShoppingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="shopping" className="shopping-section">

      <div className="shopping-container">

        {/* Header */}
        <div className="shopping-header">
          <ShoppingBag size={48} />
          <h2>Luxury Shopping</h2>
          <p>
            Discover world-class brands and exclusive collections
          </p>
        </div>

        {/* Brand Grid */}
        <div className="brand-grid">
          {fashionBrands.map((brand, index) => (
            <div
              className="brand-card"
              key={index}
              onClick={() => navigate(`/brand/${brand.slug}`)}
              style={{ cursor: "pointer" }}
            >

              <div className="brand-image">
                <img src={brand.image} alt={brand.name} />
                <div className="brand-overlay"></div>
              </div>

              <div className="brand-content">
                <h3>{brand.name}</h3>
                <span className="category">{brand.category}</span>
                <p>{brand.description}</p>

                {/* Explore Button */}
                <Link
                  to={`/brand/${brand.slug}`}
                  className="explore-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="explore">
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default ShoppingSection;