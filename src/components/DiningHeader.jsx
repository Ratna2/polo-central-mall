export default function DiningHeader({ video, logo, title }) {

  return (
    <section className="dining-header">

      <video autoPlay muted loop playsInline preload="none">
        <source src={video} type="video/mp4" />
      </video>

      <div className="overlay">
        <img src={logo} alt={title} />
        <h1>{title}</h1>
      </div>

    </section>
  );
}