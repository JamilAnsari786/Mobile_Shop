import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css"; // Import external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Shop Info */}
        <div className="footer-column">
          <h2 className="footer-title">Mobile Shop</h2>
          <p className="footer-text">
            Discover the latest smartphones at unbeatable prices. Shop Apple,
            Samsung, OnePlus, and more — all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/mobiles">Mobiles</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Contact Us</h3>
          <ul className="footer-contact">
            <li><FaPhoneAlt /> +91 9320716786</li>
            <li><FaEnvelope /> AJ@mobileshop.com</li>
            <li><FaMapMarkerAlt /> Navi Mumbai, India</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Newsletter</h3>
          <p className="footer-text">Subscribe for updates & offers.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Mobile Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
