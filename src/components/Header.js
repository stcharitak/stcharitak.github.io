import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;

  const siteNavRef = useRef();

  const handleBurgerButton = (e) => {
    e.preventDefault();
    siteNavRef.current.classList.add("animate");
    siteNavRef.current.classList.toggle("mobile-menu-hide");
  };

  return (
    <header id="site_header" className="header">
      <div className="header-content clearfix">
        <div className="text-logo">
          <a href="/">
            <div className="logo-symbol">S</div>
            <div className="logo-text">
              Stavros <span>Charitakis</span>
            </div>
          </a>
        </div>

        <div ref={siteNavRef} className="site-nav mobile-menu-hide">
          <ul className="leven-classic-menu site-main-menu">
            <li className="menu-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "current-menu-item" : ""
                }
                to="/"
              >
                About Me
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "current-menu-item" : ""
                }
                to="/resume"
              >
                Resume
              </NavLink>
            </li>

            <li className="menu-item">
              {pathname === "/" ? (
                <HashLink to="/#contact" smooth>
                  Contact
                </HashLink>
              ) : (
                <HashLink to="/resume/#contact" smooth>
                  Contact
                </HashLink>
              )}
            </li>
          </ul>
        </div>

        <div
          className="burger-btn menu-toggle mobile-visible"
          onClick={handleBurgerButton}
        >
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
