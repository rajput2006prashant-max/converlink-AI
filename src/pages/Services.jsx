
import { FaBolt, FaTools, FaPlug, FaCouch } from "react-icons/fa";

const services = [
  {
    icon: <FaBolt />,
    title: "Electrical Work",
    text: "Electrical wiring, lighting and power distribution solutions.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance",
    text: "Electrical inspections, troubleshooting and upkeep.",
  },
  {
    icon: <FaPlug />,
    title: "Installation",
    text: "Installation of electrical equipment and fixtures.",
  },
  {
    icon: <FaCouch />,
    title: "Interior Designing",
    text: "Interior planning, aesthetics and lighting coordination.",
  },
];

export default function Services() {
  return (
    <section className="section page-section">
      <div className="section-heading">
        <span className="eyebrow">WHAT WE OFFER</span>
        <h1>Our Services</h1>
        <p>Explore our four main service categories.</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
