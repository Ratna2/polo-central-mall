export default function DiningGallery({ images }) {

  return (
    <section className="dining-gallery">

      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          loading="lazy"
        />
      ))}

    </section>
  );
}