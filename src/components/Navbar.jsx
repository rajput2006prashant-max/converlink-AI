
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBolt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services", "/services"],
    ["Projects", "/projects"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={() => setOpen(false)}>
        <span className="logo-icon"><FaBolt /></span>
        <span>
          CONVERLINK
          <small>ENGINEERING PVT. LTD.</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={open ? "nav-links active" : "nav-links"}>
        {links.map(([name, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            onClick={() => setOpen(false)}
          >
            {name}
          </NavLink>
        ))}

        <Link
          to="/contact"
          className="btn btn-small"
          onClick={() => setOpen(false)}
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
