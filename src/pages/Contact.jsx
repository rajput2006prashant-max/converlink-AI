
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Electrical Work",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = `Website Enquiry
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Message: ${form.message}`;

    const url =
      `https://wa.me/917818055737?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section page-section">
      <div className="section-heading">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>Tell us about your project requirements.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Let's Discuss Your Project</h2>
          <p><FaPhone /> +91 9015189096</p>
          <p><FaEnvelope /> converlink@gmail.com</p>
          <p>
            <FaMapMarkerAlt />
            B.O. J-192, Mahindra Enclave, Shastri Nagar,
            Ghaziabad, Uttar Pradesh - 201002
          </p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit phone number"
            required
          />

          <label htmlFor="service">Select Service</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option>Electrical Work</option>
            <option>Maintenance</option>
            <option>Installation</option>
            <option>Interior Designing</option>
          </select>

          <label htmlFor="message">Project Details</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your requirements"
            rows="5"
            required
          />

          <button type="submit" className="btn">
            Send Enquiry on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
