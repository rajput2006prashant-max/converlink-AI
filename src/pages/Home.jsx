
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaTools,
  FaPlug,
  FaCouch,
  FaArrowRight,
} from "react-icons/fa";
import Slider from "../components/Slider";

const services = [
  {
    icon: <FaBolt />,
    title: "Electrical Work",
    text: "Electrical wiring, lighting and power solutions.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance",
    text: "Electrical system inspection and maintenance.",
  },
  {
    icon: <FaPlug />,
    title: "Installation",
    text: "Electrical equipment and lighting installation.",
  },
  {
    icon: <FaCouch />,
    title: "Interior Designing",
    text: "Interior planning and modern lighting design.",
  },
];

 function Home() {
  return (
    <>
      <Slider />

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Our Core Services</h2>
          <p>Explore our electrical and interior service categories.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link to="/services" className="text-link">
                Learn More <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <span className="eyebrow">LET'S WORK TOGETHER</span>
          <h2>Have a Project in Mind?</h2>
          <p>Contact us to discuss your requirements.</p>
        </div>
        <Link to="/contact" className="btn">Get in Touch</Link>
      </section>
    </>
  );
}
export default Home