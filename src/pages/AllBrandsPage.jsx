import { storeBrands } from "../data/mock";
import "../styles/allBrands.css";

const AllBrandsPage = () => {
  return (
    <div className="about-brands-page">

      {/* HEADER */}
      <div className="about-brands-header">
        <h1 className="about-brands-title">Explore All Brands</h1>
        <p className="about-brands-subtitle">
          Discover global brands available inside Polo Central Mall
        </p>
      </div>

      {/* GRID */}
      <div className="about-brands-grid">
        {storeBrands.map((brand, index) => (
          <div className="about-brands-card" key={index}>

            <div className="about-brands-img">
              <img src={brand.logo} alt={brand.name} />
            </div>

            <p className="about-brands-name">{brand.name}</p>

          </div>
        ))}
      </div>

    </div>
  );
};

export default AllBrandsPage;