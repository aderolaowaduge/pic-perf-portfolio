import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu toggle

// Navbar component handles site navigation and mobile responsiveness
const Navbar = () => {
  // State to track whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      // Custom linear gradient background and sticky positioning
      style={{
        background:
          'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(14,7,7,0.9) 50%, rgba(0,0,0,0.9) 100%)',
      }}
      className="fixed top-0 w-full z-50 shadow-md"
    >
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Site title / brand name */}
        <a href="#" className="text-xl font-handwritten text-earth-light">
          picture perfect by aderola
        </a>

        {/* Mobile menu toggle button (visible on small screens only) */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {/* Conditionally render close (X) or hamburger (Menu) icon */}
          {menuOpen ? (
            <X className="text-earth-light" />
          ) : (
            <Menu className="text-earth-light" />
          )}
        </button>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex space-x-6 text-earth-light font-handwritten">
          <li>
            <a href="#about" className="hover:text-earth-accent">
              About
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-earth-accent">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-earth-accent">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile navigation menu (visible only when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden bg-earth-bg px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-earth-light font-medium">
            {/* Each link closes the mobile menu when clicked */}
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
