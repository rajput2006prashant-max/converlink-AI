
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "Powering Your Vision",
    text: "Electrical work and engineering solutions for your projects.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Reliable Maintenance",
    text: "Maintenance and installation solutions for your requirements.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1800&q=85",
  },
  {
    title: "Modern Interior Solutions",
    text: "Interior design and lighting ideas for modern spaces.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((previous) => (previous + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url("${slide.image}")` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="eyebrow">CONVERLINK ENGINEERING</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>

          <div className="hero-actions">
            <Link to="/services" className="btn">
              Our Services <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="slider-dots">
          {slides.map((item, i) => (
            <button
              key={item.title}
              className={i === index ? "dot active" : "dot"}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
