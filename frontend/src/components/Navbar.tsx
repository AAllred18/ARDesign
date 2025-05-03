import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/ARClearLogo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  // const underlineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 875);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span>A&R Design</span>
        </Link>

        {isMobile ? (
          <button className="navbar-button" onClick={toggleMenu}>
            {isMenuOpen ? '✖' : '☰'}
          </button>
        ) : (
          <div className="navbar-links" ref={containerRef}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={item.name} className="nav-link-wrapper">
                  <Link
                    to={item.path}
                    className="nav-link"
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="nav-underline"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="mobile-dropdown">
          {navItems.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="nav-link"
              style={{
                color: location.pathname === link.path ? '#355e84' : 'white',
                fontWeight: location.pathname === link.path ? 'bold' : 500,
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
