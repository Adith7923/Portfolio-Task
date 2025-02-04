import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/1708409271184.png";
import "../styles/Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  // Scroll to top on navigation to project page
  useEffect(() => {
    if (isProjectPage) {
      scroller.scrollTo("header", { smooth: true, duration: 500 });
    }
  }, [isProjectPage]);

  // Highlight "Contact me" when the copyright element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("contact");
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const target = document.querySelector(".copyright");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <nav className={isProjectPage ? "navbar-project" : "navbar"}>
        <img src={logo} className="logo" alt="Logo" />
        <ul className={isMenuOpen ? "active" : ""}>
          {isProjectPage && (
            <li>
             <a href="">
             <Link to="/" >Home</Link></a> 
            </li>
          )}
          {!isProjectPage && (
            <>
              <li>
                <ScrollLink
                  to="header"
                  smooth={true}
                  duration={100}
                  onClick={handleLinkClick}
                  className={activeSection === "header" ? "active-link" : ""}
                  spy={true}
                  offset={-70} // Adjust for fixed header
                  onSetActive={handleSetActive}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={100}
                  onClick={handleLinkClick}
                  className={activeSection === "about" ? "active-link" : ""}
                  spy={true}
                  offset={-70}
                  onSetActive={handleSetActive}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={100}
                  onClick={handleLinkClick}
                  className={activeSection === "services" ? "active-link" : ""}
                  spy={true}
                  offset={-70}
                  onSetActive={handleSetActive}
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={100}
                  onClick={handleLinkClick}
                  className={activeSection === "contact" ? "active-link" : ""}
                  spy={true}
                  offset={-70}
                  onSetActive={handleSetActive}
                >
                  Contact me
                </ScrollLink>
              </li>
            </>
          )}
        </ul>
        <div
          className={`icon ${isMenuOpen ? "rotate" : ""}`}
          onClick={toggleMenu}
        >
          <FaBarsStaggered />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
