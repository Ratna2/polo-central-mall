export default function DiningContent({ description, features, floor }) {

  return (
    <section className="dining-content">

      <p>{description}</p>

      <ul>
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="floor-info">
        <h3>Location</h3>
        <p>{floor}</p>
      </div>

    </section>
  );
}