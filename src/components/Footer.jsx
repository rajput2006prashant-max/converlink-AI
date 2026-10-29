
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3><FaBolt /> CONVERLINK</h3>
          <p>
            Electrical work, maintenance, installation and
            interior designing services.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact Information</h4>
          <p><FaPhone /> +91 9015189096</p>
          <p><FaEnvelope /> converlink@gmail.com</p>
          <p>
            <FaMapMarkerAlt />
            Mahindra Enclave, Shastri Nagar,
            Ghaziabad - 201002
          </p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Converlink Engineering Pvt. Ltd.
        All rights reserved.
      </div>
    </footer>
  );
}
