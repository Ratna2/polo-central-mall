import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { brandMedia } from "../data/mock";
import BrandGallery from "../components/BrandGallery";
import BrandIntroAnimation from "../components/BrandIntroAnimation";
import "../styles/brandPage.css";

const BrandPage = () => {

  const { brand } = useParams();

  const brandKey = brand?.toLowerCase().replace(/\s+/g, "");

  const data = brandMedia[brandKey];

  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 1600);

    return () => {
      document.body.style.overflow = "auto";

      // pause video when leaving page
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  if (!data) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Brand Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <BrandIntroAnimation logo={data.logo} />

      <div className="brand-page">

        {/* HEADER WITH VIDEO BACKGROUND */}
        <section className="brand-header">

          {/* Background Video */}
          {data.video && (
            <video
              ref={videoRef}
              className="brand-header-video"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            >
              <source src={data.video} type="video/mp4" />
            </video>
          )}

          {/* Overlay for readability */}
          <div className="brand-header-overlay"></div>

          {/* Logo */}
          <img
            src={data.logo}
            alt={data.name}
            className="brand-header-logo"
          />

        </section>

        {/* BLACK MEDIA SECTION */}
        <section className="brand-media">
          <BrandGallery media={data.media} />
        </section>

      </div>
    </>
  );
};

export default BrandPage;