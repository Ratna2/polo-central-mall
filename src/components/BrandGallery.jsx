import "../styles/brandGallery.css";
import { useState } from "react";

const BrandGallery = ({ media }) => {

  const images = media.filter(item => item.type === "image");
  const videos = media.filter(item => item.type === "youtube");

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="brand-gallery-wrapper">

      {/* IMAGE SECTION */}

      {images.length > 0 && (
        <div className="image-section">

          <h2 className="gallery-title">Gallery</h2>

          <div className="brand-gallery">

            {images.map((item, index) => {

              const size =
                index % 6 === 0
                  ? "large"
                  : index % 4 === 0
                  ? "wide"
                  : "normal";

              return (
                <div className={`gallery-item ${size}`} key={index}>
                  <img src={item.src} alt="brand media" loading="lazy" />
                </div>
              );
            })}

          </div>

        </div>
      )}

      {/* VIDEO SECTION */}

      {videos.length > 0 && (
        <div className="video-section">

          <h2 className="gallery-title">Videos</h2>

          <div className="video-gallery">

            {videos.map((item, index) => {

              const isPlaying = activeVideo === index;

              return (
                <div
                  className="video-item"
                  key={index}
                  onClick={() => setActiveVideo(index)}
                >

                  {isPlaying ? (

                    <iframe
                      src={`https://www.youtube.com/embed/${item.id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1`}
                      title="brand video"
                      allow="autoplay"
                    />

                  ) : (

                    <>
                      <img
                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`}
                        alt="video thumbnail"
                      />

                      <div className="play-button">▶</div>
                    </>

                  )}

                </div>
              );
            })}

          </div>

        </div>
      )}

    </div>
  );
};

export default BrandGallery;