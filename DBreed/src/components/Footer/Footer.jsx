import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-section">
        <div className="footer-grid">
          {/* Left Section: Logo, Description, and Contact Info */}
          <div className="footer-item">
            <h1 className="sm:text-3xl text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              DBreed
            </h1>
            <p className="text-base mb-4">
              Your one-stop destination for everything related to dogs. From breed identification to health and care tips, we have it all.
            </p>
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <FaLocationArrow />
              <p>Noida, Sri Lanka</p>
            </div>
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <FaMobileAlt />
              <p>+94 123456789</p>
            </div>
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <FaEnvelope />
              <p>info@dbreed.com</p>
            </div>
            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <FaClock />
              <p>Mon - Fri: 9AM - 6PM</p>
            </div>

            {/* Social Media Links */}
            <div className="social-media-icons">
              <a href="#" className="text-3xl text-gray-600 hover:text-blue-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl text-gray-600 hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl text-gray-600 hover:text-blue-600">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Section: Links, Support, Company, and Newsletter */}
          <div className="flex flex-col md:flex-row justify-between gap-20">
            {/* Quick Links */}
            <div className="footer-item">
              <h2>Quick Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Login</li>
              </ul>
            </div>

            {/* Customer Support */}
            <div className="footer-item">
              <h2>Customer Support</h2>
              <ul>
                <li>Help Center</li>
                <li>FAQ</li>
                <li>Return Policy</li>
                <li>Shipping Info</li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="footer-item">
              <h2>Company</h2>
              <ul>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="footer-item">
              <h2>Newsletter</h2>
              
              <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates, offers, and tips.</p>
              <input
                type="email"
                placeholder="Your email"
                className="p-2 mb-3 rounded bg-white border border-gray-300 text-gray-800 w-full md:w-64"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded w-full md:w-auto hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>
            @copyright 2024 All rights reserved || Made with ❤️ by Nimtech
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
