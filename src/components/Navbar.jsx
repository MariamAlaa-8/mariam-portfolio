import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['about', 'experience', 'education', 'skills', 'contact'];

  return (
    <nav className="navbar">
      <h3 className="logo">
        Mariam<span>.</span>
      </h3>
      <ul className={open ? 'nav-links active' : 'nav-links'}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`} onClick={() => setOpen(false)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;