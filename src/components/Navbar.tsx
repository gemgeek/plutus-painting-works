import { useState } from 'react';
import logo from "../assets/plutus-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="absolute left-0 top-0 z-20 w-full bg-transparent p-6 text-white">
      <div className="container mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo / Brand Name */}
        <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Plutus Painting Works Logo"
          className="h-12 w-auto"  
        />
      </Link>

        {/* Desktop Navigation */}
        <ul className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="font-medium transition-colors hover:text-blue-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 w-full bg-black/70 backdrop-blur-sm md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;