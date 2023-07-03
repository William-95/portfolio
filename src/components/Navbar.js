import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import { FaAlignRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function Navbar() {
  const [state, setState] = useState({ isOpen: false });

  const handleToggle = () => {
    setState({ isOpen: !state.isOpen });
  };

  // nav visibility
  // scolling
  useEffect(() => {
    let prevPos = window.scrollY;

    const handleScroll = () => {
      const currentPos = window.scrollY;

      if (prevPos > currentPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-90px";
      }
      prevPos = currentPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // end scolling
  // end nav visibility

  // to return top
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  };
  // end to return top
  return (
    <>
      <ScrollToTop />

      <nav className="navbar" id="navbar">
        <div className="navCenter">
          <div className="navHeader">
            <h3>Portfolio</h3>

            <button type="button" className="navBtn" onClick={handleToggle}>
              <FaAlignRight className="navIcon" />
            </button>
          </div>

          <ul
            className={classNames("navLinks", { showNav: state.isOpen })}
            onClick={handleToggle}
          >
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to="/projects/">Progetti</Link>
            </li>
            <li>
              <Link to="/contact/">Contatti</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
