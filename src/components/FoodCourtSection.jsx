import { Coffee, MapPin, Pizza, Sandwich, UtensilsCrossed } from "lucide-react";
import "../styles/foodcourt.css";

import dominosImg from "../assets/images/foodcourt/dominos.webp";
import subwayImg from "../assets/images/foodcourt/subway.webp";
import kfcImg from "../assets/images/foodcourt/kfc.webp";
import pizzaHutImg from "../assets/images/foodcourt/pizzahut.webp";

const FoodCourtSection = () => {

  const foodBrands = [
    {
      id: 1,
      name: "Domino's",
      image: dominosImg,
      description: "Hot pizzas, cheesy bites and quick meals for everyone.",
      icon: Pizza
    },
    {
      id: 2,
      name: "Subway",
      image: subwayImg,
      description: "Freshly made sandwiches and healthy subs.",
      icon: Sandwich
    },
    {
      id: 3,
      name: "KFC",
      image: kfcImg,
      description: "World famous fried chicken and crispy combos.",
      icon: UtensilsCrossed
    },
    {
      id: 4,
      name: "Pizza Hut",
      image: pizzaHutImg,
      description: "Classic pizzas with rich toppings and cheesy crust.",
      icon: Pizza
    }
  ];

  const handleClick = (brand) => {
    console.log("Clicked:", brand);
  };

  return (
    <section id="foodcourt" className="foodcourt-section">

      <div className="foodcourt-container">

        {/* Header */}
        <div className="foodcourt-header">
          <Coffee size={48} />
          <h2>Food Court</h2>
          <p>Enjoy your favorite meals from popular global food brands</p>

          <div className="location">
            <MapPin size={20} />
            <span>Top Floor Experience</span>
          </div>
        </div>

        {/* Food Brand Cards */}
        <div className="food-brands-grid">

          {foodBrands.map((brand) => {

            const Icon = brand.icon;

            return (
              <div
                className="food-brand-card"
                key={brand.id}
                onClick={() => handleClick(brand.name)}
              >

                {/* IMAGE */}
                <div className="brand-image">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                  />
                  <div className="brand-overlay"></div>
                </div>

                {/* CONTENT (HOVER) */}
                <div className="brand-content">
                  <Icon size={28} className="brand-icon" />

                  <h3>{brand.name}</h3>

                  <p>{brand.description}</p>
                </div>

              </div>
            );

          })}

        </div>

        {/* CTA
        <div className="foodcourt-cta">
          <button>Explore All Brands</button>
        </div> */}

      </div>

    </section>
  );
};

export default FoodCourtSection;