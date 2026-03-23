import { useParams } from "react-router-dom";
import { brandMedia } from "../data/mock";

import DiningEntryAnimation from "../components/DiningEntryAnimation";
import DiningHeader from "../components/DiningHeader";
import DiningContent from "../components/DiningContent";
import DiningGallery from "../components/DiningGallery";

import "../styles/diningBrandPage.css"; // ✅ USE SAME CSS AS DINING

const BrandPage = () => {

  const { brand } = useParams();

  const brandKey = brand?.toLowerCase().replace(/\s+/g, "");

  const data = brandMedia[brandKey];

  if (!data) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Brand Not Found</h2>
      </div>
    );
  }

  return (
    <div className="dining-brand-page">

      {/* ================= ENTRY ANIMATION ================= */}
      <DiningEntryAnimation logo={data.logo} />

      {/* ================= HEADER ================= */}
      <DiningHeader
        video={data.video}
        logo={data.logo}
      />

      {/* ================= CONTENT ================= */}
      <DiningContent
        description={data.description}
        features={data.features || []}   // ✅ FIXED
        floor={data.floor || ""}         // ✅ FIXED
      />

      {/* ================= GALLERY ================= */}
      <DiningGallery images={data.media || []} />  {/* ✅ SAFETY */}

    </div>
  );
};

export default BrandPage;