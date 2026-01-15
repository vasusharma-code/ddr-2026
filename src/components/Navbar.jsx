import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/IITD.png';
import DDRLogo from '../assets/DDLogo-removebg-preview.png';
import logo2 from '../assets/STPI_Logo_Final_8_4v5[1].png';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isSponsorDropdownOpen, setSponsorDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    // Close dropdowns and mobile menu when the route changes
    setOpenDropdown(null);
    closeMobileMenu();
  }, [location]);

  // Sponsor dropdown handlers
  const handleSponsorClick = (e) => {
    e.preventDefault();
    setSponsorDropdownOpen((prev) => !prev);
  };

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-10 top-0 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
      style={{ minHeight: '72px' }} // Ensures minimum height for navbar
    >
      <div className="container mx-auto px-2 md:px-4 py-2 flex flex-wrap items-center justify-between min-h-[72px]">
        <div className="flex items-center min-w-[220px]">
          <img src={logo} alt="Logo" className="h-12 md:h-16 mr-1" />
          <h1 className="text-lg md:text-xl font-bold flex items-center whitespace-nowrap">
            DD Robocon 2026
            <img src={DDRLogo} alt="DDRLogo" className="h-10 md:h-12 ml-2 md:ml-3" />
            <img src={logo2} alt="Logo2" className="h-10 md:h-12 ml-2 md:ml-3 mb-2 md:mb-4" />
          </h1>
        </div>
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenu3Line className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Desktop Navigation and Social Icons */}
        <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end min-w-0">
          <ul className="flex flex-wrap space-x-2 lg:space-x-4 text-gray-900 items-center">
            <li><Link to="/" className="nav">Home</Link></li>
            <li><Link to="/contest-rules" className="nav">Contest Rules</Link></li>
            <li><Link to="/game-videos" className="nav">Game Videos</Link></li>
            <li><Link to="/registration" className="nav">Registration</Link></li>
            <li><Link to="/stage1" className="nav">Stage-1</Link></li>
            {/* <li><Link to="/stage1" className="nav">Stage-1</Link></li>
            <li><Link to="/stage2" className="nav">Stage-2</Link></li>
            <li><Link to="/final" className="nav">Final</Link></li> */}
            <li className="relative">
              <span
                className="nav cursor-pointer select-none"
                onClick={handleSponsorClick}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') handleSponsorClick(e); }}
                aria-haspopup="true"
                aria-expanded={isSponsorDropdownOpen}
              >
                Sponsor ▾
              </span>
              <ul
                className={`absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg transition-opacity duration-200 z-20 ${
                  isSponsorDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setSponsorDropdownOpen(false)}
              >
                <li>
                  <Link to="/sponsorship" className="block px-4 py-2 hover:bg-gray-100">Sponsorship</Link>
                </li>
                {/* <li>
                  <Link to="/mathworks" className="block px-4 py-2 hover:bg-gray-100">MathWorks</Link>
                </li> */}
              </ul>
            </li>
            <li><Link to="/contact" className="nav">Contact</Link></li>
            <li>
              <a 
                href="https://ddrobocon2025.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav"
              >
                DD-Robocon 2025
              </a>
            </li>
          </ul>
          <div className="flex space-x-2 lg:space-x-4 ml-2 lg:ml-4">
            <a href="https://youtube.com/@ddnationalrobocon2441?si=v63ugCnYiJLEG3dK" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ddrobocon?igsh=MXRkMzh6M2I0ZHQ1Ng==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/share/18nEjBGXC4/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://in.linkedin.com/in/munna-pati-99664217a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center z-20">
          <ul className="bg-white bg-opacity-90 w-11/12 max-w-md rounded-lg shadow-lg text-center space-y-4 py-8">
            <li><Link to="/" className="nav" onClick={closeMobileMenu}>Home</Link></li>
            <li>
              <Link to="/important-dates" className="nav" onClick={closeMobileMenu}>Important Dates</Link>
            </li>
            <li>
              <Link to="/contest-rules" className="nav" onClick={closeMobileMenu}>Contest Rules</Link>
            </li>
            <li>
              <Link to="/game-videos" className="nav" onClick={closeMobileMenu}>Game Videos</Link>
            </li>
            <li>
              <Link to="/registration" className="nav" onClick={closeMobileMenu}>Registration</Link>
            </li>
            <li>
              <Link to="/stage1" className="nav" onClick={closeMobileMenu}>Stage-1</Link>
            </li>
            {/* <li>
              <Link to="/stage1" className="nav" onClick={closeMobileMenu}>Stage-1</Link>
            </li>
            <li>
              <Link to="/stage2" className="nav" onClick={closeMobileMenu}>Stage-2</Link>
            </li>
             <li>
              <Link to="/final" className="nav" onClick={closeMobileMenu}>Final</Link>
            </li>
           */}
           
            <li>
              <span
                className="nav cursor-pointer select-none flex items-center justify-center"
                onClick={handleSponsorClick}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') handleSponsorClick(e); }}
                aria-haspopup="true"
                aria-expanded={isSponsorDropdownOpen}
              >
                Sponsor ▾
              </span>
              {isSponsorDropdownOpen && (
                <ul className="ml-4 bg-white bg-opacity-90 rounded shadow-lg text-left space-y-2 py-2">
                  <li>
                    <Link to="/sponsorship" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>Sponsorship</Link>
                  </li>
                  {/* <li>
                    <Link to="/mathworks" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>MathWorks</Link>
                  </li> */}
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className="nav" onClick={closeMobileMenu}>Contact</Link>
            </li>
            <li>
              <a 
                href="https://ddrobocon2025.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav"
                onClick={closeMobileMenu}
              >
                DD-Robocon 2025
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="https://youtube.com/@ddnationalrobocon2441?si=v63ugCnYiJLEG3dK" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="w-6 h-6 text-black" />
            </a>
            <a href="https://www.instagram.com/ddrobocon?igsh=MXRkMzh6M2I0ZHQ1Ng==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 text-black" />
            </a>
            <a href="https://www.facebook.com/share/18nEjBGXC4/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 text-black" />
            </a>
            <a href="https://in.linkedin.com/in/munna-pati-99664217a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-black" />
            </a>
          </div>
        </div>
      )}
      <style jsx>{`
        .nav {
          display: inline-flex;
          align-items: center;
          position: relative;
          text-decoration: none;
          color: inherit;
          transition: all 0.5s;
        }
        .nav::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: black;
          transform-origin: bottom right;
          transition: transform 0.5s ease-out;
        }
        .nav:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;