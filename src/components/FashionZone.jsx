import { Sparkles } from "lucide-react";
import { fashionBrands } from "../data/mock";
import { Link } from "react-router-dom";
import "../styles/fashion.css";

const FashionZone = () => {
  return (
    <section id="fashion" className="fashion-section">

      <div className="fashion-container">

        {/* Header */}
        <div className="fashion-header">
          <Sparkles size={48} />
          <h2>Fashion District</h2>
          <p>Immerse yourself in the world of luxury fashion</p>
        </div>

        {/* Featured Brands */}
        <div className="featured-grid">
          {fashionBrands.slice(0, 2).map((brand, index) => (
            
            <Link 
              to={`/brand/${brand.slug}`} 
              className="brand-link"
              key={index}
            >
              <div className="featured-card">

                <img src={brand.image} alt={brand.name} />

                <div className="featured-overlay"></div>

                <div className="featured-content">
                  <h3>{brand.name}</h3>
                  <p className="category">{brand.category}</p>
                  <p className="description">{brand.description}</p>
                </div>

              </div>
            </Link>

          ))}
        </div>

        {/* Small Brand Grid */}
        <div className="small-grid">
          {fashionBrands.slice(2).map((brand, index) => (

            <Link 
              to={`/brand/${brand.slug}`} 
              className="brand-link"
              key={index}
            >
              <div className="small-card">

                <img src={brand.image} alt={brand.name} />

                <div className="small-overlay"></div>

                <div className="small-content">
                  <h3>{brand.name}</h3>
                  <p>{brand.category}</p>
                </div>

              </div>
            </Link>

          ))}
        </div>

      </div>

    </section>
  );
};

export default FashionZone;