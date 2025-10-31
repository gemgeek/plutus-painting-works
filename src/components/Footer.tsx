import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      <img
        src="/assets/footer-background.png"
        alt="Plutus painting works background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Plutus Painting Works
            </Link>
            <p className="mt-2 text-gray-400">
              We bring color to your life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:plutuspaintingworks23@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  plutuspaintingworks23@gmail.com
                </a>
              </li>
              <li>+233 54 279 2537 / +233 53 502 7439 </li>
              <li>Tema, Ghana</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Plutus Painting Works. All Rights Reserved.
            </p>

            <div className="mt-4 flex space-x-4 sm:mt-0">
              <a
                href="https://www.facebook.com/profile.php?id=61559921330795&mibextid=JRoKGi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/plutus_paintings?igsh=eWJrOTQzcWljdTM5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/plutus-painting-works/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@plutus.painting.works?_t=8psEtnx9tjy&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;