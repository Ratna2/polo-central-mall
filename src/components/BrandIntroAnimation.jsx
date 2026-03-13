import { useEffect, useState } from "react";
import "../styles/brandIntro.css";

const BrandIntroAnimation = ({ logo }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1600); // animation duration

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="brand-intro">
      <img src={logo} alt="brand logo" />
    </div>
  );
};

export default BrandIntroAnimation;