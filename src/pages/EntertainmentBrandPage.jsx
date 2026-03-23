import { useParams } from "react-router-dom";
import { entertainment } from "../data/mock";

import DiningEntryAnimation from "../components/DiningEntryAnimation";
import DiningHeader from "../components/DiningHeader";
import DiningContent from "../components/DiningContent";
import DiningGallery from "../components/DiningGallery";

import "../styles/diningBrandPage.css"; // reuse same CSS

export default function EntertainmentBrandPage() {

  const { slug } = useParams();

  const brand = Object.values(entertainment).find(
    (item) => item.slug === slug
  );

  if (!brand) return <div>Zone not found</div>;

  return (
    <div className="dining-brand-page">

      {/* ENTRY ANIMATION */}
      <DiningEntryAnimation logo={brand.logo} />

      {/* HEADER */}
      <DiningHeader
        video={brand.video}
        logo={brand.logo}
      />

      {/* CONTENT */}
      <DiningContent
        description={brand.description}
        features={brand.features}
        floor={brand.floor || "Entertainment Zone"}
      />

      {/* GALLERY */}
      <DiningGallery images={brand.gallery || []} />

    </div>
  );
}