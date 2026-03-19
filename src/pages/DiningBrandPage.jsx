import { useParams } from "react-router-dom";
import DiningEntryAnimation from "../components/DiningEntryAnimation";
import DiningHeader from "../components/DiningHeader";
import DiningContent from "../components/DiningContent";
import DiningGallery from "../components/DiningGallery";
import { dining } from "../data/mock";
import "../styles/diningBrandPage.css";

export default function DiningBrandPage() {

  const { slug } = useParams();
  const brand = Object.values(dining).find(
    (item) => item.slug === slug
  );

  if (!brand) return <div>Brand not found</div>;

  return (
    <div>

      <DiningEntryAnimation logo={brand.logo} />

      <DiningHeader
        video={brand.video}
        logo={brand.logo}
      />

      <DiningContent
        description={brand.description}
        features={brand.features}
        floor={brand.floor}
      />

      <DiningGallery images={brand.gallery} />

    </div>
  );
}