import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/navbar.css';

const navItems = ['about', 'experience', 'projects', 'skills', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-inner relative">
        <span className="navbar-logo">Ramya Kata</span>

        {/* Desktop Nav */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="navbar-link">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="menu-toggle md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="mobile-dropdown">
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
