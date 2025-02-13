import { LuShoppingBag } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/" onClick={() => setMenu("Home")}>
        <img src={assets.logo1} className="logo" alt="Munchly Logo" />
      </Link>

      {/* Hamburger Menu Toggle */}
      <div
        className="hamburger-menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <IoMdClose className="close-btn" size={30} />
        ) : (
          <GiHamburgerMenu size={30} />
        )}
      </div>

      {/* Mobile Menu */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className={location.pathname === "/menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setIsMobileMenuOpen(false)}
          className={location.pathname === "/mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setIsMobileMenuOpen(false)}
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <FaRegBell size={32} color="#49557e" cursor="pointer" />
        <div className="navbar-search-icon">
          <Link
            to="/cart"
            className={location.pathname === "/cart" ? "active-cart" : ""}
          >
            <LuShoppingBag size={32} color="#49557e" cursor="pointer" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
