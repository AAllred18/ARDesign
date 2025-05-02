import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/ARClearLogo.png';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

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
        <Link to="/" className="navbar-logo ">
          <img src={logo} alt="Logo" className="logo-image" />
          <span>A&R Design</span>
        </Link>

        {isMobile ? (
          <button className="navbar-button" onClick={toggleMenu}>
            {isMenuOpen ? '✖' : '☰'}
          </button>
        ) : (
          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="mobile-dropdown">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Resume', path: '/resume' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
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
