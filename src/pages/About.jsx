
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className="section page-section">
      <div className="about-grid">
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85"
          alt="Modern commercial building"
        />

        <div>
          <span className="eyebrow">ABOUT OUR COMPANY</span>
          <h1>Converlink Engineering Pvt. Ltd.</h1>

          <p>
            Converlink Engineering provides services across electrical
            work, maintenance, installation and interior designing.
          </p>

          <p>
            We aim to understand project requirements and provide
            suitable engineering and design solutions.
          </p>

          <ul className="check-list">
            {[
              "Electrical Work",
              "Maintenance",
              "Installation",
              "Interior Designing",
            ].map((service) => (
              <li key={service}>
                <FaCheckCircle /> {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
